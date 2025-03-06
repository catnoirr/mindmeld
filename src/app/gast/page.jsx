import React from 'react';

const GSTServices = [
  {
    title: "GST Registration Services",
    description: "Assisting with smooth and timely GST registration for businesses.",
    icon: "📋"
  },
  {
    title: "GST Return Filing",
    description: "We handle the filing of GST returns, including GSTR-1, GSTR-3B, GSTR-9, and GSTR-9C, ensuring accurate and timely submission.",
    icon: "📝"
  },
  {
    title: "GST Refunds",
    description: "We assist in claiming and processing GST refunds for eligible businesses.",
    icon: "💰"
  },
  {
    title: "GST Litigation and Appeals",
    description: "Providing expert support in GST-related legal matters, including litigation and appeals.",
    icon: "⚖️"
  },
  {
    title: "Surrendering of GST Registration",
    description: "We manage the process of surrendering GST registration when required.",
    icon: "🔄"
  },
  {
    title: "GST Audits",
    description: "Conducting thorough audits to ensure that your GST filings are accurate and compliant.",
    icon: "🔍"
  }
];

const GSTCompliancesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">GST Compliances</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GSTServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GSTCompliancesPage;
