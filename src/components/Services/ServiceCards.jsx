import React from "react";

const ServiceCards = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="/contact" className="service-link">
        Enquire Now →
      </a>
    </div>
  );
};

export default ServiceCards;
