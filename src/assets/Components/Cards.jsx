import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Cards() {
  const [articles, setArticles] = useState([]);
  const apikey = '007e52d97ea54895a759b3cd23f5badd';

  const getdata = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=everything&apiKey=${apikey}`
      );
      const data = await res.json();
      setArticles(data.articles);
    } catch (error) {
      console.error('Failed to fetch news:', error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);


  return (
    <ul className="flex flex-wrap justify-center gap-8 px-4 py-12 bg-[#10195d] min-h-screen">
      {articles.slice(0, 6).map((article, index) => (
        <li
          key={index}
          className="relative bg-[#ffffff] backdrop-blur-md border border-cyan-400/10 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 max-w-sm w-full"
        >
            <img
              src={article.urlToImage}
              alt={article.title}
              className="h-48 w-full object-cover rounded-t-2xl"
            />
  
          <div className="p-6 flex flex-col flex-grow">
            <h2 className="text-lg font-semibold text-gray-700 mb-2 line-clamp-2">
              {article.title}
            </h2>
  
            <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
              {article.description ? article.description.slice(0, 120) + '...' : ''}
            </p>
  
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">
                {new Date(article.publishedAt).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
  
              <Link
                to="/details"
                state={{ article }}
                className="px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-xs text-white font-medium hover:opacity-90 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Cards;