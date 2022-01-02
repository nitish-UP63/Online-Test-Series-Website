import React from 'react'
import Footer from './component/Footer'
import AboutUs from "./component/AboutUs"
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import ContactUs from './component/ContactUs';
import Profile from './component/Profile';
export default function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
      
        </Routes> 
        
        <Footer />
      </BrowserRouter>
     
    </>
  )
}
