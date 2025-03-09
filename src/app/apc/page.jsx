'use client'

import React, { useState } from 'react';
import Budget from './components/Budget';
import Guidelines from './components/Guidelines';
import Eligibility from './components/Eligibility';
import Infrastructure from './components/Infrastructure';
import Timelines from './components/Timelines';
import Checklist from './components/Checklist';
import FAQ from './components/FAQ';
// import MajorCriteria from './components/majorcriteria';
// import Timeline from './components/timeline';

const IntegratedColdChain = () => {
  const [activeTab, setActiveTab] = useState('Checklist');

  const tabs = ['EOI Deadline', 'Budget',   'Guidelines', 'Eligibility', 'Infrastructure', 'Timelines', 'Checklist','FAQ'];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-indigo-900 mb-4">Agro Processing Cluster</h1>
          <h2 className="text-xl text-indigo-700">Central Govt (MoFPI)</h2>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white shadow-sm hover:bg-indigo-50 text-indigo-700'
              } font-medium transition-colors`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* EOI Section */}
        {activeTab === 'EOI Deadline' && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold text-indigo-900 mb-6">Agro Processing Cluster (APC) - Central Govt (MoFPI)</h3>
            <h3 className="text-xl font-semibold text-indigo-900 mb-6">EoI – Deadline for filing Initial (First) Application</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl No</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Particulars</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">01</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Scheme Name</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Creation of Infrastructure for Agro-Processing Clusters (APC)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">When to Apply</td>
                    <td className="px-6 py-4 text-sm text-gray-500">From 10:00 AM of 09-10-2023 to 05:00 PM of 15-12-2023 (68 Days)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Last Date to Apply (Cut-off Date)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">On or before 05:00 PM on 15-12-2023</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">04</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Govt. Fee (Non-Refundable)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">General Category - ₹ 20,000/-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mode of Govt Fee</td>
                    <td className="px-6 py-4 text-sm text-gray-500">A Demand Draft (DD) to be submitted in favour of "Pay & Accounts Officer, Ministry of Food Processing Industries, New Delhi"</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">06</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mandatory condition of submission of original DD (Cut-off Date) to Ministry</td>
                    <td className="px-6 py-4 text-sm text-gray-500">It should reach Ministry not later than 7 Days after Last Date of Submission of Application – 15-12-2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Unit Caps / Budget Section */}
        {activeTab === 'Budget' && <Budget />}

        {/* Guidelines Section */}
        {activeTab === 'Guidelines' && <Guidelines />}

        {/* Eligibility Section */}
        {activeTab === 'Eligibility' && <Eligibility />}

        {/* Infrastructure Section */}
        {activeTab === 'Infrastructure' && <Infrastructure />}

        {/* Timelines Section */}
        {activeTab === 'Timelines' && <Timelines />}

        {/* Checklist Section */}
        {activeTab === 'Checklist' && <Checklist />}

        {/* FAQ Section */}
        {activeTab === 'FAQ' && <FAQ />}

        {/* Components Section */}
        {activeTab === 'Components' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-indigo-900 mb-6">Major Heads of Cold Chain Components</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-medium text-lg text-gray-900">Farm Level Infrastructure (FLI)</h4>
                  <p className="text-gray-600 mt-1">Processing Centre, situated in the catchment area of the targeted produce. Location of FLI must mandatorily be indicated in the DPR as well as Bank Appraisal Note.</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-medium text-lg text-gray-900">Processing Centre</h4>
                  <p className="text-gray-600 mt-1">Mandatory Component - Indicative List as per Annexure-I</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-medium text-lg text-gray-900">Distribution Hub</h4>
                  <p className="text-gray-600 mt-1">This shall have a modern multi-product, multi-temperature cold storage. It may also include one or more of the facilities mentioned in Annexure-I below depending upon the business plan of the project.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-indigo-900 mb-6">Eligible Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Mechanized Sorting & Grading Line / Packing Line / Staging Cold Rooms",
                  "Cold Storage Units (Associated with value addition)",
                  "Controlled Atmosphere (CA) Storage (Associated with value addition)",
                  "Frozen Storage / Deep Freezers (Associated with value addition)",
                  "IQF Line: Tunnel / Spiral / Blast / Plate Freezer, Vacuum Freeze Drying",
                  "Milk Chilling / Bulk Milk Cooling / Automatic Milk Collection Unit",
                  "Poultry / Meat / Marine / Fishery Processing Unit",
                  "Packaging Line for Chilled / Frozen / Temperature-Controlled Products",
                  "Food Irradiation Unit",
                  "Refrigerated / Insulated Transport",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-medium text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Important Notice */}
       
      </div>
    </div>
  );
};

export default IntegratedColdChain;
