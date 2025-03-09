import React from 'react';

const ChecklistSection = ({ title, items }) => (
  <div className="mb-8">
    <h4 className="text-lg font-semibold text-indigo-800 mb-4">{title}</h4>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl No</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Particulars</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{String(index + 1).padStart(2, '0')}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Checklist = () => {
  const masterDocuments = [
    <div key="1">
      1 Partnership Firm - Registered Partnership Deed alongwith Firm Registration Copy<br/>
      2 Pvt Ltd / Ltd - Articles & Memorandum of Association alongwith Certificate of Incorporation<br/>
      3 Co-operative Societies - Bye-Laws alongwith Registration Certificate
    </div>,
    "TAN Certificate",
    "PAN Card of Company",
    "IEM Registration / Entrepreneur's Memorandum / Udyog Aadhaar Registration",
    "SC / ST Caste certificate (Whichever applicable)",
    "Annual reports and Audited Financial Statement of Accounts and Income Tax Returns of for last two years (Applicable in case of Expansion / Upgradation Units)",
    "Bio-data / Background / Experience of the entity relevant to the Scheme."
  ];

  const regulatoryCertificates = [
    "Registered Sale Deed / Lease deed (Lease Period 15 years) - English Version / Hindi Version"
  ];

  const projectDocuments = [
    "Indicating Financial & Technical Profile of the Entity",
    "Domain Expertise available with the entity",
    "Raw Material availability in the area where project is proposed to be set-up",
    "Arrangements for procurement of Raw material",
    "Marketing Strategy of proposed products",
    "Process Flow Diagram of proposed products with production capacity per day",
    "Technology proposed for various activities in process line",
    "Financial Estimates with key Financial Parameters",
    "Profit & Loss Statement",
    "Estimated employment generation from the project (direct as well as indirect)",
    "Number of Farmers estimated to be benefited etc"
  ];

  const projectDocumentsOther = [
    "Quotations from Original Equipment Manufacturer or its Authorised Dealer / Supplier"
  ];

  const financialDocuments = [
    "Final Bank Term Loan Sanction Letter from a Scheduled Commercial Bank / NABARD / SIDBI / NEDFI",
    "A detailed Bank Appraisal Note, specific to the Scheme, from a Scheduled Commercial Bank / NABARD / SIDBI / NEDFI"
  ];

  const declarations = [
    "Net Worth Certificate by CA (Appendix-I)",
    "CA / Statutory Auditor Certificate (Appendix-II)",
    "Item-wise & Cost-wise (Basic & GST / Taxes separately) details of Technical Civil Works duly certified by CE (Civil)",
    "An Undertaking (Appendix-III) on ₹ 100 Stamp Paper (Non-Judicial) duly notarised",
    "Item-wise & Cost-wise (Basic & GST / taxes separately) details of Plant & Machinery duly certified by CE (Mechanical)",
    "The expenditure incurred on the project before the date of submission of online application (Appendix-IV)",
    "Proof of submission of Govt Fee in the form of DD"
  ];

  const notes = [
    "All above documents must be submitted through online duly Self-attested by Applicant",
    "Land must be in the name of Applicant",
    "Proposal should contain an Index as first page & all pages of documents must be properly numbered",
    "When Original Documents are in a regional language, they should be accompanied by self-certified English / Hindi translation",
    "Correspondences (e-Mails / Letters) for possible forward or backward linkages.",
    "Break up of Basic Cost & Taxes (Civil & Plant & Machinery) are mandatory in all requisite documents such as DPR, Bank Appraisal, CE Certificates, CA certificate.",
    "In case GST / Taxes are not considered and shown as part of total Project Cost and means of finance, the proposal will be rejected due to non-disclosure of financials of the project.",
    "The projects, which are exempted from taxation like SEZs, manufacturing and other operations in warehouse (MoWR) & Export promotion capital Goods scheme (EPCG) etc. should invariably mention complete details about such exemptions in all requisite documents.",
    "In case land for the project has been taken on lease from State Government / its entities, the policy of respective State Government in this regard will be followed."
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-indigo-900">
          Check List - CEFPPC- Central Govt (MoFPI)
        </h3>
      </div>

      <div className="space-y-8">
        <ChecklistSection title="I) Master (KYC) Documents" items={masterDocuments} />
        <ChecklistSection title="II) Regulatory Certificates" items={regulatoryCertificates} />
        <ChecklistSection title="III) Project documents - DPR" items={projectDocuments} />
        <ChecklistSection title="IV) Project Documents" items={projectDocumentsOther} />
        <ChecklistSection title="V) Financials / Commercial Documents" items={financialDocuments} />
        <ChecklistSection title="VI) Declaration / Certifications" items={declarations} />
        
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-indigo-800 mb-4">Note:</h4>
          <div className="space-y-2">
            {notes.map((note, index) => (
              <div key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                <span className="font-medium">{String(index + 1).padStart(2, '0')}</span>
                <span>{note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checklist; 