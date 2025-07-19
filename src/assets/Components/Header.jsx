import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-red-100 p-7 rounded-xl w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-800 via-indigo-900 to-blue-900 shadow-lg">
      {/* Logo & Search */}
      <div className="flex justify-between items-center mb-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
        <h1 className="text-red-500 text-3xl font-bold">NewsBuzz</h1>
        <input
          type="text"
          placeholder="Search here"
          className="border rounded-xl px-2 py-1 w-1/3 shadow cursor-auto"
        />
      </div>
      <div className="flex justify-center mt-7">
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <Link to="/home" className="hover:text-red-500 hover:text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link to="/games" className="hover:text-red-500 hover:text-xl">
              Games
            </Link>
          </li>
          <li>
            <Link to="/entertainment" className="hover:text-red-500 hover:text-xl">
              Entertainment
            </Link>
          </li>
          <li>
            <Link to="/exclusive" className="hover:text-red-500 hover:text-xl">
              Exclusive
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-red-500 hover:text-xl">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
