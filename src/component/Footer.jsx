import React from 'react';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
    return (
        <div className='footer'> 
        <div className='main'>

        <div className='row'>
            <div>
            <h3>Reach to Us</h3>
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
            <h1>Follow Us</h1>
            <div className='follow'>
             <p>  <InstagramIcon  fontSize='5' />Instagram</p>
             <p>  <FacebookIcon fontSize='5' />   Facebook</p>
             <p>  <YouTubeIcon fontSize='5' />   Youtube</p>
             <p> <TwitterIcon fontSize='5' />   Twitter</p>
            </div>
            </div> */}
        </div>
        </div>
    )
}

export default Footer;
