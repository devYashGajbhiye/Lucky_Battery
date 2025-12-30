import React from 'react'
import CategoryCard from './CategoryCard'
import "../../styles/CategorySection.css"
import { FaCarBattery, FaCar, FaMotorcycle, FaTractor, FaIndustry,} from "react-icons/fa";

const CategorySection = () => {
  const categories = [
    { title: "Inverter Battery", icon: <FaCarBattery /> },
    { title: "Car Battery", icon: <FaCar /> },
    { title: "Bike Battery", icon: <FaMotorcycle /> },
    { title: "Tractor Battery", icon: <FaTractor /> },
    { title: "Industrial Battery", icon: <FaIndustry /> },
  ];
  
  return (
    <section className='category-section'>
        <h2 className='section-title'>Categories</h2>

        <div className='category-grid'>
            {categories.map((item, index) => (
                <CategoryCard key={index} item={item} />
            ))}
        </div>     
    </section>
  )
}

export default CategorySection
