import React from "react";
import "../styles/Footer.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-section">
          <h3>Lucky Battery & Inverter</h3>
          <p>
            Lucky Battery provides reliable and affordable battery solutions
            including inverter, car, bike, tractor, and industrial batteries.
            We also offer battery rental, exchange, repair, and home delivery
            services.
          </p>
        </div>

        {/* SERVICES */}
        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li>Battery Sales</li>
            <li>Battery Rental</li>
            <li>Battery Exchange</li>
            <li>Repair & Maintenance</li>
            <li>Home Delivery</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            <FaMapMarkerAlt /> Kharadi, Pune
          </p>
          <p>
            <FaPhoneAlt /> +91 99999 99999
          </p>
          <p>
            <FaWhatsapp /> WhatsApp Available
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Lucky Battery & Inverter. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
