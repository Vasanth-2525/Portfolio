import { CiLock } from "react-icons/ci";
import { FaBusinessTime } from "react-icons/fa";
import { LuTrophy } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <div className="pt-10 bg-[#1e1e1e]">
      {/* About Introduction */}
      <div className="mx-[8%] mb-10 px-4 text-gray-200">
        <p className="text-[24px] md:text-[28px] text-justify leading-9">
          A personal{" "}
          <span className="text-[#fdc448] font-semibold">Portfolio</span> is a
          reflection of your work. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nisi, quia alias. Beatae fugiat nemo accusamus.
          Since <span className="text-[#fdc448] font-semibold">2008</span>,
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos culpa
          magni magnam excepturi tenetur! Veniam.
        </p>
      </div>

      {/* Main Section */}
      <div className="mx-[4%] text-white px-6 lg:px-24 py-16 flex flex-col lg:flex-row gap-10">
        {/* Left Column */}
        <div className="flex flex-col items-center gap-6">
          {/* Experience Circle */}
          <div className="relative w-64 h-64 flex flex-col items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 bg-transparent blur-sm brightness-90 rounded-xl" />
            <span className="absolute bottom-[-60px] w-60 h-60 bg-[#fdc448] rounded-full z-10"></span>
            <div className="relative z-10 text-4xl font-bold text-white">
              10+
              <p className="text-base font-medium mt-2">Years of Experience</p>
            </div>
          </div>

          {/* Service Info */}
          <div className="w-64 p-4 rounded-xl flex flex-col items-start">
            <p className="flex items-center gap-2 text-base font-medium">
              <CiLock size={20} /> UI / UX Designs
            </p>
            <span className="text-sm text-gray-400 mt-1">263+ Projects</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <p className="text-[#fdc448] font-semibold uppercase text-sm mb-2">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-8 capitalize">
            Boost Business Strategic <br className="hidden sm:block" />
            Solutions with Us
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* Card 1 */}
            <div className="border border-[#fdc448] p-6 rounded-xl hover:bg-[#2a2a2a] transition-all duration-300">
              <h3 className="flex items-center gap-3 text-xl font-semibold mb-2">
                <FaBusinessTime className="text-[#fdc448]" /> Business
                Solutions
              </h3>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                expedita nemo possimus voluptatibus voluptatum dolorem
                reiciendis eveniet sint eos unde?
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-[#fdc448] p-6 rounded-xl hover:bg-[#2a2a2a] transition-all duration-300">
              <h3 className="flex items-center gap-3 text-xl font-semibold mb-2">
                <LuTrophy className="text-[#fdc448]" /> Profit Partners
              </h3>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                expedita nemo possimus voluptatibus voluptatum dolorem
                reiciendis eveniet sint eos unde?
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="bg-[#fdc448] text-black px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-transparent hover:text-[#fdc448] hover:border-[#fdc448] border-2 border-transparent transition-all duration-300">
            Read More <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
