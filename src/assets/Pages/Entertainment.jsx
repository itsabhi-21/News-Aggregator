import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Entertainment() {
  const [articles, setArticles] = useState([]);
  const [isfullLength, setisfullLength] = useState(false);

  const getData = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=entertainment&apiKey=007e52d97ea54895a759b3cd23f5badd`
      );
      const data = await res.json();
      console.log(data)
      setArticles(data.articles);
    } catch (error) {
      console.error('Failed to fetch news:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-[#0C144E] min-h-screen py-12 px-4">
      <section className='bg-[#172272] p-20 mb-12'>
        <h1 className="text-6xl font-bold text-center text-cyan-400 mb-8">Entertainment News</h1>
        <p className="text-center text-gray-300 mb-12 text-2xl">
          Stay updated with the latest in entertainment, from movies and music to celebrity news.</p>
      </section>
      <ul className="flex flex-wrap justify-center gap-8">
        {articles.slice(0, isfullLength ? articles.length : 12).map((article, index) => (
          <li key={index} className="relative bg-[#080a15] backdrop-blur-md border border-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 max-w-sm w-full">
              <img src={article.urlToImage} alt={article.title} className="h-48 w-full object-cover rounded-t-2xl border-b border-white"/>

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-200 mb-2">
                  {article.title}
                </h2>

                <p className="text-sm text-gray-400 mb-4 flex-grow">
                  {article.description.slice(0, 100)}...
                </p>
  
                <p className="ml-auto text-sm text-blue-400 mb-4">
                  - By {article.author || "Unknown"}
                </p>
  
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <span role="img" aria-label="clock">⏱️</span>
                    <span>
                      {new Date(article.publishedAt).toLocaleDateString("en-IN", {
                        timeZone: "Asia/Kolkata",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
    
                  <Link to="/details" state={{ article }} className="px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-xs text-white font-medium hover:opacity-90 transition"> 
                  Read More
                  </Link>
                </div>
              </div>
          </li>
        ))}
      </ul>
  
        <button onClick={() => setisfullLength(!isfullLength)} className="mt-12 text-2xl text-cyan-400 font-semibold hover:text-pink-400 transition block mx-auto">
          {isfullLength ? 'Less...' : 'More News...'}
        </button>
    </div>
  );  
}
