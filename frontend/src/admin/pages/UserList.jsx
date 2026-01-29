import React, { useEffect, useState } from 'react';
import { api } from '../../api';
import { Users, Ban, CheckCircle, Search } from 'lucide-react';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const res = await api.get('/admin/user/list', {
                params: { username: searchTerm }
            });
            setUsers(res.data?.records || []);
        } catch (error) {
            console.error("Failed to fetch users", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []); // Initial load

    const handleSearch = (e) => {
        e.preventDefault();
        fetchUsers();
    };

    const toggleStatus = async (user) => {
        const newStatus = user.status === 1 ? 0 : 1;
        const action = newStatus === 1 ? 'Unban' : 'Ban';

        if (!window.confirm(`Are you sure you want to ${action} user ${user.username}?`)) return;

        try {
            await api.put(`/admin/user/${user.id}/status`, null, {
                params: { status: newStatus }
            });
            alert(`User ${action}ned successfully`);
            fetchUsers(); // Refresh list
        } catch (error) {
            alert('Operation failed: ' + error.message);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm min-h-[500px]">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <Users className="text-blue-600" />
                    User Management
                </h2>

                <form onSubmit={handleSearch} className="flex gap-2">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search username..."
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
                                    <th className="px-6 py-3">ID</th>
                                    <th className="px-6 py-3">Username</th>
                                    <th className="px-6 py-3">Nickname</th>
                                    <th className="px-6 py-3">Role</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">Joined Date</th>
                                    <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4">{user.id}</td>
                                        <td className="px-6 py-4 font-medium text-gray-900">{user.username}</td>
                                        <td className="px-6 py-4">{user.nickname || '-'}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs 
                            ${user.role === 'ADMIN' ? 'bg-purple-100 text-purple-800' :
                                                    user.role === 'SUPPLIER' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.status === 1 ? (
                                                <span className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                                                    <CheckCircle size={14} /> Active
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-1 text-red-600 text-xs font-semibold">
                                                    <Ban size={14} /> Banned
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">{new Date(user.createTime).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 text-right">
                                            {user.role !== 'ADMIN' && (
                                                <button
                                                    onClick={() => toggleStatus(user)}
                                                    className={`font-medium ml-auto flex items-center gap-1 hover:underline
                                ${user.status === 1 ? 'text-red-500 hover:text-red-700' : 'text-green-600 hover:text-green-800'}`}
                                                >
                                                    {user.status === 1 ? 'Ban User' : 'Unban User'}
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

export default UserList;
