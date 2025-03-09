import React from 'react';

const UnitCaps = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold text-indigo-900 mb-6">Central Food Ministry (MoFPI) - FTL - Unit Caps / Budgeting</h3>
      <h4 className="text-lg font-semibold text-indigo-700 mb-6">(Food Safety and Quality Assurance Infrastructure (FTL) Subsidy)</h4>
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
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Scheme Announced on (Revised Guidelines)</td>
              <td className="px-6 py-4 text-sm text-gray-500">08-06-2022</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Scheme Period</td>
              <td className="px-6 py-4 text-sm text-gray-500">2021-22 to 2025-26 (5 Years)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cut-off Date - Application Submission</td>
              <td className="px-6 py-4 text-sm text-gray-500">09-10-2023 to 15-12-2023 (68 Days)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">04</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Major Criteria</td>
              <td className="px-6 py-4 text-sm text-gray-500">No Civil Work, No Machinery Purchase, No Advances to Suppliers / Contractors before Ministry Approval</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Minimum Approval Time required by Ministry to Sanction Project</td>
              <td className="px-6 py-4 text-sm text-gray-500">3 Months 15 Days</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">06</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">No of Applications / Unit Cap - Entire Policy Period (2021-22 to 2025-26)</td>
              <td className="px-6 py-4 text-sm text-gray-500">25 ICC's with a Budget of ₹ 75 Crore for 5 years</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">07</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Unit allocations per Year</td>
              <td className="px-6 py-4 text-sm text-gray-500">3 Units for 2023-24</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
        <p className="text-sm">Note - There are 50-50 chances for consideration of additional Units / Proposals</p>
      </div>
    </div>
  );
};

export default UnitCaps;