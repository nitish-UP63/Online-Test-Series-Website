import React, { useState, useEffect } from "react";
import "./login.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import db from "./firebase";
import {doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import {useNavigate} from 'react-router-dom';


function Login() {
  const navigate= useNavigate();
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
      // const user = userCredential.user;
      // console.log(user);
      navigate("/");
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
//////////////////google login
function login_with_google(){
  
const auth = getAuth();
const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user.providerData[0].displayName);
    setDoc(doc(db, "users", user.uid), {
      name: user.providerData[0].displayName,
      email: user.providerData[0].email,
      url : user.providerData[0].photoURL
    });
    
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
////////////////////



useEffect(()=>{
  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    getDoc( doc(db, "users", uid)).then(docSnap => {
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
              onClick={login_with_google}
            >
              Sign in with <GoogleIcon />
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
