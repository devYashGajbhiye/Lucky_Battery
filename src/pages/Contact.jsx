import React from 'react'
import ContactLeft from '../components/ContactUs/ContactLeft';
import ContactForm from '../components/ContactUs/ContactForm';
import ContactDetails from '../components/ContactUs/ContactDetails';
import CTABanner from '../components/CTA/CTABanner'

import '../styles/ContactPage.css'
const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <ContactLeft />
        <ContactForm />
      </div>
      <ContactDetails />
      <CTABanner />
    </div>
  )
}

export default Contact
