import React from "react";
import "../Footer/Footer.css";
import logo from "../../assets/logo1.jpg";

const Footer = () => {
  return (
    <div>
      <div className="footer w-100">
        <div className="container w-100">
          <div className="row w-100">
            <div className="col-lg-3 col-md-6 col-sm-12 footerlogo">
              <img src={logo} />
              <p className="text-light mt-4">
                We provides customized recommendations, expert consultations,
                and seamless deliveries, ensuring holistic wellness through
                Ayurveda. Heal naturally, every day!
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-light">
              <h5>Popular Links</h5>
              <p><ul className="footer">
                <li>Diabetes</li>
                <li>Thyroid</li>
                <li>Constipation & Gas</li>
                <li>Joint Pain</li>
              </ul></p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-light">
              <h5>Quick Link</h5>
              <div>
                <ul className="footer">
                  <li>Home</li>
                  <li>Treatments</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-light">
              <h5>Have a Questions ? </h5>
              <p>
                <i class="fa-solid fa-location-dot me-2"></i>203 Fake St.
                Mountain View, San Francisco, California, USA
              </p>
              <p>
                <i class="fa-solid fa-phone-volume"></i> + 91 00000000
              </p>
              <p>
                <i class="fa-solid fa-envelope"></i> prachinjadibuti@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
