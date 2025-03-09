import React from 'react';

export default function HumanResourcesAndInstitution() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-800 mb-4">
            Human Resources and Institution
          </h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        {/* Scheme Overview Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Scheme Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-gray-600 font-medium w-48">Sponsoring Authority:</span>
                <span className="text-gray-800">MoFPI (Ministry of Food Processing Industries)</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-600 font-medium w-48">Effective Date:</span>
                <span className="text-gray-800">1st April, 2017</span>
              </div>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Introduction</h3>
            <p className="text-gray-600">
              The Ministry of Food Processing Industries (MoFPI) extends financial assistance as grant- in-aid to various institutions/universities, Public funded organizations and recognized R&D laboratories both in public and private sector, to promote and undertake demand driven R&D work in the field of Food Processing Sector for product and process development, design and development of equipment, improved storage, shelf-life, packaging etc.
            </p>
          </div>

          {/* Objectives Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Objectives</h3>
            <p className="text-gray-600">
              Objective of the scheme is that the end product / outcome / findings of R&D work should benefit Food Processing Industry in terms of product and process development, improved preservation, packaging, storage and distribution technologies, value addition, standardization of additives, coloring agents, preservatives, pesticide residues, etc. with focus on enhancement of production, quality, consumer safety, public health and trade.
            </p>
          </div>

          {/* Eligible Purposes Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Eligible Purposes</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>Ministry supports research proposals preferably of applied nature with commercial value resulting in development of innovative products, processes and manufacturing practices, which lead to development of food processing industry in the country.</li>
              <li>Preference would be given to those R&D project proposals which are beneficial for SMEs and farmers, use outcome/findings of previous R&D projects and are intended towards its commercialization.</li>
              <li>There should be an industrial partner associated with the project. The R&D projects would be carried out in collaboration with the industrial partner, which can take up/ purchase/ commercialize outcome of the project.</li>
            </ul>
          </div>

          {/* Pattern of Assistance Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Pattern of Assistance</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-700 mb-3">For the Government organizations/universities/institutions:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>100% cost of equipment, consumables and expenditure related to Junior Research Fellow/Senior Research Fellow /Research Associate (JRF/SRF/RA).</li>
                <li>The emoluments for JRF/SRF/RA engaged in the MOFPI's R&D projects will be governed as per the norms of applicant institution / but not exceeding scale laid down for the respective post by DST, ICAR, CSIR etc.</li>
                <li>Lump sum provision up-to Rs.1 Lakh for TA/ DA for project related travel like survey, data/sample collection, etc.</li>
                <li>Institutional Charges equal to 10% of project cost subject to maximum of Rs. 3 lakh for non-academic institutions and Rs. 5 Lakh for academic institutions.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-700 mb-3">For the Private organizations/universities/institutions:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>50% of equipment cost in general areas</li>
                <li>70% of equipment cost in difficult areas</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                100% Grant is provided for the Ministry's sponsored projects, restricted only to public funded organizations of repute, in the cases of cutting-edge areas of research leading to development of innovative products, processes, manufacturing practices and technology.
              </p>
            </div>
          </div>

          {/* Release of Funds Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Release of Funds</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-700 mb-2">1st Instalment:</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>100% of the approved cost of equipment</li>
                  <li>50% of the approved cost towards JRF/ SRF/ RA</li>
                  <li>50% of the approved cost towards consumables</li>
                  <li>50% of the approved institutional charges will be released</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-700 mb-2">2nd Instalment:</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>40% of the approved cost towards JRF/SRF/RA</li>
                  <li>40% of the approved cost towards consumables</li>
                  <li>40% of the approved cost towards TA/DA</li>
                  <li>40% of the approved institutional charges will be released</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-700 mb-2">3rd Instalment:</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>10% of the approved cost towards JRF/SRF/RA</li>
                  <li>10% of the approved cost towards consumables</li>
                  <li>10% of the approved cost towards TA/DA</li>
                  <li>10% of the approved institutional charges will be released</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tenure Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Tenure & Progress Report</h3>
            <p className="text-gray-600">
              The tenure of a project would normally be 3 years or less as proposed by the investigator.
            </p>
          </div>

          {/* Obligations Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Obligations of Principal Investigator</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>The sanctioned research scheme must commence within 4 months from the date of receipt of the sanction letter of first instalment.</li>
              <li>It is mandatory for the PI/Co-PI to come to the Progress Review Presentation when invited to present the progress of the work done on the scheme.</li>
              <li>Submission of the final project completion report (ANNEXURE-C) within 5 months of completion of the project.</li>
              <li>Claim for any dues must be made immediately.</li>
            </ul>
          </div>

          {/* Independent Evaluation Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Independent Annual Evaluation</h3>
            <p className="text-gray-600">
              Ministry may undertake evaluation of the project (s) through a 3rd party having requisite expertise in the matter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 