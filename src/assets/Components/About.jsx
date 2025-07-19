import React from 'react'; 

export default function About() {
    return (
      <section className="bg-[#050A30] py-20 px-4 text-center text-white">
        <h2 className="text-7xl md:text-7xl font-bold mb-4 text-pink-500">
          About Us
        </h2>
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6">
          Welcome to <span className="text-cyan-400 font-semibold">NewsBuzz</span> —
          your ultimate destination for the latest news, trends, and updates in
          the world of gaming and entertainment.
        </p>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          We’re a team of passionate gamers and creators who love to bring you
          fresh stories, honest reviews, and exclusive insights from indie gems to
          blockbuster hits. Whether you’re a casual player or a hardcore fan, we’ve
          got something for everyone!
        </p>
        <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-12 text-center mt-7">
        Since our launch, we’ve grown into a tight-knit team of passionate gamers, writers, and creators dedicated to bringing you honest stories, behind-the-scenes insights, and the hottest updates — from indie breakthroughs to AAA blockbusters. We believe gaming is more than just a hobby — it’s a culture that connects millions, and we’re here to celebrate that every day.
      </p>
      <p className='text-cyan-400 font-semibold text-xl'>-Team NewsBuzz</p>
      </section>
    );
  }
  