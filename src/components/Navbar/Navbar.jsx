import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/PJlogo.png";

const Navbar = () => {
    return (
        <div className="navigationbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
                <div class="container">
                    <a href="#">
                        <div>
                            <img src={logo} alt="Logo" />
                        </div>
                    </a>

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0 fs-5">
                            <Link to="/">HOME</Link>
                            <Link to="treatment">TREATMENT</Link>
                            <Link to="aboutus">ABOUT US</Link>
                            <Link to="contactus">CONTACT US</Link>
                        </ul>
                    </div>

                    <div>
                    <Link to="/login"><i class="fa-solid fa-user fs-5  me-3" style={{color:"black"}}/></Link>
                    <Link to="#"><i class="fa-solid fa-cart-shopping fs-5" style={{color:"black"}}></i></Link>
                    </div>
                </div>
            </nav>

            {/* personalInfo Button */}
            <div className="checkup text-center d-flex justify-content-center">
                <Link to="/health"><button><i class="fa-solid fa-file-medical"></i> HEALTH CHECKUP</button></Link>
            </div>
        </div>

       
    );
};

export default Navbar;
