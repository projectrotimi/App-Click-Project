import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Tours from "./Components/Tours";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Terms from "./Components/Terms";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Tours />
      <Contact />
      <Terms />
      <Footer />
    </div>
  );
}

export default App;


