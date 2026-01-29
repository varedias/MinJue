import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
                    <p className="text-3xl font-bold mt-2">1,234</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium">Pending Audits</h3>
                    <p className="text-3xl font-bold mt-2 text-orange-500">5</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium">Today's Orders</h3>
                    <p className="text-3xl font-bold mt-2 text-green-500">42</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
