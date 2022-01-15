import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="main">
        <div className="row">
          <div className="col-md-6 justify-content-center" style={{textAlign:"center"}}>
            <p>Contact Us</p>
            <p>testseries@gmail.com</p>
          </div>
          <div className="col-md-6 justify-content-center" style={{textAlign:"center"}}>
            <p>Follow Us</p>
            <div className="follow ">
              <InstagramIcon fontSize="5" /> 
              <FacebookIcon fontSize="5" />
              <TwitterIcon fontSize="5" />
            </div>
          </div>
          <br />
          <br /> <br />
          <hr />
          <div style={{textAlign:"center"}}>
          <p>Copyright ⓒ {year}</p>
          </div>
        </div>
        {/* <div className='col1'>
             <h1>Reach to Us</h1>
             <div className='reach'> 
             <p>Email</p>
             <p>Contact</p>
            
             </div>
            </div> */}
        {/* <div className='col2'>
            <h1>Category</h1>
            <div className='category'>
                <p>JEE Main</p>
                <p>NEET</p>
                <p>AKTU</p>
                <p>NDA</p>
            </div>
            </div>
            <div className='col3' >
            
            </div>
            </div> */}
      </div>
    </div>
  );
}

export default Footer;
