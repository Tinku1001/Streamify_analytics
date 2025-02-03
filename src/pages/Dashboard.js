import React from 'react';
import KeyMetrics from '../components/KeyMetrics';
import UserGrowthChart from '../components/UserGrowthChart';
import RevenueDistributionChart from '../components/RevenueDistributionChart';
import TopStreamedSongsChart from '../components/TopStreamedSongsChart';
import StreamsDataTable from '../components/StreamsDataTable';
import GenreDistributionChart from '../components/GenreDistributionChart';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Metrics</h2>
        <KeyMetrics />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">User Growth</h2>
          <UserGrowthChart />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Revenue Distribution</h2>
          <RevenueDistributionChart />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Streamed Songs</h2>
        <TopStreamedSongsChart />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Streams</h2>
        <StreamsDataTable />
      </section>
      <section>
      <GenreDistributionChart/>
      </section>
    </div>
  );
};

export default Dashboard;