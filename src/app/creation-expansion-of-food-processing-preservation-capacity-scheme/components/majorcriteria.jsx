import React from 'react';

const MajorCriteria = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="text-left mb-6">
        <h3 className="text-xl font-semibold text-indigo-900">
          Central Food Ministry (MoFPI) - CEFPPC - Major Criteria
        </h3>
        <p className="text-indigo-600 mt-2">(Food Processing Unit Subsidy)</p>
      </div>

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
              <td className="px-6 py-4 text-sm text-gray-500">22-01-2025</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Scheme Period</td>
              <td className="px-6 py-4 text-sm text-gray-500">2021-22 to 2025-26 (5 Years)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Cut-off Date - Application Submission</td>
              <td className="px-6 py-4 text-sm text-gray-500">28-01-2025 to 28-03-2025 (60 Days)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">04</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Major Criterias / Scheme Bottle Neck</td>
              <td className="px-6 py-4 text-sm text-gray-500">No Civil Work, No Machinery Purchase, No Advances to Suppliers / Contractors before Ministry Approval.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Minimum Approval time required by Ministry</td>
              <td className="px-6 py-4 text-sm text-gray-500">6 to 9 Months</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">06</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Chances for Approval</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                <ol className="list-decimal pl-4">
                  <li>Securing or Scoring More Marks</li>
                  <li>High Project Cost</li>
                  <li>Other than Rice Mill</li>
                  <li>Proper Net Worth Certificate</li>
                  <li>Final Bank Term Loan Sanction Letter</li>
                  <li>Proper Bank Appraisal Report</li>
                  <li>High Debt Service Coverage Ratio (DSCR)</li>
                  <li>Good Project Report Presentation before Ministry</li>
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-400 text-green-700">
        <p className="text-sm">
          Note - There are 50-50 chances for consideration of additional Food Processing Units / Proposals
        </p>
      </div>
    </div>
  );
};

export default MajorCriteria;
