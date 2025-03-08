import React from 'react';

const Eligibility = () => {
  const eligibilityData = [
    {
      id: '01',
      particulars: 'Land',
      inputs: 'Should be in the name of Applicant. If "Lease Land", then 15 years "Lease Period" duly registered is required.'
    },
    {
      id: '02',
      particulars: 'Term Loan (TL)',
      inputs: 'TL Date should be after Expression of Interest (EoI) Date. Minimum TL Value should be 20% of Total Project Cost for General (or) 10% of Total Project Cost for NER / SC / ST.'
    },
    {
      id: '03',
      particulars: 'Equity (Own Contribution)',
      inputs: 'At least 20% of Total Project Cost for General (or) 10% of Total Project Cost for NER / SC / ST.'
    },
    {
      id: '04',
      particulars: 'Net worth (Combined)',
      inputs: 'Should be 1.5 times of Grant-in-Aid for General (or) 10% of Grant-in-Aid for SC / ST (or) at least equal to Subsidy Amount for NER.'
    },
    {
      id: '05',
      particulars: 'Eligible Project Cost',
      inputs: 'Eligible Project Cost (Technical Civil + Machinery Cost excluding GST Value) as per Annexure-I.'
    },
    {
      id: '06',
      particulars: 'Restrictions',
      inputs: 'One application from an entity will be considered. An entity will include all Members / Relatives of the Promoter.'
    },
    {
      id: '07',
      particulars: 'Investment Made prior to Ministry Approval',
      inputs: 'Will not be considered as "Eligible Project Cost" to calculate Subsidy Amount.'
    },
    {
      id: '08',
      particulars: 'Refundable Bank Guarantee (BG)',
      inputs: '5% BG on "Eligible Subsidy Amount" should execute on receipt of Ministry Approval Letter, but within 30 days from the date of Ministry Approval. BG will be released on successful implementation of Project, but after receipt of 3rd Instalment of Subsidy Amount.'
    },
    {
      id: '09',
      particulars: 'Stage of TL Disbursement',
      inputs: 'After getting Ministry Approval, Bank can disburse TL Amount. Thereafter only Project Civil Work, Purchase of Machinery and Advance to Vendors & Contractors can be started / made.'
    },
    {
      id: '10',
      particulars: 'Minimum 3 Bank Accounts',
      inputs: '1 Current Account, 1 Term Loan Account & 1 Subsidy Account to be maintained by the Applicant.'
    },
    {
      id: '11',
      particulars: 'Evaluation Marks',
      inputs: 'As per the "Ministry Evaluation Chart", a minimum of 60 marks for General & 45 Marks for NER / SC / ST / ITDP is required to secure / achieve to make Project Eligible.'
    },
    {
      id: '12',
      particulars: 'Project Completion',
      inputs: 'General Areas - Within 30 months (Original 24 Months + 6 Months Extension). Difficult Areas (NER / SC / ST) - Within 36 months (Original 30 Months + 6 Months Extension) from the date of Ministry Approval including an extended period.'
    },
    {
      id: '13',
      particulars: 'Mandatory Machinery Mfg. Details on each Machine',
      inputs: 'Supplier is required to affix or rivet Manufacturing Plate on each Machine duly mentioning Unique Machine No, Month & Year of Manufacture.'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold text-indigo-900 mb-6">
        Integrated Cold Chain & Value Addition Infrastructure (ICC) – Central Govt (MoFPI)
      </h3>
      <h4 className="text-lg text-indigo-700 mb-8 text-center">
        Eligible Criteria's
      </h4>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl No.</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Particulars</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inputs</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {eligibilityData.map((item, index) => (
              <tr 
                key={item.id}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.particulars}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.inputs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Eligibility;
