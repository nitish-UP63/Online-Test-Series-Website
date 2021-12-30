import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (

        <nav class="navbar">
            <div>
                {/* <img src='https://i0.wp.com/www.psdly.com/wp-content/uploads/2021/04/Metal-Logo-Mockup-1.jpg?resize=750%2C500&ssl=1'></img> */}
                <h1 class="nav-heading">Test Series</h1>
            </div>

            <div class="flex container">
                <ul class="nav-links">
                    <li class="navitem"><a href="#">Home</a></li>
                    <li class="navitem"><a href="#">Privacy Policy</a></li>
                    <li class="navitem"><a href="#">About Us</a></li>
                    <li class="navitem"><a href="#">Login</a></li>
                    <li class="navitem"><a href="#">Register</a></li>
                    <li class="navitem"><a href=''>Contact Us</a></li>
                </ul>
            </div>

        </nav>
    );
}



export default Navbar;
