import React from 'react';
import { DashboardProvider } from './context/DashboardContext';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <DashboardProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
        <Navbar />
        <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8"> {/* Added padding here */}
          <Dashboard />
        </main>
      </div>
    </DashboardProvider>
  );
}

export default App;