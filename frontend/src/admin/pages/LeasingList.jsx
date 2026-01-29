import { useEffect, useState, useCallback } from 'react';
import { FileText, Search, Calendar, TrendingUp, Plus, Edit2, Trash2 } from 'lucide-react';
import Table from '../components/common/Table';
import Pagination from '../components/common/Pagination';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { toast } from '../components/common/Toast';
import { leasingApi } from '../api/leasing';

/**
 * 租赁管理页面 - 完整CRUD
 */
const LeasingList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 });

  // 弹窗状态
  const [editModal, setEditModal] = useState({ visible: false, item: null, loading: false, isEdit: false });
  const [deleteModal, setDeleteModal] = useState({ visible: false, item: null, loading: false });
  const [statusModal, setStatusModal] = useState({ visible: false, item: null, loading: false });

  // 表单数据
  const [formData, setFormData] = useState({
    name: '', type: 'financing', image: '', description: '', supplier: '',
    monthlyPrice: '', totalPrice: '', duration: '', dailyPrice: '', weeklyPrice: '', status: 1
  });

  // 获取列表
  const fetchList = useCallback(async () => {
    setLoading(true);
    try {
      const res = await leasingApi.getList({
        page: pagination.current,
        size: pagination.pageSize,
        type: typeFilter || undefined,
        status: statusFilter !== '' ? Number(statusFilter) : undefined,
        keyword: searchTerm,
      });
      setItems(res?.records || []);
      setPagination(prev => ({ ...prev, total: res?.total || 0 }));
    } catch (error) {
      console.error('获取租赁列表失败:', error);
    } finally {
      setLoading(false);
    }
  }, [pagination.current, pagination.pageSize, typeFilter, statusFilter, searchTerm]);

  useEffect(() => { fetchList(); }, [fetchList]);

  // 搜索防抖
  const [searchTimeout, setSearchTimeout] = useState(null);
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (searchTimeout) clearTimeout(searchTimeout);
    setSearchTimeout(setTimeout(() => setPagination(prev => ({ ...prev, current: 1 })), 500));
  };

  const handlePageChange = (page) => setPagination(prev => ({ ...prev, current: page }));


  // 打开新增弹窗
  const openCreateModal = () => {
    setFormData({ name: '', type: 'financing', image: '', description: '', supplier: '', monthlyPrice: '', totalPrice: '', duration: '', dailyPrice: '', weeklyPrice: '', status: 1 });
    setEditModal({ visible: true, item: null, loading: false, isEdit: false });
  };

  // 打开编辑弹窗
  const openEditModal = (item) => {
    setFormData({
      name: item.name || '',
      type: item.type || 'financing',
      image: item.image || '',
      description: item.description || '',
      supplier: item.supplier || '',
      monthlyPrice: item.monthlyPrice || '',
      totalPrice: item.totalPrice || '',
      duration: item.duration || '',
      dailyPrice: item.dailyPrice || '',
      weeklyPrice: item.weeklyPrice || '',
      status: item.status ?? 1,
    });
    setEditModal({ visible: true, item, loading: false, isEdit: true });
  };

  // 保存设备
  const handleSave = async () => {
    if (!formData.name.trim()) { toast.error('请输入设备名称'); return; }
    if (!formData.monthlyPrice) { toast.error('请输入月租金'); return; }

    setEditModal(prev => ({ ...prev, loading: true }));
    try {
      if (editModal.isEdit) {
        await leasingApi.update(editModal.item.id, formData);
        toast.success('设备更新成功');
      } else {
        await leasingApi.create(formData);
        toast.success('设备创建成功');
      }
      setEditModal({ visible: false, item: null, loading: false, isEdit: false });
      fetchList();
    } catch (error) {
      toast.error((editModal.isEdit ? '更新' : '创建') + '失败: ' + error.message);
    } finally {
      setEditModal(prev => ({ ...prev, loading: false }));
    }
  };

  // 删除设备
  const handleDelete = async () => {
    const { item } = deleteModal;
    if (!item) return;
    setDeleteModal(prev => ({ ...prev, loading: true }));
    try {
      await leasingApi.delete(item.id);
      toast.success('设备已删除');
      setDeleteModal({ visible: false, item: null, loading: false });
      fetchList();
    } catch (error) {
      toast.error('删除失败: ' + error.message);
    } finally {
      setDeleteModal(prev => ({ ...prev, loading: false }));
    }
  };

  // 切换状态
  const handleToggleStatus = async () => {
    const { item } = statusModal;
    if (!item) return;
    setStatusModal(prev => ({ ...prev, loading: true }));
    try {
      const newStatus = item.status === 1 ? 0 : 1;
      await leasingApi.updateStatus(item.id, newStatus);
      toast.success(newStatus === 1 ? '设备已上架' : '设备已下架');
      setStatusModal({ visible: false, item: null, loading: false });
      fetchList();
    } catch (error) {
      toast.error('操作失败: ' + error.message);
    } finally {
      setStatusModal(prev => ({ ...prev, loading: false }));
    }
  };


  // 表格列配置
  const columns = [
    { key: 'id', title: 'ID' },
    { key: 'name', title: '设备名称', render: (_, r) => <span className="font-medium text-gray-900 line-clamp-1">{r.name}</span> },
    {
      key: 'type', title: '租赁类型',
      render: (_, r) => <Badge type={r.type === 'financing' ? 'primary' : 'success'}>{r.type === 'financing' ? '融资租赁' : '经营租赁'}</Badge>,
    },
    {
      key: 'price', title: '价格',
      render: (_, r) => r.type === 'financing'
        ? <span className="text-orange-500 font-bold">¥{r.monthlyPrice}/月</span>
        : <span className="text-green-600 font-bold">¥{r.dailyPrice}/天</span>,
    },
    { key: 'supplier', title: '供应商', render: (_, r) => r.supplier || '-' },
    { key: 'leased', title: '已租次数', render: (_, r) => <span className="text-gray-600">{r.leased || 0}次</span> },
    {
      key: 'status', title: '状态',
      render: (_, r) => <Badge type={r.status === 1 ? 'success' : 'danger'}>{r.status === 1 ? '上架中' : '已下架'}</Badge>,
    },
    {
      key: 'actions', title: '操作',
      render: (_, r) => (
        <div className="flex gap-1">
          <Button type="default" size="sm" onClick={() => openEditModal(r)}><Edit2 size={14} /></Button>
          <Button type={r.status === 1 ? 'warning' : 'success'} size="sm" onClick={() => setStatusModal({ visible: true, item: r, loading: false })}>
            {r.status === 1 ? '下架' : '上架'}
          </Button>
          <Button type="danger" size="sm" onClick={() => setDeleteModal({ visible: true, item: r, loading: false })}><Trash2 size={14} /></Button>
        </div>
      ),
    },
  ];

  // 统计数据
  const stats = {
    financing: items.filter(i => i.type === 'financing').length,
    operating: items.filter(i => i.type === 'operating').length,
    online: items.filter(i => i.status === 1).length,
    offline: items.filter(i => i.status === 0).length,
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* 头部 */}
      <div className="p-6 border-b border-gray-100 flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <FileText className="text-blue-600" />
          租赁管理
        </h2>
        <div className="flex items-center gap-3 flex-wrap">
          <Button type="primary" onClick={openCreateModal}><Plus size={16} className="mr-1" />新增设备</Button>
          <select className="px-3 py-2 border rounded-lg text-sm" value={typeFilter} onChange={(e) => { setTypeFilter(e.target.value); setPagination(p => ({ ...p, current: 1 })); }}>
            <option value="">全部类型</option>
            <option value="financing">融资租赁</option>
            <option value="operating">经营租赁</option>
          </select>
          <select className="px-3 py-2 border rounded-lg text-sm" value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPagination(p => ({ ...p, current: 1 })); }}>
            <option value="">全部状态</option>
            <option value="1">上架中</option>
            <option value="0">已下架</option>
          </select>
          <div className="relative">
            <input type="text" placeholder="搜索设备名称..." className="pl-9 pr-4 py-2 border rounded-lg text-sm w-56" value={searchTerm} onChange={handleSearchChange} />
            <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* 统计卡片 */}
      <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"><TrendingUp className="text-white" size={20} /></div>
          <div><p className="text-xs text-gray-500">融资租赁</p><p className="text-lg font-bold text-gray-900">{stats.financing}</p></div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center"><Calendar className="text-white" size={20} /></div>
          <div><p className="text-xs text-gray-500">经营租赁</p><p className="text-lg font-bold text-gray-900">{stats.operating}</p></div>
        </div>
        <div className="bg-orange-50 rounded-lg p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center"><FileText className="text-white" size={20} /></div>
          <div><p className="text-xs text-gray-500">上架中</p><p className="text-lg font-bold text-gray-900">{stats.online}</p></div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center"><FileText className="text-white" size={20} /></div>
          <div><p className="text-xs text-gray-500">已下架</p><p className="text-lg font-bold text-gray-900">{stats.offline}</p></div>
        </div>
      </div>

      <Table columns={columns} data={items} loading={loading} emptyText="暂无租赁设备" />
      <Pagination current={pagination.current} pageSize={pagination.pageSize} total={pagination.total} onChange={handlePageChange} />


      {/* 编辑/新增弹窗 */}
      <Modal visible={editModal.visible} title={editModal.isEdit ? '编辑设备' : '新增设备'} onClose={() => setEditModal({ visible: false, item: null, loading: false, isEdit: false })} onConfirm={handleSave} confirmText="保存" loading={editModal.loading} width="lg">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">设备名称 *</label>
              <input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" placeholder="请输入设备名称" value={formData.name} onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">租赁类型 *</label>
              <select className="w-full px-3 py-2 border rounded-lg text-sm" value={formData.type} onChange={(e) => setFormData(p => ({ ...p, type: e.target.value }))}>
                <option value="financing">融资租赁</option>
                <option value="operating">经营租赁</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">供应商</label>
              <input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" placeholder="供应商名称" value={formData.supplier} onChange={(e) => setFormData(p => ({ ...p, supplier: e.target.value }))} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">图片URL</label>
              <input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" placeholder="https://..." value={formData.image} onChange={(e) => setFormData(p => ({ ...p, image: e.target.value }))} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">设备描述</label>
            <textarea className="w-full px-3 py-2 border rounded-lg text-sm" rows={2} placeholder="设备描述..." value={formData.description} onChange={(e) => setFormData(p => ({ ...p, description: e.target.value }))} />
          </div>

          {/* 融资租赁字段 */}
          {formData.type === 'financing' && (
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">月租金 *</label>
                <input type="number" className="w-full px-3 py-2 border rounded-lg text-sm" placeholder="0.00" value={formData.monthlyPrice} onChange={(e) => setFormData(p => ({ ...p, monthlyPrice: e.target.value }))} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">设备总价</label>
                <input type="number" className="w-full px-3 py-2 border rounded-lg text-sm" placeholder="0.00" value={formData.totalPrice} onChange={(e) => setFormData(p => ({ ...p, totalPrice: e.target.value }))} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">租期</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" placeholder="如: 36个月" value={formData.duration} onChange={(e) => setFormData(p => ({ ...p, duration: e.target.value }))} />
              </div>
            </div>
          )}

          {/* 经营租赁字段 */}
          {formData.type === 'operating' && (
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">日租金</label>
                <input type="number" className="w-full px-3 py-2 border rounded-lg text-sm" placeholder="0.00" value={formData.dailyPrice} onChange={(e) => setFormData(p => ({ ...p, dailyPrice: e.target.value }))} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">周租金</label>
                <input type="number" className="w-full px-3 py-2 border rounded-lg text-sm" placeholder="0.00" value={formData.weeklyPrice} onChange={(e) => setFormData(p => ({ ...p, weeklyPrice: e.target.value }))} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">月租金 *</label>
                <input type="number" className="w-full px-3 py-2 border rounded-lg text-sm" placeholder="0.00" value={formData.monthlyPrice} onChange={(e) => setFormData(p => ({ ...p, monthlyPrice: e.target.value }))} />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">状态</label>
            <select className="w-full px-3 py-2 border rounded-lg text-sm" value={formData.status} onChange={(e) => setFormData(p => ({ ...p, status: Number(e.target.value) }))}>
              <option value={1}>上架</option>
              <option value={0}>下架</option>
            </select>
          </div>
        </div>
      </Modal>

      {/* 状态切换弹窗 */}
      <Modal visible={statusModal.visible} title="确认操作" onClose={() => setStatusModal({ visible: false, item: null, loading: false })} onConfirm={handleToggleStatus} confirmText="确定" confirmType={statusModal.item?.status === 1 ? 'danger' : 'success'} loading={statusModal.loading}>
        <p className="text-gray-600">确定要{statusModal.item?.status === 1 ? '下架' : '上架'}设备 <span className="font-medium text-gray-900">{statusModal.item?.name}</span> 吗？</p>
      </Modal>

      {/* 删除确认弹窗 */}
      <Modal visible={deleteModal.visible} title="确认删除" onClose={() => setDeleteModal({ visible: false, item: null, loading: false })} onConfirm={handleDelete} confirmText="确认删除" confirmType="danger" loading={deleteModal.loading}>
        <p className="text-gray-600">确定要删除设备 <span className="font-medium text-gray-900">{deleteModal.item?.name}</span> 吗？此操作不可恢复。</p>
      </Modal>
    </div>
  );
};

export default LeasingList;
