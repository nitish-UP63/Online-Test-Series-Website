import React from 'react'
import "./home.css"
import Templet from "./Templet"

function Home() {
    return (
        <div className="heading">
            <p>Best Free online Test Series</p>
            <Templet title={"IIT Jee"} img={require('../Images/jeelogo.jpg')} />
            <Templet title={"NEET"} img={require('../Images/neetlogo.jpg')} />
            <Templet title={"IIT Jee"} img={require('../Images/jeelogo.jpg')} />
        </div>
    )
}

export default Home;
