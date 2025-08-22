import React from "react";
import "./Tours.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const tours = [
  {
    id: 1,
    name: "Santorini Luxury Escape",
    location: "Greece",
    description: "Experience the stunning sunsets and crystal-clear waters of Santorini with a fully guided luxury tour.",
    image: "https://media.istockphoto.com/id/2150678874/photo/young-woman-boarding-an-airplane.webp?a=1&b=1&s=612x612&w=0&k=20&c=nt-L6jsYIFNFiIwi3fXjVwuIrAC6xn2-jaWjvKrIL4A=",
  },
  {
    id: 2,
    name: "Safari Adventure",
    location: "Kenya",
    description: "Embark on an unforgettable safari in the Maasai Mara, witnessing the majestic wildlife up close.",
    image: "https://media.istockphoto.com/id/1497396873/photo/ready-for-starting-my-beach-holiday.webp?a=1&b=1&s=612x612&w=0&k=20&c=vtjaSTRVo2yAtXMgfZMfoCHgGhEDj5ghMfFLCjNydfY=",
  },
  {
    id: 3,
    name: "Tokyo City Lights",
    location: "Japan",
    description: "Discover the vibrant culture, cuisine, and nightlife of Tokyo on a personalized guided tour.",
    image: "https://media.istockphoto.com/id/2165496803/photo/smiling-young-woman-taking-photos-while-relaxing-on-a-sandy-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=ykwJU-Ec8DHHbtO94T_WXhOvwBh2GWbcpl95XRv04eo=",
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
