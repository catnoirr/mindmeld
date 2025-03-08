import React from 'react';

const schemes = [
  {
    id: 1,
    title: 'MINISTRY OF FOOD PROCESSING INDUSTRY (MOFPI)'
  },
  {
    id: 2,
    title: 'AGRICULTURAL AND PROCESSED FOOD PRODUCTS EXPORT DEVELOPMENT AUTHORITY (APEDA)'
  },
  {
    id: 3,
    title: 'NATIONAL BANK FOR AGRICULTURE AND RURAL DEVELOPMENT (NABARD)'
  },
  {
    id: 4,
    title: 'NATIONAL LIVESTOCK MISSION (NLM)'
  },
  {
    id: 5,
    title: 'NATIONAL HORTICULTURE BOARD (NHB)'
  },
  {
    id: 6,
    title: 'NATIONAL HORTICULTURE MISSION (NHM)'
  },
  {
    id: 7,
    title: 'NATIONAL SEEDS CORPORATION LIMITED (NSCL)'
  },
  {
    id: 8,
    title: "SMALL FARMER'S AGRI-BUSINESS CONSORTIUM (SFAC)"
  },
  {
    id: 9,
    title: 'MINISTRY OF TEXTILES'
  },
  {
    id: 10,
    title: 'MICRO SMALL MEDIUM ENTREPRENEUR (MSME)'
  },
  {
    id: 11,
    title: 'NATIONAL FISHERIES DEVELOPMENT BOARD (NFDB)'
  },
  {
    id: 12,
    title: 'MINISTRY OF NEW AND RENEWABLE ENERGY'
  }
];

export default function CentralSubsidies() {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-navy-blue">
          Central Government Schemes
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore various central government schemes and policies for industrial development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((scheme) => (
            <a
              key={scheme.id}
              href="#"
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl p-6 transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-navy-blue/5 to-navy-blue/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Scheme number badge */}
              {/* <div className="absolute -top-3 -right-3 w-8 h-8 bg-navy-blue rounded-full flex items-center justify-center text-white font-semibold text-sm">
                {scheme.id}
              </div> */}

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
    </div>
  );
}
