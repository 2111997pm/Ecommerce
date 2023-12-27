import React from 'react'
import Navbar from './components/body/Navbar';
import About from './components/body/About'
import Home from './components/body/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/body/Footer';
import SliderSection from './components/body/SliderSection';
import ContactUs from './components/body/ContactUs';
import Store from './components/body/Store';
import SingleProduct from './components/body/SingleProduct';
// import LogInForm from './components/body/logIn/LogInForm';



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
        {/* <Route path='/login' element={<LogInForm />} /> */}
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App