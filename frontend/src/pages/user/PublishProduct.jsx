import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Upload, Plus, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { productApi } from '../../api/product';
import { categoryApi } from '../../api/index';
import { api } from '../../api/index';

const PublishProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // 编辑模式下有 id
  const { user } = useAuth();
  const isEdit = !!id;

  const [categories, setCategories] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    categoryId: '',
    price: '',
    originalPrice: '',
    stock: '',
    image: '',
    album: '',
    description: '',
    specs: '',
  });

  useEffect(() => {
    if (!user || user.role !== 'SUPPLIER') {
      navigate('/login');
      return;
    }
    loadCategories();
    if (isEdit) loadProduct();
  }, []);

  const loadCategories = async () => {
    try {
      const data = await categoryApi.getList();
      setCategories(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error('加载分类失败:', e);
    }
  };

  const loadProduct = async () => {
    try {
      const res = await productApi.getDetail(id);
      if (res) {
        setForm({
          name: res.name || '',
          categoryId: res.categoryId || '',
          price: res.price || '',
          originalPrice: res.originalPrice || '',
          stock: res.stock || '',
          image: res.image || '',
          album: res.album || '',
          description: res.description || '',
          specs: res.specs || '',
        });
      }
    } catch (e) {
      console.error('加载商品详情失败:', e);
    }
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) { alert('请输入商品名称'); return; }
    if (!form.price) { alert('请输入价格'); return; }
    if (!form.stock) { alert('请输入库存'); return; }

    setSubmitting(true);
    try {
      const payload = {
        ...form,
        categoryId: form.categoryId ? Number(form.categoryId) : null,
        price: Number(form.price),
        originalPrice: form.originalPrice ? Number(form.originalPrice) : null,
        stock: Number(form.stock),
      };

      if (isEdit) {
        await api.put(`/api/v1/product/supplier/${id}`, payload);
        alert('商品更新成功！');
      } else {
        await api.post('/api/v1/product/supplier/create', payload);
        alert('商品发布成功！');
      }
      navigate('/profile');
    } catch (e) {
      alert('操作失败: ' + (e.message || '网络错误'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-500 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          返回
        </button>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">
            {isEdit ? '编辑商品' : '发布新商品'}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 商品名称 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">商品名称 *</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="请输入商品名称"
                value={form.name}
                onChange={e => handleChange('name', e.target.value)}
              />
            </div>

            {/* 分类 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">商品分类</label>
              <select
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={form.categoryId}
                onChange={e => handleChange('categoryId', e.target.value)}
              >
                <option value="">请选择分类</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            {/* 价格区域 */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">销售价格 * (元)</label>
                <input
                  type="number" step="0.01" min="0"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="0.00"
                  value={form.price}
                  onChange={e => handleChange('price', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">原价 (元)</label>
                <input
                  type="number" step="0.01" min="0"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="0.00"
                  value={form.originalPrice}
                  onChange={e => handleChange('originalPrice', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">库存 *</label>
                <input
                  type="number" min="0"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                  value={form.stock}
                  onChange={e => handleChange('stock', e.target.value)}
                />
              </div>
            </div>

            {/* 商品图片 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">主图URL</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/image.jpg"
                value={form.image}
                onChange={e => handleChange('image', e.target.value)}
              />
              {form.image && (
                <img src={form.image} alt="预览" className="mt-2 w-32 h-32 object-cover rounded-lg border" />
              )}
            </div>

            {/* 商品描述 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">商品描述</label>
              <textarea
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="详细描述商品特点、参数等信息..."
                value={form.description}
                onChange={e => handleChange('description', e.target.value)}
              />
            </div>

            {/* 规格参数 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">规格参数 (JSON格式)</label>
              <textarea
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                rows={3}
                placeholder='[{"key": "品牌", "value": "XXX"}, {"key": "型号", "value": "YYY"}]'
                value={form.specs}
                onChange={e => handleChange('specs', e.target.value)}
              />
            </div>

            {/* 提交按钮 */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
              >
                取消
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50"
              >
                {submitting ? '提交中...' : isEdit ? '保存修改' : '发布商品'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PublishProduct;
