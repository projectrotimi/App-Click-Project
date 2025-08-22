import React from "react";
import "./Tours.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const tours = [
  {
    id: 1,
    name: "Santorini Luxury Escape",
    location: "Greece",
    description: "Experience the stunning sunsets and crystal-clear waters of Santorini with a fully guided luxury tour.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    name: "Safari Adventure",
    location: "Kenya",
    description: "Embark on an unforgettable safari in the Maasai Mara, witnessing the majestic wildlife up close.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    name: "Tokyo City Lights",
    location: "Japan",
    description: "Discover the vibrant culture, cuisine, and nightlife of Tokyo on a personalized guided tour.",
    image: "https://images.unsplash.com/photo-1567944329352-f3d5a4e9f9b7?auto=format&fit=crop&w=1470&q=80",
  },
];

const Tours = () => {
  return (
    <section id="tours" className="tours">
      <h2>Featured Tours</h2>
      <div className="tours-container">
        {tours.map((tour) => (
          <div key={tour.id} className="tour-card">
            <img src={tour.image} alt={tour.name} />
            <div className="tour-content">
              <h3>{tour.name}</h3>
              <p className="location"><FaMapMarkerAlt /> {tour.location}</p>
              <p>{tour.description}</p>
              <button className="tour-button">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tours;
