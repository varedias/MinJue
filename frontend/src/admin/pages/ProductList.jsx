import React, { useEffect, useState } from 'react';
import { api } from '../../api';
import { Package, AlertTriangle, Eye, ShoppingCart, Search, Trash2 } from 'lucide-react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const res = await api.get('/admin/product/list', {
                params: { name: searchTerm }
            });
            setProducts(res.data?.records || []);
        } catch (error) {
            console.error("Failed to fetch products", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchProducts();
    };

    const handleOffShelf = async (product) => {
        if (product.status === 0) return; // Already off-shelf

        if (!window.confirm(`Force take down product "${product.name}"? This action cannot be undone by the supplier.`)) return;

        try {
            await api.put(`/admin/product/${product.id}/off-shelf`);
            alert('Product taken down successfully');
            fetchProducts();
        } catch (error) {
            alert('Operation failed: ' + error.message);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm min-h-[500px]">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <Package className="text-blue-600" />
                    Product Moderation
                </h2>

                <form onSubmit={handleSearch} className="flex gap-2">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search product name..."
                            className="pl-9 pr-4 py-2 border rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
                    </div>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Search</button>
                </form>
            </div>

            <div className="p-6">
                {loading ? (
                    <div className="text-center py-10 text-gray-500">Loading...</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 w-20">Image</th>
                                    <th className="px-6 py-3">Product Name</th>
                                    <th className="px-6 py-3">Price</th>
                                    <th className="px-6 py-3">Category</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                                                {product.image ? (
                                                    <img src={product.image} alt="" className="w-full h-full object-cover" />
                                                ) : (
                                                    <ShoppingCart size={20} className="text-gray-400" />
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
                                        <td className="px-6 py-4 font-bold text-orange-500">¥ {product.price}</td>
                                        <td className="px-6 py-4">{product.categoryId || 'General'}</td>
                                        <td className="px-6 py-4">
                                            {product.status === 1 ? (
                                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    On Shelf
                                                </span>
                                            ) : (
                                                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1 w-fit">
                                                    <AlertTriangle size={12} /> Off Shelf
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            {product.status === 1 && (
                                                <button
                                                    onClick={() => handleOffShelf(product)}
                                                    className="text-red-500 hover:text-red-700 font-medium flex items-center gap-1 ml-auto"
                                                >
                                                    <Trash2 size={16} /> Take Down
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductList;
