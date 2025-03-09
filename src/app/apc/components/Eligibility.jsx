const Eligibility = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold text-indigo-900 mb-6">
        Agro Processing Cluster (APC) Subsidy – Central Govt (MoFPI)
      </h3>
      <h4 className="text-lg font-semibold text-indigo-700 mb-6">
        Eligible Criteria's
      </h4>
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
              <td className="px-6 py-4 text-sm font-medium text-gray-900">APC Definition</td>
              <td className="px-6 py-4 text-sm text-gray-500">Only New APC (No Expansion / Upgradation) is allowed.<br/>Only one APC in one District is allowed.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Land</td>
              <td className="px-6 py-4 text-sm text-gray-500">Should be at least 10 Acres in the name of Applicant or "Lease Land" from 30 years "Lease Period" only.<br/>Should be outside 10 kms of "Urban Areas" - Except NER / SC / ST.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Term Loan (TL)</td>
              <td className="px-6 py-4 text-sm text-gray-500">TL Date should be after Expression of Interest (EoI) Date (Minimum TL Value should be 20% of Total Project Cost).<br/>TL should be at least 20% of Total Project Cost for NER / SC / ST.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">04</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Equity (Own Contribution)</td>
              <td className="px-6 py-4 text-sm text-gray-500">At least 20% of Total Project Cost for General (G) 10% of Total Project Cost for NER / SC / ST.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Grant in Aid (Continued)</td>
              <td className="px-6 py-4 text-sm text-gray-500">Should be 35% of Grants in Aid for General (G) 50% of Grant in Aid (Subsidy Amount) for NER / SC / ST.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">06</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Eligible Project Cost</td>
              <td className="px-6 py-4 text-sm text-gray-500">Basic Enabling Infrastructure (Maximum 40% of Eligible Project Cost) + Core Infrastructure (may vary from Project to Project).</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">07</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Minimum Units in APC</td>
              <td className="px-6 py-4 text-sm text-gray-500">4-10 New Food Processing Units to be set up in APC with an aggregate eligible Investment of Minimum ₹ 25 Crore.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">08</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Restrictions</td>
              <td className="px-6 py-4 text-sm text-gray-500">One application per unit will be considered. The promoter of MFP or APC may set up units (for more than one unit) in their approved MFP or APC.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">09</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Investment Made prior to EoI</td>
              <td className="px-6 py-4 text-sm text-gray-500">Will not be considered as "Eligible Project Cost" to calculate Subsidy Amount.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Refundable Bank Guarantee (BG)</td>
              <td className="px-6 py-4 text-sm text-gray-500">5% BG on "Eligible Subsidy Amount" should execute on receipt of Ministry Approval Letter, but within 30 days from the date of Ministry Approval Letter. BG will be available on successful implementation of Project but after receipt of 3rd Installment of Subsidy Amount.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">11</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Stage of TL Disbursement</td>
              <td className="px-6 py-4 text-sm text-gray-500">After getting Ministry Approval, Bank can disburse TL amount. Thereafter only Project Civil Work, Purchase of Machinery and Advance to Vendors / Contractors can be made.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Minimum 3 Bank Accounts</td>
              <td className="px-6 py-4 text-sm text-gray-500">1 Current Account, 1 Term Loan Account, 1 Subsidy Account to be maintained by applicant.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">13</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Evaluation Chart</td>
              <td className="px-6 py-4 text-sm text-gray-500">As per "Ministry Evaluation Chart" minimum 60 marks for General & 55 marks for NER / SC / ST / ITDP required to secure / achieve to make Project Eligible.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">14</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Project Completion</td>
              <td className="px-6 py-4 text-sm text-gray-500">General Areas: Within 30 months (Original 24 Months + 6 Months Extension).<br/>Difficult Areas (NER / SC / ST): Within 36 months (Original 30 Months + 6 Months Extension) from the date of Ministry Approval including extended period.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Mandatory Machinery MIS details on each Machine</td>
              <td className="px-6 py-4 text-sm text-gray-500">Supplier is required to affix or met Manufacturing Plate on each Machine duly mentioning Unique Machine No & Year of Manufacture.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Eligibility; 