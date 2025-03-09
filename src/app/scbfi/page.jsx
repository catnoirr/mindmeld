import React from 'react';

export default function BackwardForwardLinkages() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-800 mb-4">
            Scheme for Creation of Backward and Forward Linkages
          </h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        {/* Scheme Overview Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Scheme Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-gray-600 font-medium w-48">Sponsoring Authority:</span>
                <span className="text-gray-800">MoFPI (Ministry of Food Processing Industries)</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-600 font-medium w-48">Last date to apply:</span>
                <span className="text-gray-800">28.02.2021 by 5:00PM (ST/NER Categories)</span>
              </div>
            </div>
          </div>

          {/* Objective Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Objective</h3>
            <p className="text-gray-600">
              The objective of the scheme is to provide effective and seamless backward and forward integration for processed food industry by plugging the gaps in supply chain in terms of availability of raw material and linkages with the market. The scheme will enable linking of farmers to processors and the market thereby ensuring remunerative prices for their produce.
            </p>
          </div>

          {/* Pattern of Assistance */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Pattern of Assistance</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>35% of Eligible Project Cost in General Areas</li>
              <li>50% of Eligible Project Cost in difficult areas (SC/ST will be considered as difficult areas)</li>
              <li>Max Cap - 5 Cr</li>
              <li>Credit Linked not back ended</li>
              <li>Three Installments - 25%, 40% and 35%</li>
              <li>Eligible Project Cost - Cost of Plant & Machinery + Technical Civil Work</li>
            </ul>
          </div>

          {/* Who are eligible */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Who are eligible</h3>
            <p className="text-gray-600">
              The applicants organizations such as Central and state PSUs, Joint Ventures, Farmer Producer Organization (FPOs)/NGOs/ Cooperatives / SHGs/ Public and Private companies/ Limited Liability Partnerships, Corporate Entity/ Proprietorship Firms / Partnership Firms, etc.
            </p>
          </div>

          {/* Release of Subsidy */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Release of Subsidy</h3>
            <div className="space-y-4 text-gray-600">
              <div>
                <p className="font-medium">1st Instalment (25%)</p>
                <p className="pl-4">After utilization of 25% of Promoter contribution and 25% of TL towards Eligible Project Cost, after site inspection within 8 months from date of approval letter (within 10 months for Difficult)</p>
              </div>
              <div>
                <p className="font-medium">2nd Instalment (40%)</p>
                <p className="pl-4">After utilization of 1st Instl., 65% of Promoter contribution and 65% of TL towards Eligible Project Cost, after Site inspection within 14 months from date of approved letter (within 16 months for Difficult)</p>
              </div>
              <div>
                <p className="font-medium">3rd & Final Instalment (35%)</p>
                <p className="pl-4">After utilization of 2nd Instl. 100% of Promoter contribution, 100% TL, Completion of project, Stats Commercial Operations and after joint inspection, within 18 months from date of issue of approval letter (within 10 months for Difficult)</p>
              </div>
            </div>
          </div>

          {/* Eligible sectors */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Eligible sectors</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Horticulture</li>
              <li>Milk & Milk products</li>
              <li>Meat, Poultry, Fishery, Marine, Piggery</li>
              <li>Ready to Eat/ Ready to Food Products</li>
              <li>Honey, Coconut, Spices, Mushroom</li>
              <li>Retail Shops for Perishable Food Products</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 