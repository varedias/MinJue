import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import {
  LOCAL_PRODUCT_CATEGORIES,
  getSupplierProductById,
  saveSupplierProduct,
} from '../../utils/personalCenterStorage';

const initialForm = {
  name: '',
  categoryId: '',
  price: '',
  originalPrice: '',
  stock: '',
  image: '',
  description: '',
  specs: '',
  tags: '',
};

const PublishProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();
  const isEdit = Boolean(id);

  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (!user || user.role !== 'SUPPLIER') {
      navigate('/login');
      return;
    }

    if (isEdit) {
      const product = getSupplierProductById(user, id);
      if (!product) {
        alert('未找到对应商品，已返回供应中心');
        navigate('/profile');
        return;
      }

      setForm({
        name: product.name || '',
        categoryId: product.categoryId || '',
        price: product.price || '',
        originalPrice: product.originalPrice || '',
        stock: product.stock || '',
        image: product.image || '',
        description: product.description || '',
        specs: typeof product.specs === 'string' ? product.specs : JSON.stringify(product.specs || '', null, 2),
        tags: Array.isArray(product.tags) ? product.tags.join('，') : '',
      });
    }
  }, [user, navigate, isEdit, id]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim()) {
      alert('请输入商品名称');
      return;
    }
    if (!form.price) {
      alert('请输入价格');
      return;
    }
    if (!form.stock) {
      alert('请输入库存');
      return;
    }

    setSubmitting(true);
    try {
      saveSupplierProduct(user, {
        id: isEdit ? Number(id) : undefined,
        name: form.name.trim(),
        categoryId: form.categoryId,
        price: Number(form.price),
        originalPrice: form.originalPrice ? Number(form.originalPrice) : 0,
        stock: Number(form.stock),
        image: form.image.trim(),
        description: form.description.trim(),
        specs: form.specs.trim(),
        tags: form.tags.trim(),
      });

      alert(isEdit ? '商品信息已更新到本地供应中心。' : '商品已加入本地商品库。');
      navigate('/profile');
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
          <div className="flex items-start justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{isEdit ? '编辑商品' : '发布新商品'}</h1>
              <p className="text-sm text-gray-500 mt-2">当前为纯前端静态模式，提交后会保存到本地供应中心。</p>
            </div>
            <div className="rounded-xl bg-blue-50 px-4 py-3 text-sm text-blue-700">
              支持字段: 分类、价格、库存、标签、描述
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">商品名称 *</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="请输入商品名称"
                value={form.name}
                onChange={(event) => handleChange('name', event.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">商品分类</label>
              <select
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={form.categoryId}
                onChange={(event) => handleChange('categoryId', event.target.value)}
              >
                <option value="">请选择分类</option>
                {LOCAL_PRODUCT_CATEGORIES.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">销售价格 * (元)</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="0.00"
                  value={form.price}
                  onChange={(event) => handleChange('price', event.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">原价 (元)</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="0.00"
                  value={form.originalPrice}
                  onChange={(event) => handleChange('originalPrice', event.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">库存 *</label>
                <input
                  type="number"
                  min="0"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                  value={form.stock}
                  onChange={(event) => handleChange('stock', event.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">主图链接</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/image.jpg"
                value={form.image}
                onChange={(event) => handleChange('image', event.target.value)}
              />
              {form.image && (
                <img src={form.image} alt="预览" className="mt-2 w-32 h-32 object-cover rounded-lg border" />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">标签</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="例如: 7天交付，支持打样，可联调"
                value={form.tags}
                onChange={(event) => handleChange('tags', event.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">商品描述</label>
              <textarea
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="详细描述商品特点、参数、适用场景和交付说明..."
                value={form.description}
                onChange={(event) => handleChange('description', event.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">规格参数 / 备注</label>
              <textarea
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                rows={4}
                placeholder='可填写 JSON 或普通文字，例如: {"精度":"0.02mm","节拍":"1.2s/pcs"}'
                value={form.specs}
                onChange={(event) => handleChange('specs', event.target.value)}
              />
            </div>

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
