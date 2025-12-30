import React from "react";
import "../../styles/WhyChooseUs.css";
import whyUsImg from "../../assets/images/WhyUs/whyus.webp"; 

const WhyChooseUs = () => {
  return (
    <section className="whyus-section">
      <div className="whyus-container">
        
        {/* LEFT CONTENT */}
        <div className="whyus-content">
          <h2>Why Choose Us?</h2>

          <p>
            <strong>Expert Guidance:</strong> Our knowledgeable staff is always
            available to help you select the right battery for your specific
            needs.
          </p>

          <p>
            <strong>Quality Assurance:</strong> As an authorized Exide dealer,
            we guarantee that all our products meet the highest standards of
            quality and reliability.
          </p>

          <p>
            <strong>Competitive Pricing:</strong> We offer competitive rates
            without compromising on quality, ensuring that you get the best
            value for your money.
          </p>

          <p>
            <strong>Comprehensive Services:</strong> In addition to selling
            batteries, we provide installation and maintenance services to
            ensure peak performance.
          </p>

          <p>
            <strong>Customer Commitment:</strong> At Lucky Battery & Inverter,
            customer satisfaction is our top priority. We believe in building
            long-term relationships through exceptional service and support.
          </p>

          <p className="whyus-highlight">
            Visit us in Kharadi or nearby areas and experience reliable power
            solutions you can trust.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="whyus-image">
          <img src={whyUsImg} alt="Why Choose Lucky Battery" loading="lazy" />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

