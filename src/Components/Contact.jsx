import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact VIZANEST CONCIERGE</h2>
      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <p><FaEnvelope /> Email: info@vizanest.com</p>
          <p><FaPhone /> Phone: +234 801 234 5678</p>
          <p><FaMapMarkerAlt /> Location: Lagos, Nigeria</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
