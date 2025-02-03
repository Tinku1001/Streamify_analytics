import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDashboard } from '../context/DashboardContext';

const UserGrowthChart = () => {
  const { data, loading } = useDashboard();

  if (loading) return <div className="text-center text-gray-600">Loading user growth chart...</div>;
  if (!data) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data.userGrowth}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" name="Total Users" />
          <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" name="Active Users" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGrowthChart;