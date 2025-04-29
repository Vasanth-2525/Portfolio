import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/about.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import Review from "./Pages/Review.jsx";
import Services from "./Pages/Services.jsx";
import Contact from "./Pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolledPastHome, setIsScrolledPastHome] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsVisible(scrollPosition > 300);

      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeSectionBottom =
          homeSection.offsetTop + homeSection.offsetHeight;
        setIsScrolledPastHome(scrollPosition > homeSectionBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Scroll to top button with better positioning and animation */}
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        offset={-80} // Adjust if you have a fixed header
        className={`fixed z-50 right-6 bottom-6 p-3 border-2 rounded-full transition-all duration-300 ease-in-out transform ${
          isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } ${
          isScrolledPastHome
            ? "bg-[#fdc448] text-gray-900 border-[#fdc448] hover:bg-[#e6b340]"
            : "text-[#fdc448] bg-transparent border-[#fdc448] hover:bg-[#fdc448]/10"
        } shadow-lg hover:shadow-xl`}
      >
        <FaArrowUp className="text-xl sm:text-2xl" />
      </Link>

      <div>
        <Navbar />
      </div>

      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>

      <div id="review">
        <Review />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
