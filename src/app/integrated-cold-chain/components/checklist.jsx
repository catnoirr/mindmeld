import React from 'react';

const Checklist = () => {
  const checklistData = [
    { id: '1.1', particulars: 'Submit Project Report (DPR) as per Appendix-I' },
    { id: '1.2', particulars: 'Properly filled Basic Data Sheet as per Appendix-II' },
    { id: '1.3', particulars: 'Original Certificate available with the Entity' },
    { id: '1.4', particulars: 'Bank consent and Rating of the Applicant (if prior sanctioned to be set up)' },
    { id: '1.5', particulars: 'Arrangements for procurement of Raw material' },
    { id: '1.6', particulars: 'Marketing Strategy of proposed products' },
    { id: '1.7', particulars: 'Detailed Bio-data(s) of Promoter(s) with their contact details including Tel No.' },
    { id: '1.8', particulars: 'IT Returns / Financials of Promoter(s) / Company for last 3 years' },
    { id: '1.9', particulars: 'CIBIL Score (All Directors)' },
    { id: '1.10', particulars: 'Audited Balance Sheet and Annual Report for last 3 years (if an existing Company)' },
    { id: '1.11', particulars: 'Profile of Technical consultants to be appointed' },
    { id: '1.12', particulars: 'Proposed Process Flow, Plant Layout, Building Layout & Equipment Layout' },
    { id: '1.13', particulars: 'Detailed Manufacturing Operations of the entity related to the project' },
    { id: '1.14', particulars: 'Complete Plant & Machinery details from Plant' },
    { id: '1.15', particulars: 'Certificate of Incorporation - Registration - Memorandum & Article of Association, Partnership Firm related items' },
    { id: '1.16', particulars: 'Land related title Deed' },
    { id: '1.17', particulars: 'SC / ST Caste Certificate (if applicable)' },
    { id: '1.18', particulars: 'Estimated cost (Item wise) - Latest Price List of Plant / Equip / Service' },
    { id: '1.19', particulars: 'Quotations (with complete Pro-forma Invoice)' },
    { id: '1.20', particulars: 'CA Certificate (Net worth)' },
    { id: '1.21', particulars: 'NOC / Statutory Approvals (Appendix - 3)' },
    { id: '1.22', particulars: 'Board Resolution (Appendix - 4)' },
    { id: '1.23', particulars: 'Power of Attorney (Appendix - 5)' }
  ];

  const notesData = [
    { id: '1', particulars: 'All above documents must be uploaded through online App (Self attested)' },
    { id: '2', particulars: 'Land Certificate of Mutation, Non-Encumbrance' },
    { id: '3', particulars: 'Details of board members include address, age & details of association with the company, mentioned' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold text-indigo-900 mb-6">
        Check List (ICC) - Initial Application
      </h3>
      
      {/* Main Checklist */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">Sl No.</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Particulars</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {checklistData.map((item, index) => (
              <tr 
                key={item.id}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.particulars}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Notes Section */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-lg font-medium text-indigo-700 mb-4">Notes</h4>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">Sl No.</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Particulars</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {notesData.map((item, index) => (
              <tr 
                key={item.id}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.particulars}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Checklist;
