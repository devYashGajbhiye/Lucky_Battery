import React from 'react'
import ProductCard from './ProductCard';
import '../../styles/ProductGrid.css'
const ProductGrid = ({ products, filters }) => {
  const filteredProducts = products.filter((product) => {
    return (
      (!filters.type || product.type === filters.type) &&
      (!filters.brand || product.brand === filters.brand) &&
      (!filters.capacity || product.capacity === filters.capacity) &&
      (!filters.warranty || product.warranty === filters.warranty)
    );
  });

  return (
    <section className="product-grid">
      <div className="grid-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-products">No products found matching your filters.</p>
        )}
      </div>
    </section>
  );
};

export default ProductGrid
