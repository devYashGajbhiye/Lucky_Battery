import React from 'react'
import { FaClipboardList, FaPhoneAlt, FaTruck, FaSmile } from "react-icons/fa";
import "../../styles/HowItWorks.css";

const HowItWorks = () => {
 const steps = [
    {
      icon: <FaClipboardList />,
      title: "Choose a Service",
      description:
        "Select from battery sales, rental, exchange, repair, or home delivery.",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Contact & Book",
      description:
        "Call us or submit an enquiry and our team will assist you instantly.",
    },
    {
      icon: <FaTruck />,
      title: "Fast Service",
      description:
        "We deliver, install, repair, or exchange batteries at your doorstep.",
    },
    {
      icon: <FaSmile />,
      title: "After-Sales Support",
      description:
        "Enjoy warranty support and expert guidance whenever you need it.",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Simple, fast, and hassle-free battery services
        </p>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks
