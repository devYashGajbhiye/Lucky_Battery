import React from 'react'

//pages
import AboutHero from '../components/About/AboutHero'
import AboutIntro from '../components/About/AboutIntro'
import WhyChooseUs from '../components/WhyUs/WhyChooseUs'
import MissionVision from '../components/About/MissionVision'
import CTABanner from '../components/CTA/CTABanner'

const About = () => {
  return (
    <div>
      <AboutHero
        title="About Lucky Battery"
        subtitle="Powering homes, vehicles, and businesses with reliable battery solutions."
      />
      <AboutIntro />
      <WhyChooseUs />
      <MissionVision />
      <CTABanner />
    </div>
  )
}

export default About
