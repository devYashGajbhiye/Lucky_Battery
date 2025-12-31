import React, { useRef } from "react";
import "../../styles/FeaturedProducts.css";
import {FaEye, FaShoppingCart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import battery1 from "../../assets/images/products/inverter-battery.webp";
import battery2 from "../../assets/images/products/car-battery.jpg";
import battery3 from "../../assets/images/products/bike-battery.jpg";
import battery4 from "../../assets/images/products/solar-battery.jpg";
import battery5 from "../../assets/images/products/industrial-battery.png";
import battery6 from "../../assets/images/products/inverter-battery2.jpeg";
import battery7 from "../../assets/images/products/amaron-battery.jpg";

const products = [
  {
    id: 1,
    name: "Exide Inverter Battery",
    price: "₹9,500",
    warranty: "36 Months",
    image: battery1,
  },
  {
    id: 2,
    name: "Exide Car Battery",
    price: "₹6,200",
    warranty: "48 Months",
    image: battery2,
  },
  {
    id: 3,
    name: "Exide Bike Battry",
    price: "₹1,000",
    warranty: "24 Months",
    image: battery3,
  },
  {
    id: 4,
    name: "Livguard Solar Battery 200ah",
    price: "₹18,500",
    warranty: "60 Months",
    image: battery4,
  },
  {
    id: 5,
    name: "Tata Green Batteries 12Ah Industrial battery",
    price: "₹3,500",
    warranty: "60 months",
    image: battery5,   
  },
  {
    id: 6,
    name: "Exide Luminous 150ah Tall Tabular Battery",
    price: "₹11,500",
    warranty: "72 months",
    image: battery6,
  },
  {
    id: 7,
    name: "Amaron FLO  DIN50 L",
    price: "₹7,400",
    warranty: "60 months",
    image: battery7,
  }
];

const FeaturedProducts = () => {
    const sliderRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (direction === "left") {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };


  return (
    <section className="featured-section">
      <h2 className="section-title">Featured Products</h2>
      <p className="section-subtitle">
        Top selling & trusted batteries
      </p>

      <div className="slider-wrapper">
        {/* Left Arrow */}
        <button className="slider-btn left" onClick={() => scroll("left")}>
          <FaChevronLeft />
        </button>

        {/* Slider */}
        <div className="product-slider" ref={sliderRef}>
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />

                {/* Hover Overlay */}
                <div className="product-overlay">
                  <div className="product-overlay">
                    <button className="view-btn">View Details</button>
                  </div>
                </div>

                
              </div>


              
             <div className="product-info">
                <h4 className="product-name">{product.name}</h4>

                <div className="product-meta">
                  <span className="price">Price : {product.price}</span>
                  <span className="warranty">Warranty : {product.warranty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="slider-btn right" onClick={() => scroll("right")}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
