import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About VIZANEST CONCIERGE</h2>
          <p>
            VIZANEST CONCIERGE is your premier travel partner, dedicated to providing luxury, personalized travel experiences. 
            From exotic destinations to carefully curated tours, we ensure every journey is memorable and seamless.
          </p>
          <p>
            Our team of travel experts is passionate about creating unique itineraries that cater to your interests, comfort, and style. 
            Experience the world like never before with VIZANEST CONCIERGE.
          </p>
        </div>
        <div className="about-image">
          <img 
            src="https://media.istockphoto.com/id/2188890502/photo/sol-den-serra-beach-at-sunrise-time-ibiza.webp?a=1&b=1&s=612x612&w=0&k=20&c=wbj10HdpP75ky5kOCYjUhUV_VF8Pg_9j7eqe8Un36io=" 
            alt="About VIZANEST CONCIERGE" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
