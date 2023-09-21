import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/Navbar.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from 'axios';
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function Home() {

    const [registrationData, setRegistrationData] = useState({
        user_name: '',
        email: '',
        pass_word: '',
      });
    
      const [loginData, setLoginData] = useState({
        user_name: '',
        pass_word: '',
      });
    
      const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:3005/Signup', registrationData);
    
          if (response.data.status === 'Registered') {
            alert('Registration successful!');
            setRegistrationData({
              user_name: '',
              email: '',
              pass_word: '',
            });
          } else {
            alert('Registration failed.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred during registration.');
        }
      };
    
    //   const handleLoginSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       const response = await axios.post('http://localhost:3005/Signin', loginData);
    
    //       if (response.data.status === 'Success') {
    //         alert('Login successful!');
    //         // You can handle the successful login here, e.g., store user information in state or local storage
    //       } else if (response.data.status === 'Invalid') {
    //         alert('Invalid username or password.');
    //       } else {
    //         alert('Login failed.');
    //       }
    //     } catch (error) {
    //       console.error('Error:', error);
    //       alert('An error occurred during login.');
    //     }
    //   };
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:3005/Signin', loginData);
    
          if (response.data.status === 'Success') {
            alert('Login successful!');
            window.location.reload();
            // You can handle the successful login here, e.g., store user information in state or local storage
          } else if (response.data.status === 'Invalid') {
            alert('Invalid username or password.');
          } else {
            alert('Login failed.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred during login.');
        }
      };
    
      const handleRegistrationChange = (e) => {
        const { name, value } = e.target;
        setRegistrationData({ ...registrationData, [name]: value });
      };
    
      const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
      };
    
    function buttoncloseRegister() {
        let closeRegisterForm = document.getElementById("registerFORM");
        closeRegisterForm.style.display = "none";
    }

    function buttoncloseLogin() {
        let closeRegisterForm = document.getElementById("loginFORM");
        closeRegisterForm.style.display = "none";
    }
    return (<>
        <div className="container-fluid homepage">
            <div className='back-ground'>
                <div className="registerloginform">
                    <div className='registerFORM' id="registerFORM">
                        <div className="registerForm" id="registerform" >
                            <div className="mb-3 icondiv">
                                <AiOutlineCloseCircle className="closeicon" onClick={buttoncloseRegister}></AiOutlineCloseCircle>
                            </div>
                            <form onSubmit={handleRegistrationSubmit}>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input
                                        type="text" name="user_name"id="user_name" placeholder="User Name" value={registrationData.user_name} onChange={handleRegistrationChange}
                                        className="form-control"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email </label>
                                    <input
                                       type="email" name="email" id="email"placeholder="Email" value={registrationData.email} onChange={handleRegistrationChange}
                                        aria-describedby='emailHelp'
                                        className="form-control"
                                    />
                                </div>

                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input
                                        type="password" name="pass_word" 
                                        id="pass_word"
                                        placeholder="Password" value={registrationData.pass_word} onChange={handleRegistrationChange}
                                        className="form-control"
                                    />
                                </div>


                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className='loginFORM' id="loginFORM">
                        <div className="registerForm" id="loginform" >
                            <div className="mb-3 icondiv">
                                <AiOutlineCloseCircle className="closeicon" onClick={buttoncloseLogin}></AiOutlineCloseCircle>
                            </div>
                            <form onSubmit={handleLoginSubmit}>
                                <div class="mb-3">
                                    <label for="username" class="form-label">username </label>
                                    <input
                                        type="text" name="user_name" 
                                        id="user_name"placeholder="User Name" value={loginData.user_name} onChange={handleLoginChange}
                                        aria-describedby='emailHelp'
                                        className="form-control"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input
                                        type="password" name="pass_word" 
                                        id="pass_word"
                                        placeholder="Password" value={loginData.pass_word} onChange={handleLoginChange}
                                        aria-describedby='emailHelp'
                                        className="form-control"
                                        
                                    />
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container p-4'>
            <div className="offerscroll">&nbsp;</div>
            <div className='row mt-5 p-3 '>
                <h1 className="text-white">Offers and discounts</h1>
                <div className="col-lg-4 mt-3">
                    <div class="card offerCard">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixoVmYF2N36rXvyztLkznQ5xP6mT9gcyz7Q&usqp=CAU" height="230px" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Today offer</h5>
                            <p class="card-text">We providing extra 1 year waranty for your bikes</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-3">
                    <div class="card offerCard">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBuRlsRoK0qRnxzYDx8gUsQIx-ZMngBdkzhQ&usqp=CAU" height="230px" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Limited time offer</h5>
                            <p class="card-text">10% discount for your bike accessories</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-3">
                    <div class="card offerCard">
                        <img src="https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-25-off-discount-and-sale-promotion-banner-png-image_1517601.jpg" height="230px" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Limited time offer</h5>
                            <p class="card-text">25% discount for your bike insurance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}