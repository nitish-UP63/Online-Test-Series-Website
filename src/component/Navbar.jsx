import React from 'react';
import "./navbar.css"
import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
    return (
        
        <div className="container-fluid">
            <nav className="customNavbar navbar-expand-lg ">

                <div>

                    <h1 className="nav-heading">Test Series</h1>
                </div>

                <button class="btn-dark navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="navitem navbar-item"> <NavLink to="/">Home</NavLink></li>
                        <li className="navitem navbar-item"> <NavLink to="/aboutus">About Us</NavLink></li>
                        <li className="navitem navbar-item"> <NavLink to="/contactus">Contact Us</NavLink> </li>
                        <li className="navitem navbar-item"> <NavLink to="/login">Login</NavLink> </li>
                        <li className="navitem navbar-item">  <NavLink to="/register">Register</NavLink>  </li>

                    </ul>
                </div>

            </nav>
        </div>

    );
}



export default Navbar;
