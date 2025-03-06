'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 ${
      direction === 'prev' ? 'left-0' : 'right-0'
    } z-10 w-12 h-12 hidden md:flex items-center justify-center bg-transparent hover:scale-110 transition-transform duration-200`}
  >
    {direction === 'prev' ? (

<div className="flex  items-center gap-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-[#0066cc]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
      <div className="w-[1px] h-8 bg-[#0066cc]"></div>
</div>
     
    ) : (
        <div className="flex  items-center gap-2">
 <div className="w-[1px] h-8 bg-[#0066cc]"></div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-[#0066cc]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
        </div>
       
    )}

    
  </button>
);

const quotes = [
  {
    text: "Empowering businesses with strategy, insight, and innovation.",
    author: <span className="font-bold"><span className="text-[#003366]">Mind</span><span className="text-[#0066cc]">Meld</span></span>
  },
  {
    text: "Transform your vision into reality with data-driven solutions.",
    author: <span className="font-bold"><span className="text-[#003366]">Mind</span><span className="text-[#0066cc]">Meld</span></span>
  },
  {
    text: "Building tomorrow's success through today's intelligence.",
    author: <span className="font-bold"><span className="text-[#003366]">Mind</span><span className="text-[#0066cc]">Meld</span></span>
  },
  {
    text: "Where strategy meets innovation, excellence follows.",
    author: <span className="font-bold"><span className="text-[#003366]">Mind</span><span className="text-[#0066cc]">Meld</span></span>
  }
];

const Quote = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)"
  };

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24">
        <Slider {...settings}>
          {quotes.map((quote, index) => (
            <div key={index} className="outline-none">
              <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-4 sm:mb-6 md:mb-8 text-[#0066cc]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <h3 className="text-2xl sm:text-2xl md:text-4xl font-semibold text-gray-800 mb-4 sm:mb-6 md:mb-8 max-w-3xl leading-relaxed">
                  {quote.text}
                </h3>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="h-px w-6 sm:w-8 bg-[#0066cc]"></div>
                  <p className="text-lg sm:text-xl">{quote.author}</p>
                  <div className="h-px w-6 sm:w-8 bg-[#0066cc]"></div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Quote;
