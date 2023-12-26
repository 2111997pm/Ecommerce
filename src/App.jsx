import React from 'react'
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import SliderSection from './components/SliderSection';
import ContactUs from './components/ContactUs';
import Store from './components/Store';
import SingleProduct from './components/SingleProduct';


const App = () => {

  const addDataHandler = async (data) => {
    const response = await fetch("https://console.firebase.google.com/project/ecommerce-9aeaa/firestore/data/~2FcontactUs", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    console.log(response)
    const getData = await response.json();
    console.log(getData);
  }


  return (
    <BrowserRouter>
      <Navbar />
      <SliderSection />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactus' element={<ContactUs onSubmit={addDataHandler}/>} />
        <Route path='/About' element={<About />} />
        <Route path='/store' element={<Store />} />
        {/* <Route path='/login' element={<LogIn />} /> */}
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App