import React, { useState, useEffect } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DB from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Button } from "react-bootstrap";
import logout from "./logout";
 
function Navbar() {
  const [islogged, setlogged] = useState(false);
  const [isloading, setloading]= useState(true);
  const [data, setdata] = useState();
  

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setlogged(true);
        const uid = user.uid;
        getDoc(doc(DB, "users", uid)).then((docSnap) => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setdata(docSnap.data());
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
          className="btn-dark navbar-toggler"
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
            {islogged ? (
             <><> {isloading? <p>hmm</p> : <p>Hello {data.name}</p> } </>
              <Button onClick={()=>{
                  logout();
                    setlogged(false);
                    alert("Successfully Logged Out")
                  }} >Logout</Button> </>
            ) : (
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
