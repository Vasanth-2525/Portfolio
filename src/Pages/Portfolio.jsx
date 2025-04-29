import img1 from "E:/Portfolio/Portfolio/Porfolio_App/src/assets/image/tab-image-1.png";
import img2 from "E:/Portfolio/Portfolio/Porfolio_App/src/assets/image/tab-image-2.png";
import img3 from "E:/Portfolio/Portfolio/Porfolio_App/src/assets/image/tab-image-3.png";
import img4 from "E:/Portfolio/Portfolio/Porfolio_App/src/assets/image/tab-image-4.png";
import img5 from "E:/Portfolio/Portfolio/Porfolio_App/src/assets/image/tab-image-5.png";
import img6 from "E:/Portfolio/Portfolio/Porfolio_App/src/assets/image/tab-image-6.png";
import { FaGuilded } from "react-icons/fa";
import { TbBrandCodesandbox } from "react-icons/tb";
import { MdAutoAwesomeMotion } from "react-icons/md";

const portfolioData = [
  { img: img1, title: "Development", subtitle: "A portfolio of innovation" },
  { img: img2, title: "Design", subtitle: "Creative and modern design" },
  { img: img3, title: "Branding", subtitle: "Building brands" },
  { img: img4, title: "Marketing", subtitle: "Smart strategies" },
  { img: img5, title: "Photography", subtitle: "Capturing moments" },
  { img: img6, title: "Animation", subtitle: "Bringing ideas to life" },
];

function Portfolio() {
  return (
    <div className="mx-4 md:mx-[8%] leading-8 text-white">
      {/* Portfolio Section */}
      <h5 className="text-center capitalize mt-10 text-[#fdc448] text-lg md:text-xl">
        Latest Portfolio
      </h5>
      <h2 className="text-center capitalize mt-5 text-2xl md:text-4xl font-bold">
        Transforming Ideas into Exceptional
      </h2>
      <p className="text-center my-5 text-sm md:text-base text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae neque,
        quam quasi eligendi expedita illo possimus atque perspiciatis nobis
        aspernatur.
      </p>

      {/* Portfolio Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 mb-20">
        {portfolioData.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden group rounded-xl"
          >
            <img
              className="rounded-xl w-full h-full object-cover"
              src={item.img}
              alt={`portfolio-${index}`}
            />
            <div className="absolute w-full h-full top-[-100%] left-0 rounded-xl bg-gradient-to-b from-[#fdc448] to-[#1111] flex flex-col justify-end transition-all duration-700 group-hover:top-0 p-4">
              <h5 className="text-md md:text-lg font-semibold text-white mb-2">
                {item.title}
              </h5>
              <h3 className="text-lg md:text-2xl font-bold text-[#fdc448]">
                {item.subtitle}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Expertise Section */}
      <div className="mt-16">
        <h5 className="text-[#fdc448] text-center text-lg mb-3 capitalize">
          My Expertise
        </h5>
        <h3 className="text-center text-2xl md:text-4xl font-bold mb-10">
          Elevated Designs, Personalized Best Experiences
        </h3>

        <div className="space-y-6">
          {/* Expertise Card 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-3xl bg-[#322711ab] border-2 border-gray-600 transition-all duration-150 hover:border-[#fdc448]">
            <div className="flex items-center gap-4 w-full md:w-1/3">
              <FaGuilded className="text-4xl p-2 border-2 border-[#fdc448] bg-[#553e10ab] rounded-full text-[#fdc448]" />
              <p className="font-semibold text-lg">UI / Visual Design</p>
            </div>
            <div className="w-full md:w-1/6 flex justify-center">
              <div className="px-2 py-2 border-2 border-[#fdc448] bg-[#553e10ab] rounded-full text-[#fdc448]">
                50%
              </div>
            </div>
            <div className="w-full md:w-1/2 text-gray-700 text-sm md:text-base text-center md:text-left transition-all duration-300 hover:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae id
              veritatis fugit eos eum officia, nisi soluta blanditiis sequi
              nesciunt!
            </div>
          </div>

          {/* Expertise Card 2 */}
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-3xl bg-[#322711ab] border-2 border-gray-600 transition-all duration-150 hover:border-[#fdc448]">
            <div className="flex items-center gap-4 w-full md:w-1/3">
              <TbBrandCodesandbox className="text-4xl p-2 border-2 border-[#fdc448] bg-[#553e10ab] rounded-full text-[#fdc448]" />
              <p className="font-semibold text-lg">Product Development</p>
            </div>
            <div className="w-full md:w-1/6 flex justify-center">
              <div className="px-2 py-2 border-2 border-[#fdc448] bg-[#553e10ab] rounded-full text-[#fdc448]">
                60%
              </div>
            </div>
            <div className="w-full md:w-1/2 text-gray-700 text-sm md:text-base text-center md:text-left transition-all duration-300 hover:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae id
              veritatis fugit eos eum officia, nisi soluta blanditiis sequi
              nesciunt!
            </div>
          </div>

          {/* Expertise Card 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-3xl bg-[#322711ab] border-2 border-gray-600 transition-all duration-150 hover:border-[#fdc448]">
            <div className="flex items-center gap-4 w-full md:w-1/3">
              <MdAutoAwesomeMotion className="text-4xl p-2 border-2 border-[#fdc448] bg-[#553e10ab] rounded-full text-[#fdc448]" />
              <p className="font-semibold text-lg">Motion & Animation</p>
            </div>
            <div className="w-full md:w-1/6 flex justify-center">
              <div className="px-2 py-2 border-2 border-[#fdc448] bg-[#553e10ab] rounded-full text-[#fdc448]">
                90%
              </div>
            </div>
            <div className="w-full md:w-1/2 text-gray-700 text-sm md:text-base text-center md:text-left transition-all duration-300 hover:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae id
              veritatis fugit eos eum officia, nisi soluta blanditiis sequi
              nesciunt!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
