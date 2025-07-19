import React from 'react';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0C144E] px-4">
      <div className="bg-[#050A30] text-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-4xl font-bold mb-8 text-center">Login</h1>
        <form className="flex flex-col gap-6">
          <div>
            <label className="block mb-2 font-semibold" htmlFor="username">Username:</label>
            <input id="username" type="text" placeholder="Enter username" className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"/>
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="password">Password:</label>
            <input id="password" type="password" placeholder="Enter password" className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"/>
          </div>
          <button type="submit" className="w-full mt-3 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:opacity-90 transition"> Login</button>
        </form>
        <p className="text-center mt-6">
          Don't have an account?{' '}
          <a href="#" className="text-cyan-400 hover:underline">Signup</a>
        </p>
      </div>
    </div>
  );
}
