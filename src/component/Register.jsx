import React from 'react'
import "./login.css"
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

function Register() {
    return (
        <div className="mainform">
        <div className='loginimg' style={{display:"flex",alignItems:"center"}}>
            <img style={{position:"relative"}} src={require('../Images/loginimg.png')}></img>
        </div>
        <div className="form">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Create Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        
            <Button style={{marginLeft:100}} clasName="btn" variant="primary" size="lg">
                Submit
            </Button>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:15}}>
            <Button class="mt-5 text-center" className="custombtn" style={{margin:5}} variant="outline-primary" size="lg">Sign in with <GoogleIcon /></Button>
            <Button class="mt-5 text-center" className="custombtn" style={{margin:5}} variant="outline-primary" size="lg">Sign in with <FacebookIcon /></Button>    
            </div>
        </Form>
        </div>
        </div>
    )
}

export default Register;
