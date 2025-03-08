"use client"
import React, { useState } from 'react';

const StateGovSchemes = () => {
  const [activeState, setActiveState] = useState('Andhra Pradesh');

  const states = [
    {
      name: 'Andhra Pradesh',
      schemes: [
        { title: 'INDUSTRIAL POLICY SCHEMES', link: '#' },
        { title: 'ANDHRA PRADESH TEXTILE SCHEME', link: '#' },
        { title: 'ANDHRA PRADESH FOOD PROCESSING SOCIETY (APFPS)', link: '#' },
        { title: 'ANDHRA PRADESH ELECTRONIC POLICY', link: '#' },
      ],
    },
    {
      name: 'Telangana',
      schemes: [
        { title: 'INDUSTRIAL POLICY SCHEMES', link: '#' },
        { title: 'TELANGANA TEXTILE SCHEME', link: '#' },
        { title: 'TELANGANA FOOD PROCESSING SOCIETY (TSFPS)', link: '#' },
      ],
    },
    {
      name: 'Maharastra',
      schemes: [
        { title: 'INDUSTRIAL POLICY SCHEMES', link: '#' },
        { title: 'TEXTILE POLICY SCHEME', link: '#' },
      ],
    },
    {
      name: 'Madhya Pradesh',
      schemes: [
        { title: 'INDUSTRIAL POLICY SCHEMES', link: '#' },
        { title: 'MADHYA PRADESH HORTICULTURE (SMFP)', link: '#' },
      ],
    },
    {
      name: 'Karnataka',
      schemes: [
        { title: 'INDUSTRIAL POLICY SCHEMES', link: '#' },
        { title: 'FOOD PROCESSING POLICY', link: '#' },
        { title: 'TEXTILE POLICY SCHEME', link: '#' },
      ],
    },
    {
      name: 'Chhattisgarh',
      schemes: [
        { title: 'INDUSTRIAL POLICY SCHEMES', link: '#' },
        { title: 'FOOD PROCESSING POLICY', link: '#' },
        { title: 'TEXTILE POLICY SCHEME', link: '#' },
      ],
    },
    {
      name: 'Orissa',
      schemes: [
        { title: 'INDUSTRIAL POLICY SCHEMES', link: '#' },
        { title: 'FOOD PROCESSING POLICY', link: '#' },
        { title: 'TEXTILE POLICY SCHEME', link: '#' },
      ],
    },
  ];

  return (
    <div className="  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-navy-blue">
          State Government Schemes
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore various government schemes and policies across different states of India
        </p>

        {/* State Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {states.map((state) => (
            <button
              key={state.name}
              onClick={() => setActiveState(state.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
                ${activeState === state.name
                ? 'bg-navy-blue text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-105'
              }`}
            >
              {state.name}
            </button>
          ))}
        </div>

        {/* Schemes Display */}
        <div className="mt-8">
          {states.map((state) => (
            state.name === activeState && (
              <div key={state.name} className="animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {state.schemes.map((scheme, index) => (
                    <a
                      key={scheme.title}
                      href={scheme.link}
                      className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl p-6 transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-navy-blue/5 to-navy-blue/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <h3 className="text-lg font-semibold text-navy-blue mb-2">
                        {scheme.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Click to explore details and benefits
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
                    </a>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default StateGovSchemes;
