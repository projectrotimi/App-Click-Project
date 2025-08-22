import React from "react";
import "./Hero.css";
import { FaPlane } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>VIZANEST Travels & CONCIERGE</h1>
        <p>Your luxury travel experience starts here. Explore exclusive destinations and personalized tours curated just for you.</p>
        <a href="#tours" className="hero-button">
          <FaPlane className="icon" /> Explore Tours
        </a>
      </div>
    </section>
  );
};

export default Hero;
