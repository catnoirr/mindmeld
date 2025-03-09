import React from 'react';

const EligibleComponents = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold text-indigo-900 mb-6">List of Eligible / Ineligible Components for Calculation of Subsidy</h3>
      <p className="text-right text-sm text-gray-500 mb-6">Annexure-I</p>

      {/* Eligible Components Section */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-green-700 mb-4">I) Eligible Components</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Particulars</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">01</td>
                <td className="px-6 py-4 text-sm text-gray-900">Equipment - which includes the equipment essential for the testing requirement of the food and food products being produced and manufactured in the catchment area of the Food Testing Laboratory (FTL).</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02</td>
                <td className="px-6 py-4 text-sm text-gray-900">Technical Civil Work (TCW) and Furniture & Fixtures – It includes, only the component of civil work and Furniture & Fixtures essential for installation and operationalization of the equipment.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
          <p className="text-sm">Note - It is mandatory that at the time of making an application to the Ministry for a grant in aid, the basic civil structure and building for the Food Testing Laboratory shall be ready (Finished / Semi-finished).</p>
        </div>
      </div>

      {/* Ineligible Components Section */}
      <div>
        <h4 className="text-lg font-semibold text-red-700 mb-4">II) Ineligible Components</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ineligible Components</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                "Compound Wall",
                "Approach Road / Internal Roads",
                "Cost of Land & Site Development",
                "Administrative Office Building",
                "Canteen",
                "Labour Rest Room & Quarters for workers",
                "Security / Guard Room or Enclosure",
                "Non-Technical Civil Works not related to the components of the scheme",
                "Margin Money, Working Capital & Contingencies",
                "Fuel, Consumables, Spares & Stores",
                "Transport Vehicles",
                "Pre-operative expenses",
                "Service Charges, Carriage & Freight Charges or other such Charges / Fees",
                "Expenditure on Painting of Machinery",
                "AC Ducting, Furniture, Computers & Allied Office Items",
                "Closed Circuit TV Camera & Security System related Equipment",
                "Consultancy Fee, Taxes, etc. on Plant & Machinery",
                "Stationery Items",
                "Plant & Machinery not directly related to components of the scheme",
                "Fly Catchers, Hand Washer, Laundry",
                "Reconditioned / Refurbished / Second Hand / Old Plant & Machinery",
                "Equipment costing less than ₹ 1 lakh or otherwise not recommended by TSC (Techno-Scrutiny Committee)."
              ].map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{String(index + 1).padStart(2, '0')}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EligibleComponents; 