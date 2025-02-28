// import React from 'react'

// const Signup = () => {
//   return (
//     <div>
//        <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
//       <div className="card shadow-lg rounded-4 overflow-hidden auth-container">
//         <div className="row g-0">
//           {/* Left Side - Login */}
//           <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
//             <h2 className="text-success text-center fw-bold">Login In</h2>

//             <input type="email" className="form-control my-3" placeholder="Enter Your Email Id" />
//             <input type="password" className="form-control my-3" placeholder="Enter Your Password" />

//             <button
//               className="btn btn-outline-dark rounded-pill px-4 py-2 mx-auto d-block"
//               style={{ width: "40%" }}
//               onClick={() => navigate("/signin")} // Redirect to Sign In page
//             >
//               SIGN IN
//             </button>

//             <hr className="my-4" />
//             <p className="text-center">or</p>

//             <div className="text-center">
//               <span className="me-2">Continue with Google</span>
//               <i className="fa-brands fa-google google-icon"></i>
//             </div>
//           </div>

//           {/* Right Side - Signup */}
//           <div className="col-md-6 text-white d-flex flex-column justify-content-center align-items-center p-5 auth-right">
//             <h2 className="fw-bold">New Here?</h2>
//             <p className="text-center">
//               Create your free account and enjoy seamless access to <b>PRACHIN JADIBUTI</b>
//             </p>
//             <Link to="/login">
//        <button className="btn btn-success">Go to Login</button>
//        </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Signup




// import React from "react";
// import { Link } from "react-router-dom"; // Import Link for navigation

// const SignupPage = () => {
//   return (
//     <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 p-5">
//       <div className="card shadow-lg rounded-4 overflow-hidden auth-container">
//         <div className="row g-0">
//           {/* Left Side - Login */}
//           <div className="col-md-6 p-5 d-flex flex-column justify-content-center login-left">
//             <h2 className="text-light text-center fw-bold">Welcome Back!</h2>
//             <p className="text-light">To keep connected with us please login with your personal  info.</p>



//             <button className="btn btn-outline-light rounded-pill px-4 py-2 w-50 mx-auto">SIGN IN</button>

//           </div>
//           {/* Right Side - Signup */}
//           <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-5">
//             <h2 className="fw-bold text-success">Create Account</h2>
//             <form className="mt-4 w-100">   
//             <div className="mb-3">
//                <input type="text" className="form-control" placeholder="Enter Your Name" />
//              </div>
//              <div className="mb-3">
//                <input type="email" className="form-control" placeholder="Enter Your Email ID" />
//              </div>
//              <div className="mb-3">
//                <input type="text" className="form-control" placeholder="Enter Your Mobile No." />
//              </div>
//              <div className="mb-3">
//                <input type="password" className="form-control" placeholder="Enter Your Password" />
//              </div>
//           </form>
//              <hr className="my-4" />
//             <p className="text-center">or</p>
//             <div className="text-center">
//             <span className="me-2">Continue with Google</span>
//             <i className="fa-brands fa-google google-icon"></i>
//             </div>
//             <Link to="/login">
//               <button className="btn btn-outline-dark rounded-pill mx-auto">Sign Up</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>


//   );
// };

// export default SignupPage;

import React from "react";
import { Link } from "react-router-dom";
import '../Login_signUp/Login.css';

const LoginPage = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow-lg rounded-4 overflow-hidden auth-container w-75">
        <div className="row g-0">
          {/* Left Side - Login */}
          <div className="col-md-6 p-5 d-flex flex-column justify-content-center login-right">
            <h2 className="text-light text-center fw-bold">Welcome Back!</h2>
            <p className="text-light text-center">To keep connected with us please login with your personal  info.</p>
            <button className="btn btn-outline-light rounded-pill px-4 py-2 w-50 mx-auto">SIGN IN</button>
          </div>
          {/* Right Side - Signup */}
          <div className="col-md-6 text-white d-flex flex-column justify-content-center align-items-center p-5 ">
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

              {/* Divider with OR */}
              <div className="d-flex align-items-center my-3">
                <hr className="flex-grow-1 text-dark" />
                <span className="mx-2 text-muted">or</span>
                <hr className="flex-grow-1 text-dark" />
              </div>
              <div className="text-center text-dark">
                <span className="me-2">Continue with Google</span>
                <i className="fa-brands fa-google google-icon"></i>
              </div>
            </form>
            
            <Link to="/login">
              <button className="btn btn-outline-dark rounded-pill mx-auto">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
