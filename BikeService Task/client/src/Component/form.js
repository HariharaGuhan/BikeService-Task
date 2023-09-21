import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/form.css";
import formlogo from '../images/logoc.jpg';
import axios from 'axios';


export function Form() {

    const [formData, setFormData] = useState({
        user_name: '',
        email: '',
        ph_number: '',
        place: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3005/user1', formData);
            if (response.data.status === 'Registered') {
                alert('Registration successful!');
                setFormData({
                    user_name: '',
                    email: '',
                    ph_number: '',
                    place: ''
                });
                console.log(response);
            } else {
                alert('Registration failed.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during registration.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="contactscroll">&nbsp;</div>
                <div className="container p-5 mt-5 contactscroll">
                    <div className="content row p-4">

                        <div className="col-lg-7">
                            <h3>Enter your details we will contact you</h3>
                            <div className="row mt-4">

                                <div className="col-lg-3" >
                                    <label for="personname">Name</label>
                                </div>
                                <div className="col-lg-9">
                                    <input type="text" name="user_name"
                                        id="user_name"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={formData.user_name} />
                                </div>
                            </div>
                            <div className="row mt-4">

                                <div className="col-lg-3">
                                    <label for="email">Email</label>
                                </div>
                                <div className="col-lg-9">
                                    <input type="email" name="email"
                                    
                                        id="email"
                                        onChange={handleChange}
                                        value={formData.email}
                                        className="form-control" />
                                </div>
                            </div>


                            <div className="row  mt-4">
                                <div className="col-lg-3">
                                    <label for="phonenumber">Phone number</label>
                                </div>
                                <div className="col-lg-9">

                                    <input type="text" name="ph_number"
                                        id="ph_number"
                                        onChange={handleChange}
                                        value={formData.ph_number}
                                        className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-3">
                                    <label for="place">Place</label>
                                </div>
                                <div className="col-lg-9">
                                    <input type="text" name="place"
                                        id="place"
                                        onChange={handleChange}
                                        value={formData.place}
                                        className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-3">
                                    <button className="btn btn-primary">Send</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-1">&nbsp;</div>
                        <div className="col-lg-4">
                            <img className="formlogoimage" src={formlogo} />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}