import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>VIZANEST CONCIERGE</h3>
          <p>Your trusted partner for luxury travel experiences and curated tours worldwide.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#tours">Tours</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p><FaEnvelope /> info@vizanest.com</p>
          <p><FaPhone /> +234 801 234 5678</p>
          <p><FaMapMarkerAlt /> Lagos, Nigeria</p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">&copy; {new Date().getFullYear()} VIZANEST CONCIERGE. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
