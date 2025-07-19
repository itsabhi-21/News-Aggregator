import React from 'react'
import Cards from '../Components/Cards'
import Testimonials from '../Components/Testimonial'
import Newsletter from '../Components/Newsletter'
import About from '../Components/About'

const Home = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-600 mb-6">
          Welcome to NewsBuzz Gaming
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg md:text-xl mb-8">
          Stay updated with the latest game releases, industry news, and everything you need to fuel your passion for gaming. Join a community where gamers stay ahead.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full shadow transition">
          Explore Latest News
        </button>
      </section>
        <Cards/>
        <Testimonials/>
        <Newsletter/>
        <About/>
    </>
  )
}

export default Home