import React, { useState, useEffect } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DB from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Button } from "react-bootstrap";
import logout from "./logout";
import {useSelector, useDispatch} from 'react-redux';
import {Setuserstate, Setuserdata, Setuid} from '../actions/index';
import CircularProgress from '@mui/material/CircularProgress';

function Navbar() {
  const dispatch= useDispatch();
  const initstate=useSelector((state)=> state.set_user_state);
  const [islogged, setlogged] = useState(initstate);
  const [isloading, setloading]= useState(true);
  const [data, setdata] = useState();
  

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setlogged(true);
        dispatch(Setuserstate(true));
        const uid = user.uid;
        getDoc(doc(DB, "users", uid)).then((docSnap) => {
          if (docSnap.exists()) {
          //  console.log("Document data:", docSnap.data());
            setdata(docSnap.data());
            dispatch(Setuserdata(docSnap.data()));
            dispatch(Setuid(uid));
            setloading(false)
          } else {
            console.log("No such document!");
          }
        });
      }
    });
  }, []);

  return (
    <div className="container-fluid">
      <nav className="customNavbar navbar-expand-lg ">
        <div>
          <h1 className="nav-heading">Online Test Series</h1>
        </div>

        <button
          className="btn-danger navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        
          <ul className="navbar-nav ms-auto">
            <li className="navitem navbar-item">
              {" "}
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navitem navbar-item">
              {" "}
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
            <li className="navitem navbar-item">
              {" "}
              <NavLink to="/contactus">Contact Us</NavLink>{" "}
            </li>
            { islogged ? <>
             {isloading ?   <CircularProgress size={30} /> : <>
            <li className="navitem navbar-item">
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li className="navitem navbar-item">
              <Button onClick={()=>{ logout(); setlogged(false); dispatch(Setuserstate(false)); alert("Logged Out Successfully")}}>Logout</Button>
            </li>
            </>
            }
            </> : (
              <>
                {" "}
                <li className="navitem navbar-item">
                  {" "}
                  <NavLink to="/login">Login</NavLink>{" "}
                </li>
                <li className="navitem navbar-item">
                  {" "}
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
