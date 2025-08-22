import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <section id="terms" className="terms">
      <div className="terms-container">
        <h2>Terms and Conditions</h2>
        <p>
          Welcome to VIZANEST CONCIERGE. By using our services, you agree to the following terms and conditions. 
          Please read them carefully.
        </p>
        <ul>
          <li>All bookings are subject to availability and confirmation by VIZANEST CONCIERGE.</li>
          <li>Payments must be made in full at the time of booking unless otherwise agreed.</li>
          <li>Cancellation policies vary per tour. Please check the specific terms for each package.</li>
          <li>VIZANEST CONCIERGE is not liable for personal injury, loss, or damage during tours.</li>
          <li>Travelers are responsible for obtaining necessary travel documents, visas, and insurance.</li>
          <li>All content on this website is for informational purposes only and is subject to change without notice.</li>
        </ul>
        <p>
          By using our services, you acknowledge that you have read and agree to these terms and conditions.
        </p>
      </div>
    </section>
  );
};

export default Terms;
