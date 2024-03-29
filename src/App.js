import React from 'react'
import Footer from './component/Footer'
import AboutUs from "./component/AboutUs"
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import ContactUs from './component/ContactUs';
import Profile from './component/Profile';
import { useSelector } from 'react-redux';
import HomeCategory from './component/HomeCategory';
import QuestionPage from './component/QuestionPage';
import Result from './component/Result';
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
          <Route path="/result" element={<Result />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/HomeCategory" >
           <Route path=":papertitle" element={<HomeCategory />} >
            <Route path=":paperyear" element={ <QuestionPage />} />
           </Route>
          </Route>
          <Route path="/HomeCategory2" >
           <Route path=":papertitle">
            <Route path=":paperyear" element={ <QuestionPage />} />
           </Route>
          </Route>
          {/* <Route path="/QuestionPage" element={<QuestionPage />} /> */}
          { isloggedin ?  <Route path="/profile" element={<Profile />} /> :  <Route path="/profile" element={<Navigate replace to="/login" />} />
          }
      
        </Routes> 
        
        <Footer />
      </BrowserRouter>
     
    </>
  )
}
