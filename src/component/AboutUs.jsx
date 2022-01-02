import React from 'react'
import "./aboutUs.css"

function AboutUs() {
    return (
        <div >
        <div className="container rounded bg-white mt-5 mb-5" className='aboutus'>
        <img width="100%" src={require('../Images/Aboutus.jpg')} />
        <div className="row">
        <div className="col-md-6 border-right">
        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">Nitish Kumar</span><span className="text-black-50">nitish@gmail.com<br />@IIITU</span><span> </span></div>
        </div>
        <div className="col-md-6 border-right">
        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">Ravinder Pratap Patel</span><span className="text-black-50">ravinder@gmail.com<br />@IIITU</span><span> </span></div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default AboutUs
