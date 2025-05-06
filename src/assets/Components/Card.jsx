import React, { useState ,useEffect} from 'react';
import Footer from './Footer';

export function Card() {
  const [articles, setArticles] = useState([]);
  const apikey = '007e52d97ea54895a759b3cd23f5badd';

  const getdata = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=entertainment&apiKey=${apikey}`
      );
      const data = await res.json();
      setArticles(data.articles);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    }
  };useEffect(() => {
    getdata();
  }, []);

  let count=0;
  return (
    <>
      <ul className='flex flex-wrap justify-center mt-16'>
        {articles.slice(0, 24).map((article, index) => (
        <li key={index} className='border rounded-lg w-96 p-2 m-4 shadow-xl'>
        <img src={article.urlToImage} className='border rounded-md' />
        <p className='font-bold'>{article.title}</p>
      </li>
      ))}
    </ul>
      <Footer/>
    </>
  );
}

export default Card;