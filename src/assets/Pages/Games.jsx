import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

export default function Games() {
  const [articles, setArticles] = useState([]);
  const [isfullLength,setisfullLength] = useState(false);

  const getData = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=games&apiKey=007e52d97ea54895a759b3cd23f5badd`
      );
      const data = await res.json();
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
      <section className='bg-[#1e2b89] p-20 mb-12'>
        <h1 className="text-6xl font-bold text-center text-cyan-400 mb-8">Games News</h1>
        <p className="text-center text-gray-300 mb-12 text-2xl">
          Stay updated with the latest in gaming, from new releases to industry news.
        </p>
      </section>
      <ul className="flex flex-wrap justify-center gap-8 px-4 py-12">
        {articles.slice(0, isfullLength ? articles.length : 12).map((article, index) => (
          <li key={index} className="relative bg-white backdrop-blur-md border border-cyan-400/10 rounded-2xl shadow-xl overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 max-w-sm w-full">

            <img src={article.urlToImage} alt={article.title} className="h-48 w-full object-cover rounded-t-2xl"/>
  
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-gray-700 mb-2 line-clamp-2">{article.title}</h2>

              <p className="text-sm text-gray-500 mb-4 flex-grow line-clamp-3">{article.description.slice(0, 120)}...</p>
  
              <p className="ml-auto text-sm text-blue-400 mb-4">- By {article.author ? article.author : "Unknown"}</p>
  
              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <span role="img" aria-label="clock">⏱️</span>
                  <span>
                    {new Date(article.publishedAt).toLocaleDateString("en-IN", {timeZone: "Asia/Kolkata",day: "2-digit",month: "short",year: "numeric",})}
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
  
        <button onClick={() => setisfullLength(!isfullLength)} className="text-2xl text-cyan-400 font-semibold hover:text-pink-400 transition block mx-auto mb-12">
          {isfullLength ? 'Less...' : 'More News...'}
        </button>
    </div>
  );  
}
