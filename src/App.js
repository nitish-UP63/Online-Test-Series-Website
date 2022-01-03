import React from 'react'
import Footer from './component/Footer'
import AboutUs from "./component/AboutUs"
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import ContactUs from './component/ContactUs';
import Profile from './component/Profile';
import { useSelector } from 'react-redux';
import HomeCategory from './component/HomeCategory';
import QuestionPage from './component/QuestionPage';
export default function App() {
  const isloggedin=useSelector((state)=> state.set_user_state);
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
          <Route path="/HomeCategory" element={<HomeCategory />} />
          <Route path="/QuestionPage" element={<QuestionPage />} />
          { isloggedin ?  <Route path="/profile" element={<Profile />} /> :  <Route path="/login" element={<Login />} />
          }
      
        </Routes> 
        
        <Footer />
      </BrowserRouter>
     
    </>
  )
}
