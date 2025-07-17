import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Entertainment() {
  const [articles, setArticles] = useState([]);
  const [isfullLength, setisfullLength] = useState(false);

  const getData = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=exclusive&apiKey=007e52d97ea54895a759b3cd23f5badd`
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
    <div>
      <ul className="flex flex-wrap justify-center mt-24 mb-7">
        {articles.slice(0, isfullLength ? articles.length : 12).map((article, index) => (
          <li key={index} className="border rounded-lg w-96 p-2 m-4 shadow-2xl flex flex-col ">
            <img src={article.urlToImage} alt={article.title} className="border rounded-md mb-2"/>
            <p className="font-bold text-xl mb-5">{article.title}</p>
            <p className='text-sm'>{article.description.slice(0,100)}+...</p>
            <p className='ml-auto text-blue-500 mr-2 mt-2'>- By {article.author}</p>
            <div className='flex justify-between mt-6 items-center m-2'>
              <div className="flex items-center gap-2">
                <span role="img" aria-label="clock">⏱️</span>
                <span className='text-sm ml-0'>
                  {new Date(article.publishedAt).toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <Link to='/details' state={{article}} className='text-red-500 hover:underline'>Read More...</Link>
            </div>
          </li>
        ))}
      </ul>
      {!isfullLength && (
        <button onClick={() => setisfullLength(true)} className='text-2xl text-blue-500 block mx-auto'>More News...</button>
    )}
    </div>
  );
}
