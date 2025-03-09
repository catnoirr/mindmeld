const Checklist = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold text-indigo-900 mb-6">
        Check List (APC) - Initial Application
      </h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-20">Sl No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Particulars</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" rowSpan="16">01</td>
              <td className="px-6 py-4 text-sm text-gray-900">Detailed Project Report - DPR</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Indicating financial and technical profile of the entity</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Domain expertise available with the entity</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Raw material availability in the area where project is proposed to be set up</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Arrangements for procurement of raw material</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Marketing strategy of proposed products</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Process flow diagram of proposed products with production capacity per day</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Technology proposed for various activities in process line</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Financial estimates with key financial parameters</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Profit and Loss statement</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Estimated employment generation from the project (direct as well as indirect)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Number of farmers estimated to be benefited etc</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Status of availability of land</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Potential investors for food processing units in the cluster</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Proposed level of investment including the estimated project cost</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">The number and type of food processing units along with complete details</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02</td>
              <td className="px-6 py-4 text-sm text-gray-900">A detailed Appraisal Note, specific to the scheme, from a Scheduled Commercial Bank.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03</td>
              <td className="px-6 py-4 text-sm text-gray-900">Bio-data / background / experience of the entity relevant to the scheme.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">04</td>
              <td className="px-6 py-4 text-sm text-gray-900">In-Principle / Final term loan sanction from a Bank.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05</td>
              <td className="px-6 py-4 text-sm text-gray-900">Certificate of Incorporation, Memorandum and Article of Association, Bye laws, Partnership Deed, TAN</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">06</td>
              <td className="px-6 py-4 text-sm text-gray-900">PAN Card of Company</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">07</td>
              <td className="px-6 py-4 text-sm text-gray-900">SC / ST Caste certificate (If applicable)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">08</td>
              <td className="px-6 py-4 text-sm text-gray-900">Registered Sale Deed / Lease deed (Lease Period 30 years) - English Version</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">09</td>
              <td className="px-6 py-4 text-sm text-gray-900">Change in Land Use (CLU)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
              <td className="px-6 py-4 text-sm text-gray-900">Quotations (which include ITC (HS) Code, Product Description, Quantity, Basic Cost, GST) from Original Equipment Manufacturer or its authorized dealer / supplier</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">11</td>
              <td className="px-6 py-4 text-sm text-gray-900">Annual reports and Audited Financial Statement of Accounts of for last two years</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12</td>
              <td className="px-6 py-4 text-sm text-gray-900">Net worth Certificate by CA / Statutory Auditor (Appendix - III)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">13</td>
              <td className="px-6 py-4 text-sm text-gray-900">CA / Statutory Auditor Certificate (Appendix - IV)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">14</td>
              <td className="px-6 py-4 text-sm text-gray-900">Correspondences (emails / letters) for possible forward or backward linkages.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15</td>
              <td className="px-6 py-4 text-sm text-gray-900">Proof of submission of Fee</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Important Note Section */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-red-600 mb-4">Important Note</h4>
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-20">01</td>
              <td className="px-6 py-4 text-sm text-gray-900">All above documents must be submitted through online duly Self-attested by applicant.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02</td>
              <td className="px-6 py-4 text-sm text-gray-900">Land must be in the name of applicant.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03</td>
              <td className="px-6 py-4 text-sm text-gray-900">Proposal should contain an index as first page & all pages of documents must be properly numbered.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Checklist; 