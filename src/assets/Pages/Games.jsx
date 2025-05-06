import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
const Games = () => {
    apikey= '007e52d97ea54895a759b3cd23f5badd';
    const getdata = async () => {
        try {
          const res = await fetch(
            `https://newsapi.org/v2/everything?q=games&apiKey=${apikey}`
          );
          const data = await res.json();
          setArticles(data.articles);
        } catch (error) {
          console.error("Failed to fetch news:", error);
        }
      };
  return (
    <div>
        <Header/>
        <h1 className='text-center text-4xl font-bold mt-10'>Games</h1>
        <ul className='flex flex-wrap justify-center mt-32'>
            {articles.map((article, index) => (
                <li key={index} className='border rounded-lg w-96 p-2 m-1 shadow'>
                    <img src={article.urlToImage} className='border rounded-md'></img>
                    <p className='font-bold'>{article.title}</p>
                </li>
            ))}
        </ul>
        <Footer/>
    </div>
  )
}

export default Games