import React from "react";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./contactUs.css";

function ContactUs() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="contactUsheader">
        <div className="contactDivision">
          <LocationOnIcon />
          <h3>Address</h3>
          <p>Una,Hp, India</p>
        </div>
        <div className="contactDivision">
          <CallIcon />

          <h3>Call us</h3>
          <p>+1234567</p>
        </div>
        <div className="contactDivision">
          <MailIcon />

          <h3>E-mail</h3>
          <p>hi@gmail.com</p>
        </div>
      </div>
      <div
        className="row"
        style={{
          backgroundImage: `url(${require("../Images/contactusImg.jpg")})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-3 py-5 d-flex justify-content-center">
          <div className="col-md-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Get in touch</h4>
            </div>
            <div style={{ fontSize: 12 }}>
              You can share your issues with this form.
            </div>

            <div className="col-md-12">
              <label className="labels">Name</label>
              <input
                style={{ fontSize: 12 }}
                name="name"
                type="text"
                className="form-control"
                placeholder="Full Name"
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Email Adress</label>
              <input
                style={{ fontSize: 12 }}
                type="text"
                name="email"
                className="form-control"
                placeholder="abc@gmail.com"
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                style={{ fontSize: 12 }}
                placeholder="subject"
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Message</label>
              <textarea
                rows="4"
                style={{ fontSize: 12, height: 100 }}
                type="text"
                name="Message"
                className="form-control"
                placeholder="write your message for the team here"
              />
            </div>

            <div className="mt-5 ">
              <button
                className="btn outline-primary"
                type="button"
                style={{
                  width: 100,
                  height: 40,
                  borderRadius: 3,
                  fontWeight: 700,
                  borderColor: "black",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
