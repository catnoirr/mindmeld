import React from 'react';

const MegaFoodPark = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-800 mb-4">Mega Food Park</h1>
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
                <span className="text-gray-600 font-medium w-48">Effective Date:</span>
                <span className="text-gray-800">21.07.2016</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-600 font-medium w-48">Last date to apply:</span>
                <span className="text-gray-800">31.05.2020</span>
              </div>
            </div>
          </div>

          {/* Objectives Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Objectives</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>To provide modern infrastructure facilities for food processing along the value chain from the farm to the market.</li>
              <li>It will include creation of processing infrastructure near the farm, transportation, logistics and centralized processing centres.</li>
              <li>The main feature of the Scheme is a cluster-based approach.</li>
              <li>The scheme will be demand-driven and will facilitate food processing units to meet environmental and safety standards.</li>
              <li>The expected outcome is increased realization for farmers, creation of high-quality processing infrastructure, reduction in wastage, capacity building of producers, processors and creation of an efficient supply chain along with significant direct and indirect employment generation.</li>
            </ul>
          </div>

          {/* Core Processing Facilities */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Processing Facilities</h3>
            <p className="mb-4 text-gray-700">The scheme aims to facilitate the establishment of a strong food processing industry backed by an efficient supply chain, which includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Collection Centres (CCs)</li>
              <li>Primary Processing Centres (PPCs)</li>
              <li>Central Processing Centre (CPC) and Cold Chain Infrastructure</li>
            </ul>
          </div>

          {/* Non-Core Infrastructure */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Non-Core Infrastructure</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Administrative buildings</li>
              <li>Training centre including equipment</li>
              <li>Trade and display centre</li>
              <li>Crèche, Canteen</li>
              <li>Worker's hostel</li>
              <li>Offices of service providers, labour rest and recreation facilities, marketing support system, etc.</li>
            </ul>
          </div>

          {/* Means of Finance */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Means of Finance</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl. No</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Particulars</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">%</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">1</td>
                    <td className="px-6 py-4">State govt (SG)/ SG entities /SG Cooperatives</td>
                    <td className="px-6 py-4">10</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">2</td>
                    <td className="px-6 py-4">Promote Contribution</td>
                    <td className="px-6 py-4">20</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">3</td>
                    <td className="px-6 py-4">Subsidy</td>
                    <td className="px-6 py-4">50</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">4</td>
                    <td className="px-6 py-4">Term Loan(Balancing Fig)</td>
                    <td className="px-6 py-4">20</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Total</td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4 font-medium">100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pattern of Assistant */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Pattern of Assistant</h3>
            <div className="space-y-3">
              <p>General areas – 50% Eligible Project Cost</p>
              <p>Difficult and Hilly areas – 75% Eligible Project Cost</p>
              <p className="text-sm text-gray-600">
                Eligible Project Cost - Total project Cost - (Cost of Land + Pre- Operative Expenses & Interest during Construction + Margin money for working Capital)
              </p>
              <p className="font-medium">Maximum Subsidy under the Scheme – 50 crore per project.</p>
            </div>
          </div>

          {/* Release of Grant */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Release of Grant</h3>
            <p className="mb-4">
              The grant-in-aid under the scheme is released in four instalments of 30%, 30%, 20% and 20%, subject to other scheme parameters, as per the following schedule:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>1st instalment - 30% of approved grant (after incurring expenditure of at least 10% of the eligible project cost)</li>
              <li>2nd instalment - 30% of approved grant</li>
              <li>3rd instalment - 20% of approved grant</li>
              <li>4th instalment - 20% of approved grant is released subject to successful completion of project and commencement of operations.</li>
            </ul>
          </div>

          {/* Time Schedule */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Time Schedule</h3>
            <p>For completion and operationalization of project:</p>
            <p className="font-medium mt-2">Within 30 months from the date of final approval</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaFoodPark;
