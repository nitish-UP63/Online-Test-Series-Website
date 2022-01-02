import React, {useState} from "react";
import "./login.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import db from './firebase';

function Register() {
    const [userdetail, setuserdetail] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handlechange=(event)=>{
        const {name, value} = event.target;
        setuserdetail(preValue=>{
        return {
            ...preValue,
            [name]: value
        }
        })
    }

  const registeruser = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userdetail.email, userdetail.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setDoc(doc(db, "users", userCredential.user.uid), {
            name: userdetail.name,
            email: userdetail.email,
            password: userdetail.password
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="mainform">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={require("../Images/loginimg.png")}></img>
      </div>
      <div className="form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Full Name" onChange={handlechange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email"  onChange={handlechange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Create Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password"  onChange={handlechange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="confirm-password" placeholder="Password"   onChange={handlechange} />
          </Form.Group>

          <Button
            style={{ marginLeft: 100 }}
            clasName="btn"
            variant="primary"
            size="lg"
            onClick={registeruser}
          >
            Submit
          </Button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Button
              className="custombtn"
              style={{ margin: 5 }}
              variant="outline-primary"
              size="lg"
            >
              Sign in with <GoogleIcon />
            </Button>
            <Button
              className="custombtn"
              style={{ margin: 5 }}
              variant="outline-primary"
              size="lg"
            >
              Sign in with <FacebookIcon />
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
