import React from 'react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const Tagline = () => {
  return (
    <div className="w-full text-center py-10 md:py-20">
      <div className="relative inline-block max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
        <ImQuotesLeft className="absolute -left-4 sm:-left-6 md:-left-10 top-0 text-xl sm:text-2xl md:text-3xl text-primary opacity-80" />
        <h2 className="text-2xl sm:text-2xl md:text-4xl font-semibold text-primary px-6 sm:px-8 md:px-12">
          Empowering Your Business Journey <br className="hidden sm:block" /> 
          <span className="sm:hidden"> </span>
          From Start to <span className="text-blue-600">Success</span>
        </h2>
        <ImQuotesRight className="absolute -right-4 sm:-right-6 md:-right-10 bottom-0 text-xl sm:text-2xl md:text-3xl text-primary opacity-80" />
      </div>
    </div>
  );
};

export default Tagline;
