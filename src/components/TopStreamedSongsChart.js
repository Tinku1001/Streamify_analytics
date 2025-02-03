import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDashboard } from '../context/DashboardContext';

const TopStreamedSongsChart = () => {
  const { data, loading } = useDashboard();

  if (loading) return <div className="text-center text-gray-600">Loading top streamed songs chart...</div>;
  if (!data) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data.topSongs}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="streams" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopStreamedSongsChart;