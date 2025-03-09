const FAQ = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold text-indigo-900 mb-6">
        Frequently Asked Questions (FAQ)
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-20">Sl No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">FAQ</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-green-500 uppercase tracking-wider">Clarification</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">01</td>
              <td className="px-6 py-4 text-sm text-gray-900">Should the 10 acre land piece be a single parcel or could two parcels of land in same village be eligible for the project?</td>
              <td className="px-6 py-4 text-sm text-gray-500">The land area of 10 acre should be in a single piece for establishing an APC project.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02</td>
              <td className="px-6 py-4 text-sm text-gray-900">How many perishable units should be set up in an Agro Processing Cluster out of minimum 5 food processing units?</td>
              <td className="px-6 py-4 text-sm text-gray-500">No such stipulation is mentioned in APC Scheme guidelines.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03</td>
              <td className="px-6 py-4 text-sm text-gray-900">What is the breakup of promoters contribution Equity share, preference share, Reserve & surplus, unsecured loan from promoters?</td>
              <td className="px-6 py-4 text-sm text-gray-500">Promoters contribution includes Equity Share, Reserve & Surplus and internal accruals.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">04</td>
              <td className="px-6 py-4 text-sm text-gray-900">Can the slaughtering house be considered as an eligible component under the core processing facility of the APC?</td>
              <td className="px-6 py-4 text-sm text-gray-500">No.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05</td>
              <td className="px-6 py-4 text-sm text-gray-900">Whether the by-products can be a raw material to establish a seperate meat processing unit under EEFPPC scheme.</td>
              <td className="px-6 py-4 text-sm text-gray-500">By-products of the slaughter house (except non-food items viz. feathers, bone meal, tail, hides, horns, hoofs etc.) can be utilized as raw material to establish a meat processing unit under EEFPPC scheme.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">06</td>
              <td className="px-6 py-4 text-sm text-gray-900">Bangalore rural is officially designated to process poultry products under PMFME Scheme as per MoFPI Notice dated 04.01.2021. Will it be considered as designated cluster by MoFPI under APC scheme?</td>
              <td className="px-6 py-4 text-sm text-gray-500">No</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FAQ; 