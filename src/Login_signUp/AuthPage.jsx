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

import React, { useState} from "react";
import { Link } from "react-router-dom";
import '../Login_signUp/Login.css';
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {getToken,onMessage } from "firebase/messaging";
import messaging from "../firebase"
import axios from "axios"

const AuthPage = () => {

    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    
    const checkNotificationPermission = async () => {
        console.log("Current Permission:", Notification.permission);
        const permission = Notification.permission;
        if (permission === "granted") {
          console.log("Permission already granted.");
          return true;
        } else if (permission === "default") {
          console.log("Requesting permission...");
          const result = await Notification.requestPermission();
          console.log("Permission result:", result);
          return result === "granted";
        } else {
          console.warn("Notification permission is denied or blocked.");
          return false;
        }
      };
      
      
      const handleGoogleLogin = async () => {
        try {
          const provider = new GoogleAuthProvider();
          provider.setCustomParameters({ prompt: "select_account" });
      
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
          console.log("Google user:", user);
      
          // Check and request notification permission
          const hasPermission = await checkNotificationPermission();
          let token = null;
      
          if (hasPermission) {
            token = await getToken(messaging, {
              vapidKey: "BFxliIbbHJmBbWkpnzyGJwPcgDcaBslXn8c4Iik36d5YCpk7uik_5Si42e7pFEE64aHhZETE8Sx2suCaxBsAIOg",
            }).catch((err) => {
              console.error("Failed to get notification token:", err);
            });
          }
      
          const { displayName, email, uid } = user;
          const formData = { name: displayName, email: email, user_id: uid };
          console.log("Form data to be sent:", formData);
      
          // Post data to the backend
          const response = await axios.post("https://pjayurveda.pythonanywhere.com/user_data/", formData, {
            headers: { "Content-Type": "application/json" },
          });
      
          if (response.status === 200 || response.status === 201) {
            localStorage.setItem("userId", uid);
            localStorage.setItem("webToken", token || "No Token");
            localStorage.setItem("userToken", JSON.stringify({ email: email, name: displayName }));
            navigate("/");
          }
        } catch (error) {
          console.error("Error during Google login or data post:", error);
          alert("Something went wrong. Please try again.");
        }
      
        // Listen for notifications
        onMessage(messaging, (payload) => {
          console.log("Foreground message received:", payload);
          alert(`Notification: ${payload.notification.title} - ${payload.notification.body}`);
        });
      };
      
    return (
        
        <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
            <div className="card shadow-lg rounded-4 overflow-hidden auth-container w-75" style={{ minHeight: "60vh" }}>
                <div className="row g-0" style={{ minHeight: "70vh" }}>
                    {/* Left Side - Login / Signup */}
                    <div className={`col-md-6 p-5 d-flex flex-column justify-content-center ${isLogin ? '' : 'text-white'}`}>
                        {isLogin ? (
                            <>
                                <h2 className="text-success text-center fw-bold">Login In</h2>
                                <input type="email" className="form-control my-3" placeholder="Enter Your Email Id" />
                                <input type="password" className="form-control my-3" placeholder="Enter Your Password" />
                                <button className="btn btn-outline-dark rounded-pill px-4 py-2 w-50 mx-auto">SIGN IN</button>
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
                                </form>
                            </>
                        )}

                        {/* Divider with OR */}
                        <div className="d-flex align-items-center my-3">
                            <hr className="flex-grow-1 text-dark" />
                            <span className="mx-2 text-muted">or</span>
                            <hr className="flex-grow-1 text-dark" />
                        </div>
                        <div className="text-center" onClick={handleGoogleLogin}>
                            <span className="me-2 text-success">Continue with Google</span>
                            <i className="fa-brands fa-google google-icon"></i>
                        </div>
                    </div>
                    
                    {/* Right Side - Toggle Section */}
                    <div className="col-md-6 text-white d-flex flex-column justify-content-center align-items-center p-5 login-right">
                        {isLogin ? (
                            <>
                                <h2 className="fw-bold">New Here?</h2>
                                <p className="text-center">Create your free account and enjoy seamless access to <b>PRACHIN JADIBUTI</b></p>
                                <Link to="/signup" className="rounded-pill" onClick={() => setIsLogin(false)}>
                                    <button className="btn btn-outline-light rounded-pill px-4 py-2 mx-auto">SIGN UP</button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <h2 className="text-light text-center fw-bold">Welcome Back!</h2>
                                <p className="text-light text-center">To keep connected with us please login with your personal info.</p>
                                <Link to="/login" className="rounded-pill" onClick={() => setIsLogin(true)}>
                                    <button className="btn btn-outline-light rounded-pill px-4 py-2 mx-auto">SIGN IN</button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
