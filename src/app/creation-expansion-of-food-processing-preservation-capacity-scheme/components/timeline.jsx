import React from 'react';

const Timeline = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="text-left mb-6">
        <h3 className="text-xl font-semibold text-indigo-900">
          Central Food Ministry (MoFPI) - Application Process Timelines
        </h3>
        <p className="text-indigo-600 mt-2">(Food Processing Unit Subsidy)</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Head</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timelines (TAT)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">01</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Application Starting Date</td>
              <td className="px-6 py-4 text-sm text-gray-500">28-01-2025</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Application Submission Last Date (Cut-off)</td>
              <td className="px-6 py-4 text-sm text-gray-500">28-03-2025</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Total days available for submission of Application</td>
              <td className="px-6 py-4 text-sm text-gray-500">60 Days</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">04</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Time required for considering the case by Technical Scrutiny Committee (TSC) by Ministry.</td>
              <td className="px-6 py-4 text-sm text-gray-500">60 Days from 29-03-2025</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Time required for further consideration of proposal for IMAC, once TSC approves.</td>
              <td className="px-6 py-4 text-sm text-gray-500">30 Days</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">06</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Time required to get Approval / Sanction form Ministry from the date of IMAC Decision</td>
              <td className="px-6 py-4 text-sm text-gray-500">30 Days</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">07</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Approximate Total Time required to get Ministry Approval</td>
              <td className="px-6 py-4 text-sm text-gray-500">6 to 9 Months</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">08</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">The above timelines is figured out as per our previous experience with Ministry since Introduction of this scheme for additional timelines</td>
              <td className="px-6 py-4 text-sm text-gray-500">3 Months Grace Period – Safer Side</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timeline; 