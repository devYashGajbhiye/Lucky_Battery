import React from 'react'
import ServiceHero from '../components/Services/ServiceHero'
import ServicesList from '../components/Services/ServicesList'
import HowItWorks from '../components/Services/HowItWorks'
import FAQ from '../components/Services/FAQ'

import '../styles/ServiceHero.css'


const Services = () => {
  return (
    <div>
      <ServiceHero />
      <ServicesList />
      <HowItWorks />
      <FAQ />
    </div>
  )
}

export default Services
