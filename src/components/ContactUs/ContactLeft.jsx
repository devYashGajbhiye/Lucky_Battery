import React from 'react'
import contactImg from "../../assets/images/Contact/contact.jpg";


const ContactLeft = () => {
  return (
    <div className='contact-left'>
      <h1>Contact Us</h1>
      <p>
        Reach out for expert guidance and prompt service on
        batteries and investors in Pune.
      </p>

      <img src={contactImg} alt='Contact Support' />
    </div>
  )
}

export default ContactLeft
