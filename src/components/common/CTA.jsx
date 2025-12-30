import React from 'react'
import '../../styles/CTA.css'
const CTA = ({title, subtitle}) => {
  return (
    <section className='cta'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div className='cta-buttons'>
            <button text="Call Now" />
            <button text="WhatsApp" variant="outline" />
        </div>
      
    </section>
  )
}

export default CTA
