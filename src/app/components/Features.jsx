'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Features = () => {
  const features = [
    {
      title: "Business expertise in strategy coordination",
      date: "6 . OCT",
      image: "/graph.jpg",
      alt: "Business strategy graph",
      bgColor: "bg-[#F8FAFC]"
    },
    {
      title: "Business Management for all future projects",
      date: "8 . OCT",
      image: "/team.jpg",
      alt: "Business management",
      bgColor: "bg-[#F5F3FF]"
    },
    {
      title: "Digital Innovation & Technology Solutions",
      date: "10 . OCT",
      image: "/digital.jpg",
      alt: "Digital innovation",
      bgColor: "bg-[#FDF2F8]"
    },
  
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Main Card */}
      <div className="relative">
        {/* Header */}
        <h2 className="text-4xl lg:text-54xl lg:max-w-3xl font-medium text-gray-900 mb-8 leading-tight">
          Everything about the business  world in one place
        </h2>

        {/* Feature Cards Container */}
        <div className="slider-container">
          <Slider {...settings}>
            {features.map((feature, index) => (
              <div key={index} className="p-3">
                <div className={`flex flex-col ${feature.bgColor}  shadow-sm hover:shadow-md transition-shadow duration-300 h-full`}>
                  <div className="flex flex-col md:flex-row gap-8 h-full">
                    {/* Image - Moved to top for mobile */}
                    <div className="w-full md:w-[45%] order-1 md:order-2">
                      <div className="relative w-full h-[250px] md:h-[350px]">
                        <Image
                          src={feature.image}
                          alt={feature.alt}
                          fill
                          className="object-cover "
                        />
                      </div>
                    </div>
                    
                    {/* Content - Below image on mobile */}
                    <div className="flex-1 flex flex-col justify-between order-2 md:order-1 p-6 py-8 space-y-6">
                      <h3 className="text-2xl md:text-[30px] leading-tight  text-[#1a237e]">
                        {feature.title}
                      </h3>
                      <div className="mt-4 md:mt-auto">
                        {/* <p className="text-gray-500 mb-2">{feature.date}</p> */}
                        <button className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors inline-flex items-center">
                          READ MORE 
                          <span className="ml-2">|&gt;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Features;
