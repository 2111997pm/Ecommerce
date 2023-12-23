import React from 'react'

import Navbar from './components/Navbar';
import About from './components/About';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route path='/' element={<Store />} /> */}
        <Route  path='/About' element={<About />} />
        {/* <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} /> */}


      </Routes>
        <Footer/>

    </BrowserRouter>
  )
}

export default App