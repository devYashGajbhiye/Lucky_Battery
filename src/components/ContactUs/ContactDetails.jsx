import React from 'react'
import '../../styles/ContactDetails.css'

const ContactDetails = () => {
  return (
    <section className="contact-details">
      <div className="contact-details-container">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Contact Us</h2>

          <p className="contact-description">
            Visit Lucky Battery & Inverter for expert guidance and quality
            products in Kharadi, Chandan Nagar, Wagholi, Vishrantwadi,
            Nagar Road, and Viman Nagar.
          </p>


          <p className="address">
            <strong>Address:</strong><br />
            52 /1, Nagar Rd, near EON Hospital,<br />
            Shree Ram Society, Kharadi,<br />
            Pune, Maharashtra 411014
          </p>

          <p className="phone">
            <strong>Phone:</strong>{" "}
            <a href="tel:+91 9999999999">+91 9999999999</a>
          </p>

          <div className="hours">
            <strong>Hours</strong>
            <p>9 AM – 6 PM</p>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="contact-map">
          <iframe
            title="Lucky Battery Location"
            src="https://maps.google.com/maps?q=Lucky%20Battery%20%26%20Inverter%20Kharadi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  )
}

export default ContactDetails
