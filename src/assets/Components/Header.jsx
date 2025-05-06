import React from 'react';
import { useNavigate } from "react-router";
const Header = () => {
  let navigate = useNavigate();
  return (
    <>
      <nav className="bg-red-100 shadow p-7 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-red-500 text-3xl font-bold">NewsBuzz</h1>
          <input
            type="text"
            placeholder="Search here"
            className="border rounded-xl px-2 py-1 w-1/3 shadow"
          />
        </div>
        <div className="flex justify-center mt-7">
          <ul className="flex space-x-6 text-lg font-medium">
            <li><button onClick={()=> navigate('/home')}  className="hover:text-red-500 hover:text-xl">Home</button></li>
            <li><button onClick={()=>navigate("/games")} className="hover:text-red-500 hover:text-xl">Games</button></li>
            <li><a href="#" className="hover:text-red-500 hover:text-xl">Entertainment</a></li>
            <li><a href="#" className="hover:text-red-500 hover:text-xl">Exclusive</a></li>
            <li><button onClick={()=>navigate('/login')} className="hover:text-red-500 hover:text-xl">Login</button></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header;