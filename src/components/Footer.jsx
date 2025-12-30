import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>

            <div className='footer-setion'>
                <h3>Lucky Battery</h3>
                <p>
                    Reliable & affordable battery solutions for homes, vhicles, and
                    industries. Trusted service and quality products.
                </p>
            </div>

            <div className='footer-section'>
                <h4>Services</h4>
                <ul>
                   <NavLink to="/services">Battery Replacement</NavLink>
                   <NavLink to="/services">Battery Maintenance</NavLink>
                   <NavLink to="/services">Emergency Services</NavLink>
                   <NavLink to="/services">Consultation</NavLink>
                </ul>
             </div>


             <div className='footer-section'>
                <h4>Contact</h4>
                <p>📞 +91 XXXXX XXXXX</p>
                <p>📍 Pune, Maharashtra</p>
                <p>🕒 Mon – Sun: 9AM – 8PM</p>
             </div>
        </div>

        <div className="footer-bottom">
        © {new Date().getFullYear()} Maxzoom India Pvt. Ltd. All Rights Reserved.
        </div>
      
    </footer>
  )
}

export default Footer
