
import React from 'react'
import "./profile.css"
import {useSelector, useDispatch} from 'react-redux';
import {Setuserstate, Setuserdata} from '../actions/index';

export default function Profile() {
    const userdetail= useSelector(state => state.set_user_data);
    console.log(userdetail);
    return (
        <div>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">{userdetail.name}</span><span className="text-black-50">{userdetail.email}</span><span> </span></div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile </h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-8"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name"  /></div>
                                
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number"  /></div>
                               
                                
                                
                                <div className="col-md-6"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id"  /></div>
                               
                                <div className="col-md-6"><label className="labels">Target</label><input type="text" className="form-control" placeholder="Prepairing for which exam"  /></div>
                                <div className="col-md-6"><label className="labels">City</label><input type="text" className="form-control" placeholder="city"  /></div>
                            </div>
                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      )
}
