import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form-card">
      <form>

        {/* NAME */}
        <div className="form-group">
          <label>Your Name <span>*</span></label>
          <input type="text" placeholder="Enter your full name" required />
        </div>

        {/* MOBILE */}
        <div className="form-group">
          <label>Mobile Number <span>*</span></label>
          <input type="tel" placeholder="Enter your mobile number" required />
        </div>

        {/* EMAIL */}
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email (optional)" />
        </div>

        {/* SERVICE REQUIRED */}
        <div className="form-group">
          <label>Service Required <span>*</span></label>
          <select required>
            <option value="">Select a service</option>
            <option>Battery Sales</option>
            <option>Battery Rental</option>
            <option>Battery Exchange</option>
            <option>Inverter Installation</option>
            <option>Battery Repair / Maintenance</option>
            <option>UPS / Industrial Battery</option>
            <option>Home Delivery</option>
            <option>Not Sure (Need Guidance)</option>
          </select>
        </div>

        {/* BATTERY TYPE */}
        <div className="form-group">
          <label>Battery Type</label>
          <select>
            <option value="">Select battery type</option>
            <option>Inverter Battery</option>
            <option>Car Battery</option>
            <option>Bike Battery</option>
            <option>Tractor Battery</option>
            <option>Industrial Battery</option>
          </select>
        </div>

        {/* LOCATION */}
        <div className="form-group">
          <label>Area / Location</label>
          <input type="text" placeholder="Eg. Kharadi, Hadapsar, Wagholi" />
        </div>

        {/* URGENCY */}
        <div className="form-group">
          <label>Urgency</label>
          <select>
            <option value="">Select urgency</option>
            <option>Immediate (Today)</option>
            <option>Within 1–2 Days</option>
            <option>This Week</option>
            <option>Just Enquiry</option>
          </select>
        </div>

        {/* MESSAGE */}
        <div className="form-group">
          <label>Your Message</label>
          <textarea placeholder="Any additional details (optional)"></textarea>
        </div>

        {/* SUBMIT */}
        <button type="submit">Submit Inquiry</button>

      </form>
    </div>
  );
};

export default ContactForm;
