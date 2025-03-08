import React from 'react';

const Timelines = () => {
  const majorHeadsData = [
    {
      id: '01',
      particulars: 'Farm Level Infrastructure (FLI), which may include a Processing Centre, situated in the catchment area of the targeted produce. Location of FLI must mandatorily be indicated in the DPR as well as Bank Appraisal Note.'
    },
    {
      id: '02',
      particulars: 'Processing Centre (Mandatory Component) - Indicative List as per Annexure-I'
    },
    {
      id: '03',
      particulars: 'Distribution Hub - This shall have a modern multi-product, multi-temperature cold storage. It may also include one or more of the facilities mentioned in Annexure-I below depending upon the business plan of the project.'
    },
    {
      id: '04',
      particulars: 'Refrigerated Vans / Refrigerated Trucks / Insulated Vans / Mobile Insulated Tankers.'
    },
    {
      id: '05',
      particulars: 'Irradiation Facility - This may be a standalone component. Irradiation Facility may also include Cold Storage, Grading & Sorting Facilities, Reefer Vans for storage and transportation of raw material and finished products for efficient utilization of the facility. For the Irradiation Projects, Fruit & Vegetable Sector would also be an eligible Sector.'
    }
  ];

  const eligibleComponentsData = [
    { id: '01', particulars: 'Mechanized Sorting & Grading Line / Packing Line / Staging Cold Rooms.' },
    { id: '02', particulars: 'Cold Storage Units (Associated with value addition)' },
    { id: '03', particulars: 'Controlled Atmosphere (CA) Storage (Associated with value addition)' },
    { id: '04', particulars: 'Frozen Storage / Deep Freezers (Associated with value addition)' },
    { id: '05', particulars: 'IQF Line, Tunnel / Spiral / Blast / Plate Freezer, Vacuum Freeze Drying' },
    { id: '06', particulars: 'Milk Chilling / Bulk Milk Cooling / Automatic Milk Collection Unit / Milk Processing Unit (including packing) for which temperature control is necessary during some part of the processing.\nNote: Maximum 10 Milk Chilling or Bulk Milk Cooling or Automatic Milk Collection Unit can be assisted per project.' },
    { id: '07', particulars: 'Poultry / Meat / Marine / Fishery Processing Unit' },
    { id: '08', particulars: 'Packaging Line for Chilled / Frozen / Temperature-Controlled Products' },
    { id: '09', particulars: 'Food Irradiation Unit' },
    { id: '10', particulars: 'Refrigerated / Insulated Transport' },
    { id: '11', particulars: 'Pre-Cooling Units / Mobile Pre-Coolers' },
    { id: '12', particulars: 'Retail Refrigerated Carts, Temperature Controlled Solar Powered Retail Carts.\nNote: Maximum 5 such Carts can be considered per project' },
    { id: '13', particulars: 'Reefer Boats.\nNote: Maximum 5 such Boats can be considered per project' },
    { id: '14', particulars: 'Refrigerated Containers including Multi-Modal Container Units' },
    { id: '15', particulars: 'Renewable / Alternate Energy Technologies (Solar, Bio-Mass, Wind, etc.) for the project.\nNote: Maximum permissible cost is ₹ 35 lakh per project.' },
    { id: '16', particulars: 'Accessories / Support Infrastructure / Utilities such as Fixed Racking System in Cold / CA Storage Forklifts, Reach Trucks, Insulated Fish Boxes, Dock Levellers, Mezzanine Flooring, ETP, Boiler, CIP Unit, Slicer / Dicer, Sorting / Grading Line, etc.\nNote: CA Storage should be located near production areas. Otherwise, detailed justification to be given in the DPR.' },
    { id: '17', particulars: 'In-house product Testing Laboratory' },
    { id: '18', particulars: 'Any other Modern Technology for Temperature-Controlled Storage, Processing, Value Addition & Preservation Infrastructure.' },
    { id: '19', particulars: 'Toilets, Septic Tank, Drainage & such other facilities.' }
  ];

  const ineligibleComponentsData = [
    { id: '01', particulars: 'Compound Wall' },
    { id: '02', particulars: 'Approach Road / Internal Roads' },
    { id: '03', particulars: 'Cost of Land & Site Development' },
    { id: '04', particulars: 'Administrative Office Building' },
    { id: '05', particulars: 'Canteen' },
    { id: '06', particulars: 'Labour Rest Room & Quarters for workers' },
    { id: '07', particulars: 'Security / Guard Room or Enclosure' },
    { id: '08', particulars: 'Non-Technical Civil Works not related to the components of the scheme' },
    { id: '09', particulars: 'Margin Money, Working Capital & Contingencies' },
    { id: '10', particulars: 'Fuel, Consumables, Spares & Stores' },
    { id: '11', particulars: 'Transport Vehicles other than Controlled Temperature Vehicles' },
    { id: '12', particulars: 'Pre-operative expenses' },
    { id: '13', particulars: 'Service Charges, Carriage & Freight Charges or other such Charges / Fees' },
    { id: '14', particulars: 'Expenditure on Painting of Machinery' },
    { id: '15', particulars: 'AC Ducting, Furniture, Computers & Allied Office Items' },
    { id: '16', particulars: 'Closed Circuit TV Camera & Security System related Equipment' },
    { id: '17', particulars: 'Consultancy Fee, Taxes, etc. on Plant & Machinery' },
    { id: '18', particulars: 'Stationery Items' },
    { id: '19', particulars: 'Plant & Machinery not directly related to components of the scheme' },
    { id: '20', particulars: 'Fly Catchers, Hand Washer, Laundry' },
    { id: '21', particulars: 'Reconditioned / Refurbished / Second Hand / Old Plant & Machinery' },
    { id: '22', particulars: 'Consumables such as Plastic Crates, Bins, Pallets, etc' }
  ];

  return (
    <div className="space-y-8">
      {/* Major Heads Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-indigo-900 mb-6">
          List of Eligible / Ineligible Components for Calculation of Subsidy
        </h3>
        <h4 className="text-lg text-indigo-700 mb-8 text-center">
          Major Heads of Cold Chain Components
        </h4>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl No.</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Particulars</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {majorHeadsData.map((item, index) => (
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

      {/* Eligible Components Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="text-lg text-indigo-700 mb-8">
          i) Eligible Components
        </h4>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl No.</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eligible Components</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {eligibleComponentsData.map((item, index) => (
                <tr 
                  key={item.id}
                  className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-pre-line">{item.particulars}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ineligible Components Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="text-lg text-indigo-700 mb-8">
          ii) Ineligible Components
        </h4>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl No.</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ineligible Components</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {ineligibleComponentsData.map((item, index) => (
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
    </div>
  );
};

export default Timelines;
