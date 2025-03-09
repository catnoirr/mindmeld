import React from 'react';

const Eligibility = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="text-left mb-6">
        <h3 className="text-xl font-semibold text-indigo-900">
          Food Processing Subsidy – Central Govt (MoFPI)
        </h3>
        <p className="text-indigo-600 mt-2">Eligible Criteria's</p>
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
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Land</td>
              <td className="px-6 py-4 text-sm text-gray-500">Land Should be in the name of Applicant. If "Lease Land", then 15 years "Lease Period" duly registered is required.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Term Loan (TL)</td>
              <td className="px-6 py-4 text-sm text-gray-500">TL Date should be after Expression of Interest (EoI) announcement Date – Minimum TL Value should be 20% of Total Project Cost.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Eligible Project Cost</td>
              <td className="px-6 py-4 text-sm text-gray-500">Minimum Eligible Project should be ₹ 3 Cr (Technical Civil + Machinery Cost excluding GST Value)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">04</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Restrictions</td>
              <td className="px-6 py-4 text-sm text-gray-500">One family one proposal will be considered. Family will include all Members / Relatives.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Net worth</td>
              <td className="px-6 py-4 text-sm text-gray-500">Minimum 1.5 times of Grant-in-Aid</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">06</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Investment Made prior to Ministry Approval</td>
              <td className="px-6 py-4 text-sm text-gray-500">Will not be considered as "Eligible Project Cost" to calculate Subsidy Amount.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">07</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Refundable Bank Guarantee (BG)</td>
              <td className="px-6 py-4 text-sm text-gray-500">5% BG on "Eligible Subsidy Amount" should execute on receipt of Ministry Approval Letter, but within 30 days from the date of Ministry Approval. BG Period should be 30 Months after submission of BG.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">08</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Stage of TL Disbursement</td>
              <td className="px-6 py-4 text-sm text-gray-500">After getting Ministry Approval, Bank can disburse TL Amount. Thereafter only Project Civil Work, Purchase of Machinery and Advance to Vendors & Contractors can be start / made.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">09</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Evaluation Marks</td>
              <td className="px-6 py-4 text-sm text-gray-500">As per "Ministry Evaluation Chart" minimum 60% of 85 Marks required to secure / achieve to make Project Eligible.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Project Completion</td>
              <td className="px-6 py-4 text-sm text-gray-500">Within 24 months (Original 18 Months + 6 Months Extension) from the date of Ministry Approval including extended period with Penalty Clause</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Eligibility; 