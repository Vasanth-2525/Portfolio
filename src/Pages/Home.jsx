import React from "react";
import "./orbit.css";
import { FaArrowRight } from "react-icons/fa";
import heroImg from "../assets/image/hero-img.jpeg";

function Home() {
  return (
    <div
      className="bg-no-repeat bg-left-top bg-cover"
      style={{
        backgroundImage: "url('/src/assets/image/bg-six-shape-left-side.png')",
      }}
    >
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between mx-4 md:mx-[8%] pt-20 pb-12 gap-10 relative z-10">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <small className="text-[#fdc448] text-base md:text-lg">Web Developer</small>
          <h2 className="my-6 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
            Vasanth <br />
            <span className="block mt-1 text-[#fdc448]">Logan</span>
          </h2>
          <p className="mb-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            laboriosam alias iure? Molestias eius voluptate fugit, corrupti odit
            ipsum neque?
          </p>
          <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#fdc448] bg-[#fdc448] text-black font-semibold rounded-md shadow hover:bg-black hover:text-[#fdc448] hover:border-[#fdc448] transition-all duration-300 mx-auto lg:mx-0">
            View Portfolio <FaArrowRight />
          </button>
        </div>

        {/* Orbiting Image Section */}
        <div className="relative w-[250px] sm:w-[320px] md:w-[400px] h-[250px] sm:h-[320px] md:h-[400px] flex items-center justify-center mx-auto">
          {/* Orbiting Balls */}
          <div className="absolute w-full h-full border-2 border-[#fdc448] rounded-full animate-orbit z-0">
            <span className="absolute top-[-20px] left-1/2 -translate-x-1/2 h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] bg-[#fdc448] rounded-full"></span>
            <span className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] bg-[#fdc448] rounded-full"></span>
          </div>

          {/* Profile Image */}
          <div className="relative z-10 w-[180px] sm:w-[250px] md:w-[300px] h-[180px] sm:h-[250px] md:h-[300px] border-4 border-[#fdc448] rounded-full overflow-hidden">
            <img
              src={heroImg}
              alt="hero_image"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
