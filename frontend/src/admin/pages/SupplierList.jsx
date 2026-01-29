import React, { useEffect, useState } from 'react';
import { api } from '../../api'; // Assuming global api wrapper or axios
import { Check, X, Eye, Building2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SupplierAudit = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    const { token } = useAuth(); // Need to ensure token is available for admin requests

    const fetchSuppliers = async () => {
        setLoading(true);
        try {
            const res = await api.get('/admin/supplier/audit/list');
            // Adjust based on your Result structure: res.data.records or res.data
            setSuppliers(res.data?.records || []);
        } catch (error) {
            console.error("Failed to fetch suppliers", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSuppliers();
    }, []);

    const handleAudit = async (pass, reason = '') => {
        if (!selectedSupplier) return;
        try {
            await api.post('/admin/supplier/audit', {
                id: selectedSupplier.id,
                pass,
                reason
            });
            alert(pass ? 'Approved successfully' : 'Rejected successfully');
            setSelectedSupplier(null);
            fetchSuppliers();
        } catch (error) {
            alert('Operation failed: ' + error.message);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm min-h-[500px]">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <Building2 className="text-blue-600" />
                    Supplier Audit Queue
                </h2>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {suppliers.length} Pending
                </span>
            </div>

            <div className="p-6">
                {loading ? (
                    <div className="text-center py-10 text-gray-500">Loading...</div>
                ) : suppliers.length === 0 ? (
                    <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                        No pending audits
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3">Company Name</th>
                                    <th className="px-6 py-3">Contact</th>
                                    <th className="px-6 py-3">Submission Date</th>
                                    <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {suppliers.map((supplier) => (
                                    <tr key={supplier.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900 border-r">{supplier.name}</td>
                                        <td className="px-6 py-4">
                                            {/* JSON parsing safe guard */}
                                            {(() => {
                                                try {
                                                    const contact = JSON.parse(supplier.contactInfo || '{}');
                                                    return contact.email || contact.phone || 'N/A';
                                                } catch (e) { return 'Invalid Format'; }
                                            })()}
                                        </td>
                                        <td className="px-6 py-4">{new Date(supplier.createTime).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => setSelectedSupplier(supplier)}
                                                className="font-medium text-blue-600 hover:underline flex items-center gap-1 justify-end ml-auto"
                                            >
                                                <Eye size={16} /> Review
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Audit Modal */}
            {selectedSupplier && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <h3 className="text-lg font-bold">Review Supplier Application</h3>
                            <button
                                onClick={() => setSelectedSupplier(null)}
                                className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-200 rounded-full"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase">Company Name</label>
                                    <p className="font-medium text-gray-900">{selectedSupplier.name}</p>
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase">Status</label>
                                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Pending Verification</span>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase">Description</label>
                                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mt-1">
                                    {selectedSupplier.description || 'No description provided.'}
                                </p>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase">Contact Info</label>
                                <pre className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mt-1 overflow-x-auto font-mono">
                                    {selectedSupplier.contactInfo}
                                </pre>
                            </div>

                            {/* Image Preview Placeholder */}
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase">License / Logo</label>
                                <div className="mt-2 text-center text-sm border-2 border-dashed border-gray-200 rounded-lg py-8">
                                    {selectedSupplier.logo ? (
                                        <img src={selectedSupplier.logo} alt="Logo" className="h-32 mx-auto object-contain" />
                                    ) : (
                                        <span className="text-gray-400">No image uploaded</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                            <button
                                onClick={() => handleAudit(false)}
                                className="px-4 py-2 bg-white text-red-600 border border-red-200 rounded-lg hover:bg-red-50 flex items-center gap-2"
                            >
                                <X size={16} /> Reject
                            </button>
                            <button
                                onClick={() => handleAudit(true)}
                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 hover:shadow-lg transition-all flex items-center gap-2"
                            >
                                <Check size={16} /> Approve
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SupplierAudit;
