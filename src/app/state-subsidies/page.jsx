import React from 'react';

const StateSubsidies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Punjab Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exclusive Fiscal Benefits for Setting Up Industry in Punjab
          </h1>
          <p className="text-xl text-gray-600">
            Under Invest Punjab Scheme
          </p>
        </div>

        {/* Punjab General Subsidy Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            General Subsidy for All New Industry
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Punjab Government as a Part of the "Punjab Industrial and Business Development Policy 2022" 
              is Providing the following incentives to the New Industries being set up in the State:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Reimbursement of 100% of net SGST for 7 years from the commercial production date with a cap of 100% of FCI.</li>
              <li>Exemption from 100% Electricity Duty for 7 years.</li>
              <li>Exemption/Reimbursement from Stamp Duty</li>
            </ul>
          </div>
        </div>

        {/* Punjab Additional Subsidy Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Additional Subsidy for Thrust Sector
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              The Punjab Government has Defined Certain Industries as Thrust sectors (Defined in Annexure – A) 
              for which Punjab government is providing additional financial support:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">Capital Subsidy Upto Rs 50 Lakhs</span>
                <ul className="list-disc pl-6 mt-2">
                  <li>50% in Border districts, Kandi areas, Aspirational Districts and District Bathinda, Faridkot, Mansa, Muktsar, Sangrur, Malerkotla, Barnala</li>
                  <li>20% in other Districts</li>
                </ul>
              </li>
              <li>SGST and Electricity Duty benefit defined above will be provided for 10 Years instead of 7 Years.</li>
              <li>Exemption/Reimbursement from CLU-EDC Fees</li>
            </ul>
          </div>
        </div>

        {/* Punjab IT/ITES Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Benefits for Setting Up IT/ITES Industry
          </h2>
          <div className="prose max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-blue-700">
                Additional Benefit of 50% of FCI subject ceiling of INR 2.5 Crores
              </p>
            </div>
            <p className="text-gray-600 mb-4">
              IT and ITES industry comprises of:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                IT Software and ITES companies
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                AVGC (Animation, Visual Effects, Gaming and Comics) Units
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                BPO, Call centres
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Internet and E-mail Service Providers
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                E-commerce and EDI Services
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Electronic Data Centre Services
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Knowledge based industries
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Professional services using ICT resources
              </li>
            </ul>
          </div>
        </div>

        {/* Haryana Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exclusive Fiscal Benefits for Central Government Scheme
          </h1>
        </div>

        {/* Haryana General Subsidy Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            General Subsidy for All New Industry
          </h2>
          
          {/* Electricity Duty */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Electricity Duty Exemption</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>100% Exemption for 12 years in 'D' category blocks</li>
              <li>10 years in 'C' category blocks</li>
              <li>7 years in 'B' category blocks</li>
            </ul>
          </div>

          {/* SGST Reimbursement */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Reimbursement of net SGST</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">'D' Category</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>75% of net SGST for first 10 years</li>
                  <li>35% for next 3 years</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">'C' Category</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>75% of net SGST for first 7 years</li>
                  <li>35% for next 3 years</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">'B' Category</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>50% of net SGST for first 5 years</li>
                  <li>25% for next 3 years</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Special Category (Women/SC/ST)</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>75% of net SGST for first 7 years</li>
                  <li>35% for next 3 years in 'B', 'C' and 'D' category blocks</li>
                  <li>Cap of 150% of FCI for woman/SC/ST led micro</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Other Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Exemption from Stamp Duty</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>100% refund in 'D' category blocks</li>
                <li>75% in 'C' category blocks</li>
                <li>60% in 'B' category blocks on the land meant for industrial use</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Exemption/Reimbursement from CLU/EDC</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>100% exemption from in 'D' category blocks</li>
                <li>75% in 'C' category blocks</li>
                <li>60% in 'B' category blocks</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Employment Generation Subsidy</h3>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-gray-700">
                  For capacity building of persons belonging to Haryana:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                  <li>SC/Women: Subsidy @ INR 36,000/- per year</li>
                  <li>General Category: INR 30,000/- per year</li>
                  <li>Valid for 7 years in 'B' 'C' & 'D' category blocks</li>
                  <li>Requires direct employment on payroll or contract with valid ESI/PF Number</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Haryana Additional Subsidy Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Additional Subsidy for Thrust Sector
          </h2>
          <p className="text-gray-600 mb-6">
            The Haryana Government has defined certain Industries as Thrust sectors (Defined in Annexure – B) 
            for which the government is providing additional financial support.
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Capital Subsidy</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>15% maximum of Rs. 20 lakh for Micro Enterprises</li>
                <li>Maximum of Rs. 25 lakhs for Women/SC</li>
                <li>Applicable on investment made on Plant & Machinery and building</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Interest Subsidy</h3>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-gray-700">
                  7% for Micro Enterprises on term loan or maximum up to Rs. 8.00 lakh per year for 7 years
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Central Government Schemes Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Incentives Available Pan India – Centre Sponsored/Center-State Partnership
          </h2>

          <div className="space-y-8">
            {/* PMEGP */}
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                I. Prime Minister's Employment Generation Programme (PMEGP)
              </h3>
              <p className="text-gray-700">
                Under this Central Government scheme, any individual or HUF setting up a new industry 
                can avail of a subsidy of ₹17.5 Lakhs.
              </p>
            </div>

            {/* Cluster Development */}
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                II. Cluster Development Programme
              </h3>
              <p className="text-gray-700 mb-4">
                This program involves creating tangible assets as Common Facility Centers (CFCs) in Industrial Estates. 
                The total share of central and state incentives ranges from 80-90% of the project cost.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">a. General Funding Pattern</h4>
                  <div className="overflow-x-auto shadow">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">Component</th>
                          <th className="bg-gray-50 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan="2">Total Project Cost</th>
                        </tr>
                        <tr>
                          <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                          <th className="bg-gray-50 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Government of India</th>
                          <th className="bg-gray-50 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">State Government</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">CFC</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹5 Crore to ₹10 Crore</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">70%</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">CFC</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹10 Crore to ₹30 Crore</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">60%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">b. Special Funding Pattern</h4>
                  <p className="text-sm text-gray-600 mb-2">(for projects in Aspirational Districts, NER, Hill States, and Islands)</p>
                  <div className="overflow-x-auto shadow">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">Component</th>
                          <th className="bg-gray-50 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan="2">Total Project Cost</th>
                        </tr>
                        <tr>
                          <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                          <th className="bg-gray-50 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Government of India</th>
                          <th className="bg-gray-50 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">State Government</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">CFC</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹5 Crore to ₹10 Crore</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">80%</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">CFC</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹10 Crore to ₹30 Crore</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">70%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Agri/Food Processing Sector */}
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                III. Central Government Subsidies for Agri/Food Processing Sector
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">1. Prime Minister's Kisan Sampada Yojana</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Assistance: 50% of the eligible project cost, up to ₹5 Crore</li>
                    <li>Minimum Eligible Project Cost: ₹3 Crore</li>
                    <li>Condition: Units must be set up in Mega Food Parks and Agro-Processing Clusters</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">2. Integrated Cold Chain & Value Addition Infrastructure</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Grant: Applicable for technical civil works and eligible plant & machinery</li>
                    <li>Maximum Grant: ₹10 Crore</li>
                    <li>Applicable Subsidy in Punjab: 50%</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">3. National Agriculture Infrastructure Financing Facility (NAIF)</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Eligible Sector: Food and Agro-Processing Industries</li>
                    <li>Credit Guarantee: For loans up to ₹2 Crore</li>
                    <li>Interest Subvention: 3% p.a., limited to ₹2 Crore per project in one location</li>
                    <li>Convergence: Scheme allows integration with central or state government schemes</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">4. PM Formalization of Micro Food Processing Enterprises (PMFME)</h4>
                  <p className="text-gray-700">
                    Subsidy: ₹10 Lakh per unit for both existing and new food processing units
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Support Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Additional Support
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <p className="text-gray-700">
              Several subsidies are available across various sectors. For assistance in starting a new business 
              or expanding an existing one, please contact us using the information below.
            </p>
            <div className="mt-4">
              <a href="/contact-us" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateSubsidies;
