import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import client1 from "../assets/image/rev1.png";
import client2 from "../assets/image/client-img-1.jpg";

const Client = () => {
  const reviews = [
    {
      id: 1,
      image: client1,
      name: "Theresa Webb",
      role: "UI/UX Designer",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aperiam, non magni ut numquam accusamus culpa cum odio doloremque laboriosam?",
    },
    {
      id: 2,
      image: client2,
      name: "John Doe",
      role: "Frontend Developer",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aperiam, non magni ut numquam accusamus culpa cum odio doloremque laboriosam?",
    },
    {
      id: 3,
      image: client1,
      name: "Jane Smith",
      role: "Product Manager",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aperiam, non magni ut numquam accusamus culpa cum odio doloremque laboriosam?",
    },
    {
      id: 4,
      image: client2,
      name: "Michael Johnson",
      role: "Backend Developer",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aperiam, non magni ut numquam accusamus culpa cum odio doloremque laboriosam?",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // This hides the navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-[8%] my-20">
      <div className="text-center mb-12">
        <h5 className="text-lg font-medium text-[#fdc448] mb-2">
          What our clients say
        </h5>
        <h2 className="text-4xl font-bold mb-4">
          Bringing dreams to life through design
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum earum,
          eligendi minima assumenda accusantium quod ea aliquam fugiat labore
          soluta.
        </p>
      </div>

      <div className="slider-container w-full h-full px-4">
        <Slider {...settings}>
          {reviews?.map((client, index) => (
            <div key={index} className="px-2">
              {" "}
              <div className="flex flex-col p-6 gap-5 bg-[#322711ab] border-2 border-gray-600 transition-all duration-150 hover:border-[#fdc448] rounded-lg h-full">
                <div className="flex items-center gap-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={client?.image}
                    alt={client?.name}
                  />
                  <div>
                    <h4 className="text-xl text-[#fdc448]  font-medium">
                      {client?.name}
                    </h4>
                    <h3 className=" text-white text-sm">{client?.role}</h3>
                  </div>
                </div>
                <p className="text-gray-500">{client?.comment}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Client;
