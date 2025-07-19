import React from 'react';

export default function Newsletter() {
    return (
      <section className="bg-[#0C144E] py-20 px-4 text-center text-white m-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
          Join Our Newsletter!!
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Subscribe to get the latest gaming news, entertainment, reviews, and exclusive insights straight to your inbox.
        </p>
  
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition text-white font-medium"
          >
            Subscribe
          </button>
        </form>
      </section>
    );
  }
  