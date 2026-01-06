import React, {useState} from 'react'
import ProductHero from '../components/Products/ProductHero'
import ProductFilters from '../components/Products/ProductFilters'
import ProductGrid from '../components/Products/ProductGrid'
import products from '../data/product'

const Products = () => {
   const [filters, setFilters] = useState({
    type: "",
    brand: "",
    capacity: "",
    warranty: "",
  });
  return (
    <div>
      <ProductHero />
      <ProductFilters filters={filters} setFilters={setFilters} />
      <ProductGrid products={products} filters={filters} />

    </div>
  )
}

export default Products
