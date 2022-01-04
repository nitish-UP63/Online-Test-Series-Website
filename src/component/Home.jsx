import React from 'react'
import "./home.css"
import Templet from "./Templet"

function Home() {
    return (
        <div>
        <div className="heading"> 
            <p>Best Free online Test Series</p>
            </div>
        <div className="test_category">
            <Templet title={"IITJee"} img={require('../Images/jeelogo.jpg')} />
            <Templet title={"NEET"} img={require('../Images/neetlogo.jpg')}  />
            <Templet title={"JeeMain"} img={require('../Images/jeelogo.jpg')} />
            <Templet title={"Bits"} img={require('../Images/jeelogo.jpg')} />
            <Templet title={"IITJee"} img={require('../Images/jeelogo.jpg')} />
            <Templet title={"IITJee"} img={require('../Images/jeelogo.jpg')} />
        </div>
        </div>
    )
}

export default Home;
