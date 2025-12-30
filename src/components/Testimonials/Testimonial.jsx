import React, { useEffect, useState } from "react";
import "../../styles/Testimonial.css";
import personImg from "../../assets/images/Testimonial/testimonial.jpg";

const testimonials = [
  {
    text: "Thanks to Lucky Battery, my e-rickshaw fleet operates efficiently with long-lasting power, allowing me to boost my business.",
    name: "Tarun",
    role: "E-Rickshaw Fleet Owner",
  },
  {
    text: "Lucky Battery has been a game-changer for our home inverter system. Dependable energy and uninterrupted power supply.",
    name: "Anuj",
    role: "Happy Customer",
  },
  {
    text: "Excellent service and genuine products. Battery exchange was smooth and hassle-free.",
    name: "Rahul",
    role: "Customer",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">

       {/* LEFT */}
<div className="testimonial-left">
  <span className="testimonial-tag">WHAT OUR CLIENTS SAY</span>
  <h2 className="testimonial-title">Testimonials</h2>

  <div className="testimonial-card">
    <p className="testimonial-text">
      “{testimonials[current].text}”
    </p>

    <div className="testimonial-user">
      <div className="avatar">
        {testimonials[current].name.charAt(0)}
      </div>
      <div>
        <h4>{testimonials[current].name}</h4>
        <span>{testimonials[current].role}</span>
      </div>
    </div>
  </div>

  {/* DOTS */}
  <div className="testimonial-dots">
    {testimonials.map((_, index) => (
      <span
        key={index}
        className={`dot ${current === index ? "active" : ""}`}
        onClick={() => setCurrent(index)}
      ></span>
    ))}
  </div>
</div>


        {/* RIGHT */}
        <div className="testimonial-right">
          <img
            src={personImg}
            alt="Happy customer"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
