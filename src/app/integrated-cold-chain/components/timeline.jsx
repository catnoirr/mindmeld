import React from 'react';

const Timeline = () => {
  const timelineData = [
    {
      id: '01',
      head: 'Application - Starting Date',
      timelines: '09-10-2023'
    },
    {
      id: '02',
      head: 'Application - Submission Last Date',
      timelines: '15-12-2023'
    },
    {
      id: '03',
      head: 'Total days available for submission of Application',
      timelines: '68 Days'
    },
    {
      id: '04',
      head: 'Time required for considering the case by Technical Scrutiny Committee (TSC) by Ministry.',
      timelines: '30 Days'
    },
    {
      id: '05',
      head: 'Time required for further consideration of proposal for IMAC once TSC approved.',
      timelines: '15 Days'
    },
    {
      id: '06',
      head: 'Time required to get Approval / Sanction form Ministry after IMAC Decision.',
      timelines: '15 Days'
    },
    {
      id: '07',
      head: 'Total time required to get Approval',
      timelines: '3 Months 15 Days'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold text-indigo-900 mb-6">
        Central Food Ministry (MoFPI) - Application Process Timelines
      </h3>
      <h4 className="text-lg text-indigo-700 mb-8 text-center">
        (Integrated Cold Chain & Value Addition Infrastructure Subsidy)
      </h4>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl No.</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Head</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timelines (T&T)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {timelineData.map((item, index) => (
              <tr 
                key={item.id}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.head}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.timelines}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Optional: Add a note about the timeline */}
      <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700">
        <p className="text-sm">
          Note: The total processing time from application submission to final approval is approximately 3 Months 15 Days.
        </p>
      </div>
    </div>
  );
};

export default Timeline;
