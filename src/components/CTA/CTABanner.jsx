import React from "react";
import "../../styles/CTABanner.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="cta-container">
        
        {/* TEXT */}
        <div className="cta-text">
          <h2>Need a Reliable Battery Solution?</h2>
          <p>
            Get expert guidance, best prices, and fast installation.
            Call us or WhatsApp now!
          </p>
        </div>

        {/* BUTTONS */}
        <div className="cta-buttons">
          <a href="tel:+919999999999" className="cta-btn call">
            <FaPhoneAlt /> Call Now
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn whatsapp"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default CTABanner;
