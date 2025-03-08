import React from 'react';

const Guidelines = () => {
  const guidelinesData = [
    {
      id: '01',
      particulars: 'Scheme Effective Date',
      inputs: '08-06-2022'
    },
    {
      id: '02',
      particulars: 'Project Location',
      inputs: 'Any Location in India.'
    },
    {
      id: '03',
      particulars: 'Subsidy Rate',
      inputs: '35% (Gen) and 50% (NER / SC / ST / ITDP Areas) on Eligible Project Cost (Technical Civil Work + Eligible P&M excluding GST) with a cap of ₹ 10 Cr, whichever is lower.'
    },
    {
      id: '04',
      particulars: 'Instalments',
      inputs: '3 Equal Instalments (1/3rd of Grants-in-Aid each)'
    },
    {
      id: '05',
      particulars: 'Submission of 1st Instalment Documents - Cut-off Date & Stage',
      inputs: 'Submit documents after confirming expenditure of 1/3rd of Eligible Project Cost, but within 8 months (Gen) / 10 months (SC / ST) from the date of "Ministry Approval".'
    },
    {
      id: '06',
      particulars: '1st Instalment Inspection by Govt Authority (MoFPI) / PMA Consultants',
      inputs: 'Will carried out approx. in 30 days from the date of submission of 1st Instalment Documents.'
    },
    {
      id: '07',
      particulars: 'Release of 1st Instalment',
      inputs: 'Once submission of the Inspection Report by concerned Govt Officials / Agency, 1st instalment will be released in 1 month (approx.), subject to the availability of funds.'
    },
    {
      id: '08',
      particulars: 'Submission of 2nd Instalment Documents - Cut-off Date & Stage',
      inputs: 'Submit documents after spending expenditure to the extent of 2/3rd (67%) of "Eligible Project Cost", 50% of TL & item-wise progress on approved components, but within 16 months (Gen) / 20 months (SC / ST) from the date of "Ministry Approval".'
    },
    {
      id: '09',
      particulars: '2nd Instalment Inspection by Govt Authority (MoFPI) / PMA Consultants',
      inputs: 'Will carried out approx. in 30 days from the date of submission of 2nd Instalment Documents.'
    },
    {
      id: '10',
      particulars: 'Release of 2nd Instalment',
      inputs: 'Once submission of the Inspection Report by concerned Govt Officials / Agency, 2nd instalment will be released in 1 month (approx.), subject to the availability of funds.'
    },
    {
      id: '11',
      particulars: 'Submission of 3rd Instalment Documents - Cut-off Date & Stage',
      inputs: 'Submit documents after 100% utilization of "Promoter Contribution (Equity)" & "Term Loan (TL)", but within 24 months (Gen) / 30 months (SC / ST) from the date of "Ministry Approval".'
    },
    {
      id: '12',
      particulars: '3rd Instalment Inspection by Govt Authority (MoFPI) / PMA Consultants',
      inputs: 'Will carried out approx. in 30 days from the date of submission of 3rd Instalment Documents.'
    },
    {
      id: '13',
      particulars: 'Release of 3rd Instalment',
      inputs: 'Once submission of the Inspection Report by concerned Govt Officials / Agency, 3rd instalment will be released in 1 month (approx.), subject to the availability of funds.'
    },
    {
      id: '14',
      particulars: 'Subsidy Fund Utilization',
      inputs: 'Subsidy will be kept in Grant-in-Aid Account and can be utilized for payments to "Vendors / Contractors" related to Project work as per implementation.'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold text-indigo-900 mb-6">
        Integrated Cold Chain & Value Addition Infrastructure – Central Govt (MoFPI)
      </h3>
      <h4 className="text-lg text-indigo-700 mb-8 text-center">
        Snapshot (Guidelines)
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
            {guidelinesData.map((item, index) => (
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

export default Guidelines;
