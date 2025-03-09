import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const certificationLevels = [
  {
    level: 'Bronze',
    image: '/bronze.png',
    description: 'The Bronze certification represents the foundational level focusing on basic quality and environmental standards.'
  },
  {
    level: 'Silver',
    image: '/silver.png',
    description: 'The Silver Certification builds upon the bronze level requiring more stringent adherence to quality control and sustainable practices.'
  },
  {
    level: 'Gold',
    image: '/gold.png',
    description: 'The Gold certification is the highest tier, demanding comprehensive excellence in quality management and sustainability positioning MSMEs at per with global leaders.'
  }
];

const Levels = () => {
  return (
    <div className="py-16 md:pt-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          ZED MSME Certification Levels
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          The ZED MSME Certification is designed to guide businesses through a progressive journey toward achieving
          excellence in quality and sustainability. It is structured into three tiers, each representing a step toward higher
          standards of manufacturing and environmental responsibility.
        </p>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {certificationLevels.map((cert, index) => (
            <div
              key={cert.level}
              className="flex flex-col items-center p-6 pt-20 bg-white rounded-2xl shadow-lg drop-shadow-md relative mt-16"
            >
              <div className="w-32 h-32 absolute -top-20 left-1/2 transform -translate-x-1/2 hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 -z-10" />
                <Image
                  src={cert.image}
                  alt={`${cert.level} Certification`}
                  width={128}
                  height={128}
                  className="object-contain relative z-10 drop-shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                {cert.level} Certification
              </h3>
              <p className="text-gray-600 text-center">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex flex-col items-center mt-20 ">
            <Link href="/zed-certification/financial" className="flex items-center justify-center px-6 py-3 rounded-full cursor-pointer mb-3 bg-gradient-to-r from-[#1B3B5C] to-[#0A2942] text-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 gap-2">
              Know More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          <div className="w-8 h-12 border-2 border-gray-700 rounded-full relative">
            <div className="w-2 h-2 bg-gray-700 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-bounce" />
          </div>
          <div className="h-4 w-0.5 bg-gray-700 mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Levels;
