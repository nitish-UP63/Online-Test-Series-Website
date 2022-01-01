import React from 'react'
import "./login.css"
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';


function Login() {
    return (
        <div className="mainform">
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src={require('../Images/loginimg.png')}></img>
            </div>
            <div className="form">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button style={{ marginLeft: 100 }} clasName="btn" variant="primary" size="lg">
                        Submit
                    </Button>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 15 }}>
                        <Button className="custombtn" style={{ margin: 5 }} variant="outline-primary" size="lg">Sign in with <GoogleIcon /></Button>
                        <Button className="custombtn" style={{ margin: 5 }} variant="outline-primary" size="lg">Sign in with <FacebookIcon /></Button>
                    </div>
                </Form>
            </div>
        </div>

    )
}

export default Login;
