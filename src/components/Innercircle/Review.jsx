import React from "react";
import Slider from "react-slick";

const Review = () => {
  const testimonials = [
    { name: "Rajul Dev", text: "This is the best team I've ever worked with. As they go about their duties, they do it with an air ofauthority and knowledge. It's amazing how much attention to detail and care they put into their work.Any time in the future, they'd have my enthusiastic endorsement. I am the proud owner of a beautiful plot of property." },
    { name: "Indrojit Das", text: "They made the process so hassle free for us. They are a bunch of really helpful and polite people. I will strongly recommend taking their services if you are looking to rent or buy a property." },
    { name: "Rekha Motwani", text: "They take the time to understand your unique situation and work tirelessly to find you the perfect property." },
    { name: "Rekha Motwani", text: "I strongly urge that you visit This agency for a stress-free experience. They perform all of the hard lifting. The best group to work with to locate a high-quality home. Highly recommended." },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,

    // RESPONSIVE BREAKPOINTS
    responsive: [
      {
        breakpoint: 1024, // laptop/tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
           <div className="text-center mb-12">
          <h1 className="text-[36px] dm-serif-italic">Investor’s Voice</h1>
          <p className="text-gray-600">See what our clients feel about us!</p>
        </div>
        {/* background: #FFFCF6; */}

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-3">
            <div className="bg-[#FFFCF6] shadow-lg p-6 rounded-xl text-center h-full">


              <p className=" text-left inter-tight text-[14px] text-[#6E6E6E]">"{item.text}"</p>
              <h3 className="text-left inter-tight text-[16px] text-[#00000] mt-4  font-semibold ">
                — {item.name}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
