import React from 'react';

const Guidelines = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold text-indigo-900 mb-6">Food Safety and Quality Assurance Infrastructure (FTL) - Central Govt (MoFPI)</h3>
      <h4 className="text-lg font-semibold text-indigo-700 mb-6">Snapshot (Guidelines)</h4>
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
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Scheme Effective Date</td>
              <td className="px-6 py-4 text-sm text-gray-500">08-06-2022</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Project Location</td>
              <td className="px-6 py-4 text-sm text-gray-500">Any Location in India.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Subsidy Rate</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                <div className="space-y-2">
                  <p><span className="font-medium">Central / State Govt Org</span></p>
                  <p>100% - Equipment cost</p>
                  <p>2% - Technical Civil Work and Furniture & Fixtures or ₹5 lakh, whichever is lower</p>
                  <p className="mt-4"><span className="font-medium">Private Org / Entities</span></p>
                  <p>70% - Equipment cost (General) / 70% - Equipment cost (SC / ST)</p>
                  <p>2% - Technical Civil Work and Furniture & Fixtures or ₹5 lakh, whichever is lower</p>
                  <p className="mt-2 italic">The eligible cost of the equipment will be as per Ministry Cost Norms or as proposed by applicant, whichever is lower.</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">04</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Installments</td>
              <td className="px-6 py-4 text-sm text-gray-500">2 Equal Installments (50% of Grants-in Aid each)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Submission of 1st Installment Documents - Cut-off Date & Stage</td>
              <td className="px-6 py-4 text-sm text-gray-500">Submit documents after confirming expenditure of 50% of "Promoter Contribution (Equity) & Term loan (TL)" but within 12 months (Gen) / 15 months (SC / ST) from the date of "Ministry Approval".</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">06</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1st Installment Inspection by Govt Authority (MoFPI) / PMA Consultants</td>
              <td className="px-6 py-4 text-sm text-gray-500">Will carried out approx. in 30 days from the date of submission of 1st Installment Documents.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">07</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Release of 1st Installment</td>
              <td className="px-6 py-4 text-sm text-gray-500">Once submission of the Inspection Report by concerned Govt Officials / Agency, 1st installment will be released in 1 month (approx.), subject to the availability of funds.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">08</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Submission of 2nd Installment Documents - Cut-off Date & Stage</td>
              <td className="px-6 py-4 text-sm text-gray-500">Submit documents after 100% utilization of "Promoter Contribution (Equity), Term Loan (TL) & 1st Installment Subsidy", but within 24 months (Gen) / 30 months (SC / ST) from the date of "Ministry Approval".</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">09</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2nd Installment Inspection by Govt Authority (MoFPI) / PMA Consultants</td>
              <td className="px-6 py-4 text-sm text-gray-500">Will carried out approx. in 30 days from the date of submission of 2nd Installment Documents.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Release of 2nd Installment</td>
              <td className="px-6 py-4 text-sm text-gray-500">Once submission of the Inspection Report by concerned Govt Officials / Agency, 2nd installment will be released in 1 month (approx.), subject to the availability of funds.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">11</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Subsidy Fund Utilization</td>
              <td className="px-6 py-4 text-sm text-gray-500">Subsidy will be kept in Grant-in-Aid Account and can be utilized for payments to "Vendors / Contractors" related to Project while its implementation.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Guidelines; 