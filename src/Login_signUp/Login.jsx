// // import React from 'react'
// // import './Login.css'

// // const Login = () => {

// //         return (
// //             <div>
// //                 <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
// //                     <div className="card shadow-lg rounded-4 overflow-hidden auth-container">
// //                         <div className="row g-0">

// //                             <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
// //                                 <h2 className="text-success text-center fw-bold">Login In</h2>

// //                                 <input type="email" className="form-control my-3" placeholder="Enter Your Email Id" />
// //                                 <input type="password" className="form-control my-3" placeholder="Enter Your Password" />
// //                                 <button className="btn btn-outline-dark text-center d-flex justify-content-center rounded-pill px-4 py-2 d-flex align-items-center text-center justify-content-center d-block" style={{ width: "40%" }}>SIGN IN</button>

// //                                 <hr className="my-4" />
// //                                 <p className="text-center">or</p>

// //                                 <div className="text-center">
// //                                     <span className="me-2">Continue with Google</span>
// //                                     <i className="fa-brands fa-google google-icon"></i>
// //                                 </div>
// //                             </div>


// //                             <div className="col-md-6 text-white d-flex flex-column justify-content-center align-items-center p-5 auth-right">
// //                                 <h2 className="fw-bold">New Here?</h2>
// //                                 <p className="text-center">
// //                                     Create your free account and enjoy seamless access to <b>PRACHIN JADIBUTI</b>
// //                                 </p>
// //                                 <button
// //                                     className="btn btn-outline-light rounded-pill px-4 py-2 mt-3"
// //                                     onClick={() => navigate("/signup")}
// //                                 >
// //                                     SIGN UP
// //                                 </button>

// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         )
// //     };

// // export default Login

// // import React from "react";
// // import { Link } from "react-router-dom"; // Import Link for navigation

// // const LoginPage = () => {
// //   return (
// //     <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column">
// //       <h2 className="mb-3">Login Page</h2>
// //       <input type="email" className="form-control my-2" placeholder="Enter Email" style={{ width: "300px" }} />
// //       <input type="password" className="form-control my-2" placeholder="Enter Password" style={{ width: "300px" }} />
// //       <button className="btn btn-success px-4 py-2 my-2">Login</button>

// //       <p className="mt-3">Don't have an account?</p>
// //       <Link to="/signup">
// //         <button className="btn btn-outline-success">Sign Up</button>
// //       </Link>
// //     </div>
// //   );
// // };

// // export default LoginPage;

import React from "react";
import { Link } from "react-router-dom";
import '../Login_signUp/Login.css';

const LoginPage = () => {
    return (
        <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
            <div className="card shadow-lg rounded-4 overflow-hidden auth-container w-75" style={{ minHeight: "60vh" }}>
                <div className="row g-0" style={{ minHeight: "70vh" }}>
                    {/* Left Side - Login */}
                    <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
                        <h2 className="text-success text-center fw-bold">Login In</h2>
                        <input type="email" className="form-control my-3" placeholder="Enter Your Email Id" />
                        <input type="password" className="form-control my-3" placeholder="Enter Your Password" />
                        <button className="btn btn-outline-dark rounded-pill px-4 py-2 w-50 mx-auto">SIGN IN</button>
                        <div className="d-flex align-items-center my-3">
                            <hr className="flex-grow-1 text-dark" />
                            <span className="mx-2 text-muted">or</span>
                            <hr className="flex-grow-1 text-dark" />
                        </div>
                        <div className="text-center">
                            <span className="me-2">Continue with Google</span>
                            <i className="fa-brands fa-google google-icon"></i>
                        </div>
                    </div>
                    {/* Right Side - Signup */}
                    <div className="col-md-6 text-white d-flex flex-column justify-content-center align-items-center p-5 login-right">
                        <h2 className="fw-bold">New Here?</h2>
                        <p className="text-center">
                            Create your free account and enjoy seamless access to <b>PRACHIN JADIBUTI</b>
                        </p>
                        <Link to="/signup" className="rounded-pill">
                            <button className="btn btn-outline-light rounded-pill px-4 py-2 mx-auto">SIGN UP</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
