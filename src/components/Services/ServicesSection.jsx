import React from 'react'
import '../../styles/ServiceSection.css'
import ServiceCard from './ServiceCard';
import { FaCarBattery, FaTools, FaExchangeAlt, FaTruck, FaBatteryFull,} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      title: "Battery Sales",
      description:
        "Wide range of inverter, car, bike, tractor and industrial batteries.",
      icon: <FaBatteryFull />,
    },
    {
      title: "Battery Rental",
      description:
        "Affordable battery rental solutions for homes and businesses.",
      icon: <FaCarBattery />,
    },
    {
      title: "Battery Exchange",
      description:
        "Exchange old batteries or get buy-back offers at best prices.",
      icon: <FaExchangeAlt />,
    },
    {
      title: "Repair & Maintenance",
      description:
        "Professional battery repair and maintenance services.",
      icon: <FaTools />,
    },
    {
      title: "Home Delivery",
      description:
        "Fast and reliable doorstep delivery and installation.",
      icon: <FaTruck />,
    },
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        Reliable & affordable battery solutions under one roof
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection
