import React from "react";
import "../../styles/Testimonial.css";

const testimonials = [
  {
    name: "Rahul Patil",
    location: "Kharadi, Pune",
    review:
      "Excellent service! Got my inverter battery installed the same day. Staff is very helpful and pricing is reasonable.",
  },
  {
    name: "Sneha Kulkarni",
    location: "Wagholi",
    review:
      "Highly recommended for car batteries. Genuine products and quick home delivery.",
  },
  {
    name: "Amit Sharma",
    location: "Viman Nagar",
    review:
      "Very professional service. Battery exchange process was smooth and hassle-free.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <h2 className="section-title">What Our Customers Say</h2>
      <p className="section-subtitle">
        Trusted by hundreds of satisfied customers
      </p>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p className="review">“{item.review}”</p>

            <div className="customer-info">
              <div className="avatar">
                {item.name.charAt(0)}
              </div>
              <div>
                <h4>{item.name}</h4>
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
