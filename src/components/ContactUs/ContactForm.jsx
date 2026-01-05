import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form-card">
      <form>
        <div className="form-group">
          <label>Your First Name</label>
          <input type="text" placeholder="Enter your first name" />
        </div>

        <div className="form-group">
          <label>
            Your Email Address <span>*</span>
          </label>
          <input type="email" placeholder="Enter your email address" />
        </div>

        <div className="form-group">
          <label>
            Your Message <span>*</span>
          </label>
          <textarea placeholder="Type your message here"></textarea>
        </div>

        <button type="submit">Submit Your Inquiry</button>
      </form>
    </div>
  );
};

export default ContactForm;
