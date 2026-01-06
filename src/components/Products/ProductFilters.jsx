import React from 'react'
import '../../styles/ProductFilters.css'
const ProductFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const clearFilters = () => {
    setFilters({
      type: "",
      brand: "",
      capacity: "",
      warranty: "",
    });
  };

  return (
    <section className="product-filters">
      <div className="filters-container">

        {/* Battery Type */}
        <select name="type" value={filters.type} onChange={handleChange}>
          <option value="">Battery Type</option>
          <option value="inverter">Inverter Battery</option>
          <option value="car">Car Battery</option>
          <option value="two-wheeler">Two-Wheeler Battery</option>
          <option value="solar">Solar Battery</option>
        </select>

        {/* Brand */}
        <select name="brand" value={filters.brand} onChange={handleChange}>
          <option value="">Brand</option>
          <option value="exide">Exide</option>
          <option value="amaron">Amaron</option>
          <option value="luminous">Luminous</option>
          <option value="sf-sonic">SF Sonic</option>
        </select>

        {/* Capacity */}
        <select name="capacity" value={filters.capacity} onChange={handleChange}>
          <option value="">Capacity (Ah)</option>
          <option value="100">100 Ah</option>
          <option value="150">150 Ah</option>
          <option value="180">180 Ah</option>
          <option value="200">200 Ah</option>
        </select>

        {/* Warranty */}
        <select name="warranty" value={filters.warranty} onChange={handleChange}>
          <option value="">Warranty</option>
          <option value="24">24 Months</option>
          <option value="36">36 Months</option>
          <option value="48">48 Months</option>
        </select>

        {/* Clear Button */}
        <button className="clear-btn" onClick={clearFilters}>
          Clear Filters
        </button>

      </div>
    </section>
  );
};

export default ProductFilters
