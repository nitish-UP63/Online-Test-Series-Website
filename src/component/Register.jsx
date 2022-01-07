import React, {useState} from "react";
import "./login.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import db from './firebase';
import {useNavigate} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
function Register() {
  const [loading, setloading]=useState(false);
  const navigate=useNavigate();
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
    if(userdetail.name==='' || userdetail.email==='' || userdetail.password==='')
    {
     alert("Plase enter all field");
    }else{
    setloading(true)  
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
        setloading(false);  
        navigate("/")  
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error")
        setloading(false)
        // ..
      });
    }
  };

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
      navigate("/");
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
{ loading ? <div className="loader"> <CircularProgress /> </div>
         : <Button
            style={{ marginLeft: 100 }}
            clasName="btn"
            variant="primary"
            size="lg"
            onClick={registeruser}
          >
            Submit
          </Button>
}
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

export default Register;
