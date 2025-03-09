import React from 'react';

const Eligibility = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold text-indigo-900 mb-6">Food Safety and Quality Assurance Infrastructure (FTL) - Central Govt (MoFPI)</h3>
      <h4 className="text-lg font-semibold text-indigo-700 mb-6">Eligible Criteria's</h4>
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
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">FTL Definition</td>
              <td className="px-6 py-4 text-sm text-gray-500">New Set Up / Upgradation allowed.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Land</td>
              <td className="px-6 py-4 text-sm text-gray-500">Should be in the name of Applicant. If "Lease Land", then 15 years "Lease Period" duly registered is required.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Term Loan (TL)</td>
              <td className="px-6 py-4 text-sm text-gray-500">TL Date should be after Expression of Interest (EoI) Date. Minimum TL Value should be 20% of Total Project Cost for General (or) 10% of Total Project Cost for NER / SC / ST.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">04</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Equity (Own Contribution)</td>
              <td className="px-6 py-4 text-sm text-gray-500">At least 20% of Total Project Cost for General (or) 10% of Total Project Cost for NER / SC / ST.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Eligible Project Cost</td>
              <td className="px-6 py-4 text-sm text-gray-500">Eligible Project Cost (Testing Equipment + Technical Civil + Furniture & Fixtures Cost excluding GST Value) as per Annexure-I</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">06</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Restrictions</td>
              <td className="px-6 py-4 text-sm text-gray-500">One application from an entity will be considered. An entity will include all Members / Relatives of the Promoter.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">07</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Investment Made prior to Ministry Approval</td>
              <td className="px-6 py-4 text-sm text-gray-500">Will not be considered as "Eligible Project Cost" to calculate Subsidy Amount.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">08</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Refundable Bank Guarantee (BG)</td>
              <td className="px-6 py-4 text-sm text-gray-500">3% BG on "Eligible Subsidy Amount" should execute on receipt of Ministry Approval Letter, but within 30 days from the date of Ministry Approval. BG will be released on successful implementation of Project, but after receipt of 2nd Installment of Subsidy Amount.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">09</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Stage of TL Disbursement</td>
              <td className="px-6 py-4 text-sm text-gray-500">After getting Ministry Approval, Bank can disburse TL Amount. Thereafter only Purchase of Equipment / Furniture can be started / made.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Minimum 3 Bank Accounts</td>
              <td className="px-6 py-4 text-sm text-gray-500">1 Current Account, 1 Term Loan Account & 1 Subsidy Account to be maintained by the Applicant.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">11</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Evaluation Marks</td>
              <td className="px-6 py-4 text-sm text-gray-500">As per the "Ministry Evaluation Chart," a minimum of 60 marks for General & 45 Marks for NER / SC / ST / ITDP is required to secure / achieve to make Project Eligible.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Project Completion</td>
              <td className="px-6 py-4 text-sm text-gray-500">General Area - Within 24 months (Original 24 Months + 6 Months Extension), Difficult Areas (NER / SC / ST) - Within 36 months (Original 30 Months + 6 Months Extension) from the date of Ministry Approval including an extended period.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Eligibility; 