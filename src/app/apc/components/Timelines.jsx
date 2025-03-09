const Timelines = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold text-indigo-900 mb-6">
        Central Food Ministry (MoFPI) - Application Process Timelines
      </h3>
      <h4 className="text-lg font-semibold text-indigo-700 mb-6">
        (Agro Processing Cluster (APC) Subsidy)
      </h4>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Head</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timelines (T&T)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">01</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Application - Starting Date</td>
              <td className="px-6 py-4 text-sm text-gray-500">09-10-2023</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Application - Submission Last Date</td>
              <td className="px-6 py-4 text-sm text-gray-500">15-12-2023</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Total days available for submission of Application</td>
              <td className="px-6 py-4 text-sm text-gray-500">68 Days</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">04</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Time required for considering the case by Technical Scrutiny Committee (TSC) by Ministry</td>
              <td className="px-6 py-4 text-sm text-gray-500">30 Days</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Time required for further consideration of proposal by Inter Ministerial Approval Committee (IMAC) once TSC approved</td>
              <td className="px-6 py-4 text-sm text-gray-500">15 Days</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">06</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Time required to get Approval / Sanction from Ministry after IMAC Decision</td>
              <td className="px-6 py-4 text-sm text-gray-500">15 Days</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">07</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Total time required to get Approval</td>
              <td className="px-6 py-4 text-sm text-gray-500">2 Months 15 Days</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timelines; 