import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Card() {
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
    <ul className="flex flex-wrap justify-center mt-16">
      {articles.slice(0,6).map((article, index) => (
        <li
          key={index}
          className="border rounded-lg w-96 p-2 m-4 shadow-xl flex flex-col"
        >
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              className="border rounded-md mb-2 object-cover h-48 w-full"
            />
          )}
          <p className="font-bold mb-1">{article.title}</p>
          <p className="text-xs text-gray-500 mb-3">
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
          <Link
            to="/details"
            state={{ article }}
            className="mt-auto text-center text-blue-600 hover:underline"
          >
            Read More
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Card;
