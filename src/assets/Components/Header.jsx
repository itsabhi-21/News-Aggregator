import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="w-full rounded bg-gradient-to-r from-purple-800 via-indigo-900 to-blue-900 shadow-lg px-6 py-4 flex items-center">
      
      {/* Logo */}
      <div className="flex-shrink-0">
        <h1 className="text-3xl font-bold text-red-500">
          NewsBuzz
        </h1>
      </div>

      {/* Nav Links — flex‑auto + mx-auto centers it */}
      <ul className="flex flex-grow justify-center space-x-6 text-lg font-medium">
        <li><Link to="/home" className="hover:text-red-500 transition">Home</Link></li>
        <li><Link to="/games" className="hover:text-red-500 transition">Games</Link></li>
        <li><Link to="/entertainment" className="hover:text-red-500 transition">Entertainment</Link></li>
        <li><Link to="/exclusive" className="hover:text-red-500 transition">Exclusive</Link></li>
        <li><Link to="/login" className="hover:text-red-500 transition">Login</Link></li>
      </ul>

      {/* Search on the right */}
      <div className="flex-shrink-0">
        <input type="text" placeholder="Search here" className="px-4 py-2 rounded-full bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"/>
      </div>

    </nav>
  );
};

export default Header;
