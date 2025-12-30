import React, { useState, useEffect } from "react";

import HeroSlide from "../Hero/HeroSilde";
import "../../styles/HeroBanner.css";

import banner1 from "../../assets/images/Hero/banner1.jpg";
import banner2 from "../..//assets/images/Hero/banner2.jpg";
import banner3 from "../../assets/images/Hero/banner3.jpeg";

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: banner1,
      showText: false,
      title: "Reliable Battery Solutions",
      subtitle: "Power for Every Need",
      description: "Sales • Rental • Exchange • Service",
    },
    {
      image: banner2,
      showText: false,
    },
    {
      image: banner3,
      showText: false,
    },
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-banner">
      <HeroSlide slide={slides[current]} />

      {/* Slider dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
