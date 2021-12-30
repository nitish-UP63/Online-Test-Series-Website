import React from 'react';
import {NavLink} from "react-router-dom";

function Navbar() {
    return (

        <nav class="navbar">
            <div>
                {/* <img src='https://i0.wp.com/www.psdly.com/wp-content/uploads/2021/04/Metal-Logo-Mockup-1.jpg?resize=750%2C500&ssl=1'></img> */}
                <h1 class="nav-heading">Test Series</h1>
            </div>

            <div class="flex container">
                <ul class="nav-links">
                    <li class="navitem"> <NavLink to="/">Home</NavLink></li>
                    <li class="navitem"> <NavLink to="/aboutus">About Us</NavLink></li>
                    <li class="navitem"> <NavLink to="/contactus">Contact Us</NavLink> </li>
                    <li class="navitem"> <NavLink to="/login">Login</NavLink> </li>
                    <li class="navitem">  <NavLink to="/register">Register</NavLink>  </li>
                    
                </ul>
            </div>

        </nav>
    );
}



export default Navbar;
