import React from "react";
import ServiceCards from "./ServiceCards";
import { FaBatteryFull, FaExchangeAlt, FaTools, FaTruck, FaSyncAlt,} from "react-icons/fa";
import "../../styles/ServicesList.css";

const ServicesList = () => {
  const services = [
    {
      icon: <FaBatteryFull />,
      title: "Battery Sales",
      description:
        "Wide range of genuine inverter, car, bike, and industrial batteries from trusted brands.",
    },
    {
      icon: <FaSyncAlt />,
      title: "Battery Rental",
      description:
        "Affordable battery rental solutions for homes, offices, and temporary power needs.",
    },
    {
      icon: <FaExchangeAlt />,
      title: "Battery Exchange",
      description:
        "Exchange your old battery and get instant discounts on new battery purchases.",
    },
    {
      icon: <FaTools />,
      title: "Repair & Maintenance",
      description:
        "Expert diagnostics, repair, and maintenance services to extend battery life.",
    },
    {
      icon: <FaTruck />,
      title: "Home Delivery",
      description:
        "Fast and safe doorstep delivery and installation by trained technicians.",
    },
  ];

  return (
    <section className="services-list" id="list">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Complete battery solutions tailored for your needs
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCards
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
