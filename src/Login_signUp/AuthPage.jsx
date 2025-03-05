import React, { useState } from "react";
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
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      mobile: "",
      password: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent default form submission behavior
      setLoading(true); // Start the loader
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const userId = Array.from({ length: 10 }, () => characters[Math.floor(Math.random() * characters.length)]).join("");
  
      const apiUrl = "https://pjayurveda.pythonanywhere.com/user_data/";
  
      try {
        // Include user_id in the payload
        const payload = {
          ...formData,
          user_id: userId,
        };

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          user_id:userId
        });
  
        if (response.status === 200 || response.status === 201) {
          alert("Data submitted successfully!");
          localStorage.setItem("userId", userId);
          localStorage.setItem("userToken", JSON.stringify({ email: formData.email, name: formData.name }));
          setFormData({ name: "", email: "", mobile: "", password: "" });
          navigate("/")
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.message || "Failed to submit data"}`);
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
      }finally {
        setLoading(false); // Stop the loader
      }
    };
    
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
                <div
                  className={`col-md-6 p-5 d-flex flex-column justify-content-center ${isLogin ? 'bg-white' : 'text-white'}`}
                  style={{ backgroundColor: "#4F894F" }}
                >
                  {isLogin ? (
                    <>
                      <form>
                        <h2 className="text-success text-center fw-bold">Login In</h2>
                        <input type="email" className="form-control my-3" placeholder="Enter Your Email Id" required/>
                        <input type="password" className="form-control my-3" placeholder="Enter Your Password" required/>
                        <div className="d-flex justify-content-center">
                          <button className="btn btn-outline-dark rounded-pill px-4 py-2 w-50">SIGN IN</button>
                        </div>
                      </form>
                  
                      {/* Divider with OR */}
                      <div className="d-flex align-items-center my-3">
                        <hr className="flex-grow-1 text-dark" />
                        <span className="mx-2 text-muted">or</span>
                        <hr className="flex-grow-1 text-dark" style={{ border: "1px solid black" }} />
                      </div>
                      <div className="text-center" onClick={handleGoogleLogin}>
                        <span className="me-2">Continue with Google</span>
                        <i className="fa-brands fa-google google-icon"></i>
                      </div>
                    </>
                        ) : (
                    <>
                      <h2 className="fw-bold text-light text-center">Welcome Back!</h2>
                      <p className="text-center">To keep connected with us, please login with your personal info.</p>
                      <button
                        className="btn btn-outline-light rounded-pill px-4 py-2 w-50 mx-auto"
                        onClick={() => setIsLogin(true)}
                      >
                        SIGN IN
                      </button>
                    </>
                        )}
                </div>

                {/* Right Side - Toggle Section */}
                <div
                  className={`col-md-6 d-flex flex-column justify-content-center align-items-center p-5 ${isLogin ? 'text-white' : 'bg-white text-dark'}`}
                  style={{ backgroundColor: "#4F894F" }}
                >
                  {isLogin ? (
                  <>
                    <h2 className="fw-bold">New Here?</h2>
                    <p className="text-center">Create your free account and enjoy seamless access to<br /> <b>PRACHIN JADIBUTI</b></p>
                    <button
                      className="btn btn-outline-light rounded-pill px-4 py-2 w-50 mx-auto"
                      onClick={() => setIsLogin(false)}
                    >
                      SIGN UP
                    </button>
                  </>
                        ) : (
                  <>
                    <h2 className="fw-bold text-success">Create Account</h2>
                    <form className="mt-4 w-100" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <input type="text" name="name" className="form-control" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} required />
                      </div>
                      <div className="mb-3">
                        <input type="email" name="email" className="form-control" placeholder="Enter Your Email ID" value={formData.email} onChange={handleChange} required/>
                      </div>
                      <div className="mb-3">
                        <input type="text" name="mobile" className="form-control" placeholder="Enter Your Mobile No." value={formData.mobile} onChange={handleChange} required />
                      </div>
                      <div className="mb-3">
                        <input type="password" name="password" className="form-control" placeholder="Enter Password" value={formData.password} onChange={handleChange} required />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-outline-dark rounded-pill d-flex justify-content-center align-items-center px-4 py-2 w-50 mx-auto"
                        disabled={loading}
                      >
                        {loading ? (
                          <div className="spinner-border spinner-border-sm text-dark" role="status"></div>
                        ) : (
                          "SIGN UP"
                        )}
                      </button>
                    </form>

                    {/* Divider with OR */}
                    <div className="d-flex align-items-center my-3">
                        <hr className="flex-grow-1 text-dark" />
                        <span className="mx-2 text-muted">or</span>
                        <hr className="flex-grow-1 text-dark" style={{ border: "1px solid black" }} />
                    </div>
                    <div className="text-center" onClick={handleGoogleLogin}>
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
