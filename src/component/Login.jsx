import React, { useState, useEffect } from "react";
import "./login.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import DB from "./firebase";
import { onSnapshot, collection, doc, getDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

function Login() {
  const [logindetail, setlogindetail]= useState({
      email: '',
      password: ''
  })
const handlechange=(event)=>{
    const {type, value} = event.target;
    setlogindetail(preValue=>{
    return {
        ...preValue,
        [type]: value
    }
    })

}

  function userlogin(){
  const auth = getAuth();
  signInWithEmailAndPassword(auth, logindetail.email, logindetail.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      setlogindetail(()=>{
          return {  email: '', password: ''
      }
    })
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }
useEffect(()=>{
  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    getDoc(doc(DB, "users", uid)).then(docSnap => {
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
      })
  } 
});
}, [])

  return (
    <div className="mainform">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={require("../Images/loginimg.png")}></img>
      </div>
      <div className="form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={logindetail.email} onChange={handlechange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={logindetail.password} onChange={handlechange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            style={{ marginLeft: 100 }}
            clasName="btn"
            variant="primary"
            size="lg"
          onClick={userlogin} >
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

export default Login;
