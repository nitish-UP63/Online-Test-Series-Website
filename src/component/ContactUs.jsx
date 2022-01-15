import React from "react";
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ContactUs() {
  return (
    <div>
    <div className="row" style={{height:230,backgroundColor:"#BF8B67",padding:50}}>
<div className="col-md-4  text-center">
<LocationOnIcon />
<br />
    <br/>
<h3>Address</h3>
<p>Una,Hp,<br />India</p>
</div>
<div className="col-md-4 justify-content-around   text-center">
<CallIcon />
<br />
    <br/>
    <h3>Call us</h3>
    <p>+1234567<br />+2345678</p>
    </div>
    <div className="col-md-4  text-center">
    <MailIcon/>
    <br />
    <br/>
    <h3>E-mail</h3>
    <p>hi@gmail.com <br />hii@gmail.com</p>
</div>
    </div>
    <div className="row" style={{backgroundColor:"#FBF3E4"}}>
      <div className="col-md-5" style={{margin:100}}>
        <div className="p-3 py-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="text-right">Get in touch</h4>     
          </div>
          <div style={{fontSize:12}} >You can share your issues with this form.</div>

          <div className="">
            <div className="col-md-6">
              <label className="labels">Name</label>
              <input
              style={{fontSize: 12}}
                name="name"
                type="text"
                className="form-control" 
                placeholder="Full Name"
              />
            </div>
            <div className="col-md-6">
              <label className="labels">Email Adress</label>
              <input
              style={{fontSize: 12}}
                type="text"
                name="email"
                className="form-control"  
                placeholder="abc@gmail.com"
              />
            </div>
            <div className="col-md-6">
              <label className="labels">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                style={{fontSize: 12}}
                placeholder="subject"
              />
            </div>
            <div className="col-md-6">
              <label className="labels">Message</label>
              <textarea
              rows="4"
              style={{fontSize: 12, height: 100 }}           
                type="text"
                name="Message"
                className="form-control"
                placeholder="write your message for the team here"
              />
            </div>
          
          <div className="mt-5 text-center">
            <button className="btn outline-primary" type="button" style={{
            width: 100,
            height: 40,
            borderRadius: 3,
            fontWeight: 700,
            borderColor: "black",
          }}>
              Submit
            </button>
          </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
          <div style={{padding:150}}>
              <img src={require("../Images/contactus1.jpg")} height={350} width={350} />
          </div>
      </div>
    </div>
    </div>
  );
}

export default ContactUs;
