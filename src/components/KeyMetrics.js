import React from 'react';
import { useDashboard } from '../context/DashboardContext';

const MetricCard = ({ title, value }) => (
  <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg">
    <h3 className="text-lg font-semibold text-gray-600 mb-2">{title}</h3>
    <p className="text-3xl font-bold text-indigo-600">{value}</p>
  </div>
);

const KeyMetrics = () => {
  const { data, loading } = useDashboard();

  if (loading) return <div className="text-center text-gray-600">Loading key metrics...</div>;
  if (!data) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <MetricCard title="Total Users" value={data.totalUsers.toLocaleString()} />
      <MetricCard title="Active Users" value={data.activeUsers.toLocaleString()} />
      <MetricCard title="Total Streams" value={data.totalStreams.toLocaleString()} />
      <MetricCard title="Revenue" value={`$${data.revenue.toLocaleString()}`} />
      <MetricCard title="Top Artist" value={data.topArtist} />
    </div>
  );
};

export default KeyMetrics;