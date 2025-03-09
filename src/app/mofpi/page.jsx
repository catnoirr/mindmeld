'use client'
import React from 'react';
import Link from 'next/link';

const MofpiPage = () => {
  const schemes = [
    {
      title: 'MEGA FOOD PARK',
      description: 'Explore mega food park initiatives and opportunities',
      link: '/mega-food-park',    
    },
    {
      title: 'INTEGRATED COLD CHAIN',
      description: 'Learn about cold chain infrastructure and support',
      link: '/integrated-cold-chain',
    },
    {
      title: 'CREATION/EXPANSION OF FOOD PROCESSING & PRESERVATION CAPACITIES(CEFPPC)',
      description: 'Discover opportunities for food processing capacity enhancement',
      link: '/creation-expansion-of-food-processing-preservation-capacity-scheme',
    },
    {
      title: 'AGRO PROCESSING CLUSTER',
      description: 'Find information about agro-processing clusters',
      link: '/mofpi/agro-processing-cluster',
    },
    {
      title: 'SCHEME FOR CREATION OF BACKWARD AND FORWARD LINKAGES',
      description: 'Explore supply chain integration schemes',
      link: '/scbfi',
    },
    {
      title: 'SETTING-UP/UP-GRADATION OF FOOD TESTING LABORATORIES',
      description: 'Learn about food testing facility development',
      link: '/mofpi/setting-up-up-gradation-of-food-testing-laboratories',
    },
    {
      title: 'HUMAN RESOURCES AND INSTITUTION',
      description: 'Discover HR development and institutional support',
      link: '/mofpi/human-resources-and-institution',
    },
    {
      title: 'OPERATION GREENS',
      description: 'Explore initiatives for agricultural value chain',
      link: '/mofpi/operation-greens',
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-navy-blue">
          Ministry of Food Processing Industry (MoFPI)
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore various schemes and initiatives by the Ministry of Food Processing Industry to promote and develop India's food processing sector
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((scheme, index) => (
            <Link href={scheme.link} key={index} className="block">
              <div
                className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl p-6 transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 animate-fadeIn h-full cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-navy-blue/5 to-navy-blue/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-lg font-semibold text-navy-blue mb-2">
                  {scheme.title}
                </h3>
                <p className="text-sm text-gray-500 mb-8">
                  {scheme.description}
                </p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5 text-navy-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MofpiPage;
