// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import '../Login_signUp/Login.css';

// const AuthPage = () => {
//     const [isLogin, setIsLogin] = useState(true);

//     return (
//         <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
//             <div className="card shadow-lg rounded-4 overflow-hidden auth-container w-75" style={{ minHeight: "60vh" }}>
//                 <div className="row g-0" style={{ minHeight: "70vh" }}>
//                     {/* Left Side - Login / Signup */}
//                     <div className={`col-md-6 p-5 d-flex flex-column justify-content-center ${isLogin ? '' : 'text-white'}`}>
//                         {isLogin ? (
//                             <>
//                                 <h2 className="text-success text-center fw-bold">Login In</h2>
//                                 <input type="email" className="form-control my-3" placeholder="Enter Your Email Id" />
//                                 <input type="password" className="form-control my-3" placeholder="Enter Your Password" />
//                                 <button className="btn btn-outline-dark rounded-pill px-4 py-2 w-50 mx-auto">SIGN IN</button>
//                             </>
//                         ) : (
//                             <>
//                                 <h2 className="fw-bold text-success">Create Account</h2>
//                                 <form className="mt-4 w-100">
//                                     <div className="mb-3">
//                                         <input type="text" className="form-control" placeholder="Enter Your Name" />
//                                     </div>
//                                     <div className="mb-3">
//                                         <input type="email" className="form-control" placeholder="Enter Your Email ID" />
//                                     </div>
//                                     <div className="mb-3">
//                                         <input type="text" className="form-control" placeholder="Enter Your Mobile No." />
//                                     </div>
//                                     <div className="mb-3">
//                                         <input type="password" className="form-control" placeholder="Enter Your Password" />
//                                     </div>
//                                 </form>
//                             </>
//                         )}

//                         {/* Divider with OR */}
//                         <div className="d-flex align-items-center my-3">
//                             <hr className="flex-grow-1 text-dark" />
//                             <span className="mx-2 text-muted">or</span>
//                             <hr className="flex-grow-1 text-dark" />
//                         </div>
//                         <div className="text-center">
//                             <span className="me-2">Continue with Google</span>
//                             <i className="fa-brands fa-google google-icon"></i>
//                         </div>
//                     </div>

//                     {/* Right Side - Toggle Section */}
//                     <div className="col-md-6 text-white d-flex flex-column justify-content-center align-items-center p-5 login-right">
//                         {isLogin ? (
//                             <>
//                                 <h2 className="fw-bold">New Here?</h2>
//                                 <p className="text-center">Create your free account and enjoy seamless access to <b>PRACHIN JADIBUTI</b></p>
//                                 <Link to="/signup" className="rounded-pill" onClick={() => setIsLogin(false)}>
//                                     <button className="btn btn-outline-light rounded-pill px-4 py-2 mx-auto">SIGN UP</button>
//                                 </Link>
//                             </>
//                         ) : (
//                             <>
//                                 <h2 className="text-light text-center fw-bold">Welcome Back!</h2>
//                                 <p className="text-light text-center">To keep connected with us please login with your personal info.</p>
//                                 <Link to="/login" className="rounded-pill" onClick={() => setIsLogin(true)}>
//                                     <button className="btn btn-outline-light rounded-pill px-4 py-2 mx-auto">SIGN IN</button>
//                                 </Link>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AuthPage;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import '../Login_signUp/Login.css';

// const AuthPage = () => {
//     const [isLogin, setIsLogin] = useState(true);

//     return (

//         <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
//             <div className="card shadow-lg rounded-4 overflow-hidden auth-container w-75" style={{ minHeight: "60vh" }}>
//                 <div className="row g-0" style={{ minHeight: "70vh" }}>
//                     {/* Left Side - Login / Signup */}
//                     <div className={`col-md-6 p-5 d-flex flex-column justify-content-center ${isLogin ? 'bg-success text-white' : 'bg-white text-dark'}`} >
//                         {isLogin ? (
//                             <>
//                                 {/* Login Form */}
//                                 <h2 className="text-center fw-bold">Login In</h2>
//                                 <input type="email" className="form-control my-3" placeholder="Enter Your Email Id" />
//                                 <input type="password" className="form-control my-3" placeholder="Enter Your Password" />
//                                 <button className="btn btn-outline-light rounded-pill px-4 py-2 w-50 mx-auto">SIGN IN</button>
//                             </>
//                         ) : (
//                             <>
//                                 {/* Welcome Back Form */}
//                                 <h2 className="fw-bold">Welcome Back!</h2>
//                                 <form className="mt-4 w-100">
//                                     <div className="mb-3">
//                                         <input type="text" className="form-control" placeholder="Enter Your Name" />
//                                     </div>
//                                     <div className="mb-3">
//                                         <input type="email" className="form-control" placeholder="Enter Your Email ID" />
//                                     </div>
//                                     <div className="mb-3">
//                                         <input type="text" className="form-control" placeholder="Enter Your Mobile No." />
//                                     </div>
//                                     <div className="mb-3">
//                                         <input type="password" className="form-control" placeholder="Enter Your Password" />
//                                     </div>
//                                 </form>
//                             </>
//                         )}
//                     </div>

//                     {/* Right Side - Toggle Section */}
//                     <div className={`col-md-6 d-flex flex-column justify-content-center align-items-center p-5 ${isLogin ? 'bg-white text-dark' : 'bg-success text-white'}`}>
//                         {isLogin ? (
//                             <>
//                                 {/* New Here */}
//                                 <h2 className="fw-bold">New Here?</h2>
//                                 <p className="text-center">Create your free account and enjoy seamless access to <b>PRACHIN JADIBUTI</b></p>
//                                 <Link to="/signup" className="rounded-pill" onClick={() => setIsLogin(false)}>
//                                     <button className="btn btn-outline-success rounded-pill px-4 py-2 mx-auto">SIGN UP</button>
//                                 </Link>
//                             </>
//                         ) : (
//                             <>
//                                 {/* Create Account */}
//                                 <h2 className="fw-bold">Create Account</h2>
//                                 <p className="text-center">To keep connected with us, please login with your personal info.</p>
//                                 <Link to="/login" className="rounded-pill" onClick={() => setIsLogin(true)}>
//                                     <button className="btn btn-outline-light rounded-pill px-4 py-2 mx-auto">SIGN IN</button>
//                                 </Link>
//                             </>
//                         )}
//                     </div>


//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AuthPage;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Login_signUp/Login.css';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
            <div className="card shadow-lg rounded-4 overflow-hidden auth-container w-75" style={{ minHeight: "60vh" }}>
                <div className="row g-0" style={{ minHeight: "70vh" }}>

                    {/* Left Side - Login / Signup */}
                    <div
                        className={`col-md-6 p-5 d-flex flex-column justify-content-center 
                        ${isLogin ? 'bg-white' : 'bg-success text-white'}`}
                    >
                        {isLogin ? (
                            <>
                                <h2 className="text-success  text-center fw-bold">Login In</h2>
                                <input type="email" className="form-control my-3" placeholder="Enter Your Email Id" />
                                <input type="password" className="form-control my-3" placeholder="Enter Your Password" />
                                <button className="btn btn-outline-dark rounded-pill px-4 py-2 w-50 mx-auto">SIGN IN</button>

                                {/* Divider with OR */}
                                <div className="d-flex align-items-center my-3">
                                    <hr className="flex-grow-1 text-dark" /><hr/>
                                    <span className="mx-2 text-muted ">or</span>
                                    <hr className="flex-grow-1 text-dark" style={{border:"1px solid black"}}/>
                                </div>
                                <div className="text-center">
                                    <span className="me-2">Continue with Google</span>
                                    <i className="fa-brands fa-google google-icon"></i>
                                </div>
                            </>
                        ) : (
                            <>
                                <h2 className="fw-bold text-light text-center">Welcome Back!</h2>
                                <p className="text-center">To keep connected with us, please login with your personal info.</p>
                                <button className="btn btn-outline-light rounded-pill px-4 py-2 mx-auto" onClick={() => setIsLogin(false)}>SIGN IN</button>
                            </>
                        )}


                    </div>

                    {/* Right Side - Toggle Section */}
                    <div
                        className={`col-md-6 d-flex flex-column justify-content-center align-items-center p-5
                        ${isLogin ? 'bg-success text-white' : 'bg-white text-dark'}`}
                    >
                        {isLogin ? (
                            <>
                                <h2 className="fw-bold">New Here?</h2>
                                <p className="text-center">Create your free account and enjoy seamless access to <b>PRACHIN JADIBUTI</b></p>
                                <button className="btn btn-outline-light rounded-pill px-4 py-2 mx-auto" onClick={() => setIsLogin(false)}>SIGN UP</button>
                            </>
                        ) : (
                            <>
                                <h2 className="fw-bold text-success">Create Account</h2>
                                <form className="mt-4 w-100">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Enter Your Name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Enter Your Email ID" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Enter Your Mobile No." />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" placeholder="Enter Your Password" />
                                    </div>
                                    <button className="btn btn-outline-dark rounded-pill d-flex justify-content-center align-items-center px-4 py-2 mx-auto" onClick={() => setIsLogin(true)}>SIGN UP</button>

                                </form>
                                {/* Divider with OR */}
                                <div className="d-flex align-items-center my-3">
                                    <hr className="flex-grow-1 text-dark" /><hr/>
                                    <span className="mx-2 text-muted ">or</span>
                                    <hr className="flex-grow-1 text-dark" style={{border:"1px solid black"}}/>
                                </div>
                                <div className="text-center">
                                    <span className="me-2">Continue with Google</span>
                                    <i className="fa-brands fa-google google-icon"></i>
                                </div>

                            </>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AuthPage;
