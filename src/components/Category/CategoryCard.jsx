import React from 'react'

const CategoryCard = ({item}) => {
  return (
     <div className="category-card">
      <div className="category-icon">{item.icon}</div>
      <h3>{item.title}</h3>
    </div>
  )
}

export default CategoryCard
