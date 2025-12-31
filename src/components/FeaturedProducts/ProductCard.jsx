import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <a
        href="tel:+919999999999"
        className="product-btn"
      >
        Enquire Now
      </a>
    </div>
  );
};

export default ProductCard;
