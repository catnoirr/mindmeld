import React from 'react';

const Clarifications = () => {
  const pendingClarifications = [
    {
      id: 25,
      topic: "Bank Loan Sanction Issue",
      context: "As per Annexure-VIII of the CEFPPC Scheme guidelines dated 08.06.2022, it is mentioned that in the event of Bank recovering its loan liabilities from the promoter in case of default, the bank shall refund to the Govt. grant in proportion of its own dues. Due to this clause, bank has denied to sanction term loan for the project.",
      status: "Pending"
    },
    {
      id: 27,
      topic: "Multiple Scheme Benefits",
      context: "A company which has availed benefits under one central scheme for establishing a food processing unit, is the same unit is eligible to obtain benefits under CEFPPC scheme?",
      status: "Pending"
    },
    {
      id: 28,
      topic: "PLI Scheme Compatibility",
      context: "A company which has availed benefits under PLI scheme is eligible to obtain benefits under CEFPPC scheme?",
      status: "Pending"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-indigo-900">Pending Clarifications</h3>
        <p className="text-indigo-600 mt-2">Items awaiting clarification from Ministry</p>
      </div>

      <div className="space-y-6">
        {pendingClarifications.map((item) => (
          <div key={item.id} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-yellow-100">
                  <span className="text-sm font-medium text-yellow-800">#{item.id}</span>
                </span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-yellow-900 mb-1">{item.topic}</h4>
                <p className="text-sm text-yellow-700">{item.context}</p>
                <div className="mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700">
        <p className="text-sm">
          Note: These items are awaiting official clarification from the Ministry. Updates will be provided once clarifications are issued.
        </p>
      </div>
    </div>
  );
};

export default Clarifications; 