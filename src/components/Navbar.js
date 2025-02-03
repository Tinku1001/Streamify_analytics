import React from 'react';

const Navbar = () => {
  return (
    // <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 shadow-lg">
    <nav className="bg-purple-800 -r p-4 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Streamify Analytics</h1>
        <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-100 transition duration-300">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;