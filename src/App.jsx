import React, { useState } from 'react'
import Header from './assets/Components/Header';
import Card from './assets/Components/Card';
import { Routes, Route } from "react-router"
import Games from './assets/Pages/Games';
import Login from './assets/Pages/Login';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Card />} />
        <Route path="/" element={<Card />} />
        <Route path="/games" element={<Games/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
