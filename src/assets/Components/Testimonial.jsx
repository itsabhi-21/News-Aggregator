import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      feedback: "This gaming news site keeps me ahead of all the big releases. Love the design!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jessica Ontiano",
      feedback: "Clean, modern and always up to date — exactly what I wanted!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Carlos Mendez",
      feedback: "The best place for quick gaming and entertainment updates. Highly recommended!",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  return (
    <section className="bg-[#050A30] py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">What Our Readers Say</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-[#0C144E] rounded-xl p-6 shadow-lg border border-cyan-400/20 text-white flex flex-col items-center text-center"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full mb-4 border-4 border-cyan-400 object-cover"
            />
            <p className="text-lg mb-4 italic">"{t.feedback}"</p>
            <p className="text-cyan-400 font-semibold">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
