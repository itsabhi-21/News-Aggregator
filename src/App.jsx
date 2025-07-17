import React, { useState } from 'react'
import Header from './assets/Components/Header';
import Home from './assets/Pages/Home'
import NewsDetail from './assets/Pages/NewsDetail';
import { Routes, Route } from "react-router-dom"
import Games from './assets/Pages/Games';
import Login from './assets/Pages/Login';
import Footer from './assets/Components/Footer';
import './App.css'
import Entertainment from './assets/Pages/Entertainment';
import Exclusive from './assets/Pages/Exclusive';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/details" element={<NewsDetail/>} />
        <Route path="/" element={<Home/>} />
        <Route path='/Home' element={<Home/>}/>
        <Route path="/games" element={<Games/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/entertainment" element={<Entertainment/>} />
        <Route path="/exclusive" element={<Exclusive/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
