import gallery1 from "../assets/image/gallery-image-01.jpg";
import gallery2 from "../assets/image/gallery-image-02.jpg";
import gallery3 from "../assets/image/gallery-image-03.jpg";
import gallery4 from "../assets/image/gallery-image-04.jpg";
import { FaArrowRight } from "react-icons/fa";

function Portfolio() {
  const projects = [
    {
      id: 1,
      image: gallery1,
      title: "Saas Website Design",
      tags: ["Figma", "Saas"],
    },
    {
      id: 2,
      image: gallery2,
      title: "Workout App Design",
      tags: ["Figma", "Saas"],
    },
    {
      id: 3,
      image: gallery3,
      title: "eCommerce Design",
      tags: ["Figma", "Saas"],
    },
    {
      id: 4,
      image: gallery4,
      title: "Dashboard Design",
      tags: ["Figma", "Saas"],
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12 md:mb-20 text-center">
        <h5 className="text-lg font-medium text-[#fdc448] mb-2 sm:mb-5">
          Recent Portfolio
        </h5>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Transforming Ideas into Exceptional
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative p-10 bg-[#1d1b18ab] overflow-hidden rounded-lg border-2 border-gray-600 hover:border-[#fdc448] transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#fdc448] mb-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs sm:text-sm text-white border border-gray-600 px-3 py-1 rounded-3xl hover:bg-[#fdc448] hover:text-gray-900 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="w-full float-right mt-[-50px] sm:w-auto mt-[0px] flex items-center justify-center sm:justify-start px-4 py-2 sm:px-5 sm:py-2 rounded-3xl border-2 border-gray-600 text-white hover:text-[#fdc448] hover:border-[#fdc448] transition-colors duration-200 group-hover:bg-[#322711ab]">
                View Design <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
