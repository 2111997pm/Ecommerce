import React from 'react'

import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import SliderSection from './components/SliderSection';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <SliderSection/>
      <Routes>
        <Route path='/' element={<Home />} />
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