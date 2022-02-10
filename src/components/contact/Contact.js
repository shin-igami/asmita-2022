import React from "react"
import './contact.css'
export default function Contact() {
  return <section id="contact">
    <div class="contact-box">
      <div class="contact-links">
        <h1>CONTACT US</h1>
        <div class="address">
          <div className="address-item">
          <h2>Address Information</h2>
          <p> ASMITA Headquarters IIIT-Allahabad, Jhalwa, Uttar Pradesh - 211015</p>
          </div>
          <div className="address-item">
          <h2>Telephone</h2>
          <p> Registrations & Enquiry:
            +91 9205325547 - Divyansh Tripathi
            Public Relations:
            +91 8770347157 - Prasoon Maheshwari
            Campus Coordinator:
            +91 8586044965 - Arnav Agarwal</p>
          </div>
          <div className="address-item">
          <h2>Email</h2>
            <p>asmita@iiita.ac.in</p>
          </div>
        </div>
      </div>
      <div class="contact-form-wrapper">
        <h1>LEAVE A MESSAGE</h1>
        <form>
          <div class="form-item">
            <input type="text" name="sender" required />
            <label>Name:</label>
          </div>
          <div class="form-item">
            <input type="text" name="email" required />
            <label>Email:</label>
          </div>
          <div class="form-item">
            <textarea class="" name="message"rows="4" cols="50" required></textarea>
            <label>Message:</label>
          </div>
          <button class="submit-btn">Send</button>
        </form>
      </div>
    </div>
  </section>
}
