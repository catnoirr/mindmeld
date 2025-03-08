'use client'

import React, { useState } from 'react';
import Guidelines from './components/Guidelines';

const IntegratedColdChain = () => {
  const [activeTab, setActiveTab] = useState('EOI Timelines');

  const tabs = ['EOI Timelines', 'Unit Caps / Budget', 'Guidelines', 'Eligibility', 'Components', 'Timelines', 'Checklist', "FAQ'S"];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-indigo-900 mb-4">Integrated Cold Chain</h1>
          <h2 className="text-xl text-indigo-700">& Value Addition Infrastructure (ICC) - Central Govt (MoFPI)</h2>
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
        {activeTab === 'EOI Timelines' && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold text-indigo-900 mb-6">EOI – Deadline for filing Initial (First) Application</h3>
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
                    <td className="px-6 py-4 text-sm text-gray-500">Integrated Cold Chain & Value Addition Infrastructure (ICC)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Who are Eligible</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Interested Promoters / Investors willing to set-up Infrastructure Projects in Food Processing Sector / Segment.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">When to Apply</td>
                    <td className="px-6 py-4 text-sm text-gray-500">From 10:00 AM of 09-10-2023 to 05:00 PM of 15-12-2023 (68 Days)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">04</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Last Date to Apply</td>
                    <td className="px-6 py-4 text-sm text-gray-500">On or before 05:00 PM on 15-12-2023</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Govt. Fee</td>
                    <td className="px-6 py-4 text-sm text-gray-500">General Category - ₹ 20,000/-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Unit Caps / Budget Section */}
        {activeTab === 'Unit Caps / Budget' && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold text-indigo-900 mb-6">
              Central Food Ministry (MoFPI) - ICC - Unit Caps / Budgeting
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl No</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Particulars</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inputs</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">01</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Scheme Announced on (Revised Guidelines)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">08-06-2022</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Scheme Period</td>
                    <td className="px-6 py-4 text-sm text-gray-500">2021-22 to 2025-26 (5 Years)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Cut-off Date - Application Submission</td>
                    <td className="px-6 py-4 text-sm text-gray-500">09-10-2023 to 15-12-2023 (68 Days)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">04</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Major Criteria's</td>
                    <td className="px-6 py-4 text-sm text-gray-500">No Civil Work, No Machinery Purchase, No Advances to Suppliers / Contractors before Ministry Approval.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Minimum Approval Time required by Ministry to Sanction Project</td>
                    <td className="px-6 py-4 text-sm text-gray-500">3 Months 15 Days</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">06</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">No of Applications / Unit Cap - Entire Policy Period (2021-22 to 2025-26)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">30 ICC's with a Budget of ₹ 180 Crore for 5 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">07</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Unit allocations per Year</td>
                    <td className="px-6 py-4 text-sm text-gray-500">6 Units for 2023-24</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-400 text-green-700">
              <p className="text-sm">
                Note - There are 50-50 chances for consideration of additional Units / Proposals
              </p>
            </div>
          </div>
        )}

        {/* Guidelines Section */}
        {activeTab === 'Guidelines' && (
          <div >
            <Guidelines />
          </div>
        )}

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
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Note: There are 50-50 chances for consideration of additional Units / Proposals
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratedColdChain;
