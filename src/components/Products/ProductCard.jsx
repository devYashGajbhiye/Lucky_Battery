import React from "react";
import "../../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">

      {/* Badges */}
      <span className="badge new">New</span>
      {product.discount && (
        <span className="badge discount">{product.discount}% OFF</span>
      )}

      {/* Image */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Content */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

        <div className="spec">
          <span className="label">Warranty:</span>
          <span className="value">{product.warrantyText}</span>
        </div>

        <div className="spec-row">
          <div>
            <span className="label">Capacity:</span>
            <span className="value">{product.capacity} AH</span>
          </div>
          <div className="mrp">MRP: ₹ {product.mrp}</div>
        </div>

        <div className="price-row">
          <span>
            With Old Battery <em>(Same Ah)</em>
          </span>
          <span className="price green">₹ {product.priceWithOld}</span>
        </div>

        <div className="price-row">
          <span>Without Old Battery</span>
          <span className="price">₹ {product.priceWithoutOld}</span>
        </div>

        <p className="tax-note">(Prices are inclusive of all taxes)</p>
      </div>
    </div>
  );
};

export default ProductCard;
