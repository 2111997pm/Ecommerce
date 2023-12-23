import React from 'react'
import Button from 'react-bootstrap/Button';
import Navbar from './components/Navbar';
import SliderSection from './components/SliderSection';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />


      </Routes>


    </BrowserRouter>
  )
}

export default App