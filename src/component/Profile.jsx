import React, {useState} from "react";
import "./profile.css";
import { useSelector, useDispatch } from "react-redux";
import { Setuserstate, Setuserdata } from "../actions/index";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from './firebase';
import { useForm } from "react-hook-form";
import CircularProgress from '@mui/material/CircularProgress';

export default function Profile() {
  const dispatch= useDispatch();  
  const userdetail = useSelector((state) => state.set_user_data);
  const uid= useSelector((state)=> state.set_user_id);
  const [loading, setloading]= useState(false);
  const [update, setupdate] = useState({
    name: userdetail.name,
    email: userdetail.email,
    phone: userdetail.phone ? userdetail.phone : '',
    city: userdetail.city ? userdetail.city : '',
    target: userdetail.target ? userdetail.target : ''
  });
  const handlechange = (event) => {
    const { name, value } = event.target;
    setupdate((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  console.log(userdetail);

////////////update
function update_profile(){
  setloading(true);
const updateref = doc(db, "users", uid);
 updateDoc(updateref, {
  ...update,
}).then(()=>{
  alert("saved")
  setloading(false);
}).catch(()=>{
  alert("error")
  setloading(false)
});
///update detail in store
getDoc( doc(db, "users", uid)).then(docSnap => {
    dispatch(Setuserdata(docSnap.data()));
  })
}

////////////


  return (
    <div>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src= {userdetail.url ? userdetail.url : "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"}
              />
              <span className="font-weight-bold">{userdetail.name}</span>
              <span className="text-black-50">{userdetail.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile </h4>
              </div>
 
              <div className="row mt-2">
                <div className="col-md-8">
                  <label className="labels">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    contentEditable={true}
                    value={update.name}
                    onChange={handlechange}
                  />

                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={update.phone}
                    className="form-control"
                    placeholder="enter phone number"
                    onChange={handlechange}
                   
                  />
                </div>

                <div className="col-md-6">
                  <label className="labels">Email ID</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    contentEditable={true}
                    value={update.email}
                    onChange={handlechange}
               
                  />
                </div>

                <div className="col-md-6">
                  <label className="labels">Target</label>
                  <input
                    type="text"
                    name="target"
                    value={update.target}
                    className="form-control"
                    placeholder="Prepairing for which exam"
                    onChange={handlechange}
                  
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">City</label>
                  <input
                    type="text"
                    name="city"
                    value={update.city}
                    className="form-control"
                    placeholder="city"
                    onChange={handlechange}
                  
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
              { loading ? <CircularProgress /> :  <button
                  className="btn btn-primary profile-button"
                  type="button"
                  onClick={update_profile}
                >
                  Save Profile
                </button>
              }
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
