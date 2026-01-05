import React from 'react'

const ServiceHero = () => {
  return (
    <section className="services-hero">
      <div className="services-hero-overlay">
        <div className="services-hero-content">
          <h1>Our Battery Services</h1>
          <p>
            Reliable battery sales, rental, exchange, and maintenance services
            with fast doorstep delivery.
          </p>

          <div className="services-hero-buttons">
            <a href="/contact" className="btn primary-btn">
              Enquire Now
            </a>
            <a href="/services#list" className="btn secondary-btn">
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceHero
