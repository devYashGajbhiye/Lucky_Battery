import React from "react";
import "../../styles/ProductHero.css";

const ProductHero = () => {
  return (
    <section className="product-hero">
      <div className="product-hero-overlay">
        <div className="product-hero-content">
          
          {/* Breadcrumb */}
          <p className="breadcrumb">
            Home <span>/</span> Products
          </p>

          {/* Title */}
          <h1>Our Battery Products</h1>

          {/* Subtitle */}
          <p className="subtitle">
            Reliable batteries for homes, vehicles, and businesses — built to
            deliver long-lasting power.
          </p>

        </div>
      </div>
    </section>
  );
};

export default ProductHero;
