import React from 'react';

const Guidelines = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="text-left mb-6">
        <h3 className="text-xl font-semibold text-indigo-900">
          Food Processing Subsidy – Central Govt (MoFPI)
        </h3>
        <p className="text-indigo-600 mt-2">Snapshot (Guidelines)</p>
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
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Scheme First EoI Date</td>
              <td className="px-6 py-4 text-sm text-gray-500">15-09-2017</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Scheme Latest EoI Date</td>
              <td className="px-6 py-4 text-sm text-gray-500">22-01-2025</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Last Date of Submission</td>
              <td className="px-6 py-4 text-sm text-gray-500">60 Days from the date of Expression of Interest (EoI) - (28-03-2025)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">04</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Project Location</td>
              <td className="px-6 py-4 text-sm text-gray-500">Anywhere outside MFP / APC. Unit should not be with in MFP / APC.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Subsidy Rate</td>
              <td className="px-6 py-4 text-sm text-gray-500">35% on Eligible Project Cost (Technical Civil Work and Eligible P&M excluding GST) with a cap of ₹ 5 Cr, whichever is lower Per Unit</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">06</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Instalments</td>
              <td className="px-6 py-4 text-sm text-gray-500">2 Equal Instalments (50% each)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">07</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Submission of 1st Instalment documents - Cut-off Date & Stage</td>
              <td className="px-6 py-4 text-sm text-gray-500">Submit documents after 50% utilization of "Promoter Contribution (Equity)" & "Term Loan (TL)", but within 9 months from the date of "Ministry Approval".</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">08</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">1st Installment Inspection by Govt Authority (MoFPI) / PMA Consultants</td>
              <td className="px-6 py-4 text-sm text-gray-500">Will carried out approx. in 30 days from the date of submission of 1st Installment Documents to Ministry.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">09</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Release of 1st Instalment</td>
              <td className="px-6 py-4 text-sm text-gray-500">Once submission of Inspection Report by concerned Govt Officials / Agency, 1st instalment will be released in 1 month (approx.), subject to availability of funds.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Submission of 2nd Instalment Documents - Cut-off Date & Stage</td>
              <td className="px-6 py-4 text-sm text-gray-500">Submit documents after 100% utilization of "Promoter Contribution (Equity)" & "Term Loan (TL)", but within 18 months from the date of "Ministry Approval".</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">11</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">2nd Installment Inspection by Govt Authority (MoFPI) / PMA Consultants & Banker</td>
              <td className="px-6 py-4 text-sm text-gray-500">Will carried out approx. in 30 days from the date of submission of 2nd Installment Documents.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Release of 2nd Instalment</td>
              <td className="px-6 py-4 text-sm text-gray-500">Once submission of Inspection Report by concerned Govt Officials / Agency, 2nd instalment will be released in 1 month (approx.), subject to availability of funds.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">13</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Subsidy Fund Utilization</td>
              <td className="px-6 py-4 text-sm text-gray-500">Subsidy will be kept in Grant-in-Aid Account and can be utilized for payments to "Vendors / Contractors" related to Project while its implementation</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Guidelines; 