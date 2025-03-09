import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "Whether by-products of the slaughter house can be a raw material to establish a separate meat processing unit under CEFPPC scheme?",
      answer: "By-products of the slaughter house (except non-food items viz. feathers, bone meal, tail, hides, horns, hoofs etc.) can be utilized as raw material to establish a meat processing unit under CEFPPC scheme."
    },
    {
      question: "Clarify the term Modern Rice Milling and specific requirements of Modern Rice Mill in order to be eligible under the scheme?",
      answer: "Modern rice milling is the process of manufacturing finished, unbroken and polished rice (for marketing) from raw paddy by using latest technologies. The cost of plant & machinery and technical civil work in this regard are eligible for grants-in-aid under CEFPPC scheme."
    },
    {
      question: "CLU is not required in States like Uttar Pradesh for establishing industrial unit or to use land for industrial purposes.",
      answer: "If CLU is not required for establishing industrial unit in the concerned State, then while applying under CEFPPC Scheme, a copy of order issued by the State Government for the same needs to be submitted."
    },
    {
      question: "As per Para 16(8) of the scheme guidelines, the second installment of 50% grant-in-aid will be released after commencement of commercial production by the unit. In this reference, you are requested to clarify clearly if the second installment of the 50% grant can be used to repay the bridge loan obtained by the unit for the completion of the project?",
      answer: "For claiming second installment of grants-in-aid (GIA), the project implementing agency (PIA) should submit all the requisite documents mentioned at Para 16(8) of the CEFPPC scheme guidelines dated 08.06.2022 for reimbursement of 2nd and final installment of GIA after completion of the project. Such payment will be released only on reimbursement basis i.e. PIA should have spent the full amount and completed the project. Therefore, this Ministry has no objection in utilising the second installment of GIA towards repayment of bridge loan."
    },
    {
      question: "Whether establishing apple cider (containing 5% alcohol and 35% to 90% apple juice) manufacturing unit in a Mega Food Park approved by MoFPI is eligible for availing grants-in-aid under CEFPPC Scheme?",
      answer: "As per Para 2(m) of the CEFPPC Scheme guidelines dated 08.06.2022, carbonated drinks / beverages containing fruit juice/ pulp (more than 5% in case of lime/ lemon) and more than 10% in case of other fruits) will be considered for financial assistance under the Scheme. A maximum of two (2) units in a Mega Food Park (MFP) and one (1) unit in Agro-Processing Cluster (APC) can be sanctioned under this category."
    },
    {
      question: "Whether alcoholic beverages manufacturing unit is eligible for availing grants-in-aid under CEFPPC Scheme?",
      answer: "No. Alcoholic beverage manufacturing units are not eligible for grants-in-aid as per the CEFPPC scheme Guidelines dated 08-06-2022."
    },
    {
      question: "Whether MoFPI under CEFPPC Scheme, supports expansion of Cold Storage capacity for a sea food processing factory?",
      answer: "As per the CEFPPC scheme guidelines dated 08-06-2022, this Ministry does not support setting up / expansion of standalone cold storage."
    },
    {
      question: "Some plant & machineries are fabricated at project site by procuring stores, spares and other equipment. In such case, who will issue unique machinery number for the fabricated P&M?",
      answer: "As regard to the branded plant & machinery / equipment, Unique Machinery Number are provided by the manufacturing company itself. However, for fabricated plant & machinery, a certificate of CE (Mechanical) on the quality / performance of such P&M must be submitted. PIA should prefer to install P&M manufactured by Original Equipment Manufacturer (OEM)."
    },
    {
      question: "If loan is taken against P&M only, electrical and civil work will be constructed through own source - is there any problem?",
      answer: "PIA has to ensure that, of the total project cost, at least 20% is through term loan."
    },
    {
      question: "How many perishable units should be set up in an Agro Processing Cluster out of minimum 5 food processing units?",
      answer: "No such stipulation is there in APC Scheme guidelines."
    },
    {
      question: "Whether the projects, where work has been started and some invoices were received but bank loan is not sanctioned, be disqualified or only the expenses will be disallowed which are incurred prior to the date of sanction of proposal? Ministry may allow the investment after date of EoI from Own contribution as well as Bank loan before sanction of project under CEFPPC scheme.",
      answer: "The expenditure incurred on the project before approval / sanction of the proposal by the Ministry under CEFPPC Scheme will not be considered as eligible project cost for working out the GIA. However, if sanctioned, the expenditure incurred on the project from the date of sanction of proposal will be taken into account for calculating eligible project cost and GIA. The invoices for the tasks performed earlier to the date of sanction of the proposal by the Ministry will not be considered for assessing eligible project cost vis-à-vis grants-in-aid. However, they may be required by the Ministry for verification."
    },
    {
      question: "Whether Search and Valuation report prior to EOI date mentioned in the appraisal report of the project will be considered under CEFPPC scheme?",
      answer: "A detailed appraisal report (indicating all the financial parameters) of the proposal should be from a Scheduled Commercial Bank and should be prior to the date of EOI."
    },
    {
      question: "Can one promoter simultaneously apply for same project under both the schemes viz. Cold Chain and CEFPPC unit scheme?",
      answer: "Yes"
    },
    {
      question: "For awarding marks under priority sector, whether the category is decided on the basis of raw material or finished products?",
      answer: "The priority of the sector is based on perishability of raw materials used in the food processing unit. Marks will be accordingly awarded."
    },
    {
      question: "Whether awarding marks for the investment on eligible project cost is assessed either by including GST or excluding GST irrespective with the eligible components / items? Whether the grants-in-aid will be calculated on net amount or including GST. Since GST on civil cost is not eligible for set-off under GST Act, whether GST on civil work is eligible for grants?",
      answer: "For awarding marks for investment on eligible project cost, the value of the items (i.e. eligible P&M or TCW) without GST will be considered, as taxes are ineligible item for eligible project cost calculation vis-à-vis grants-in-aid calculation under CEFPPC Scheme."
    },
    {
      question: "Turnover for F.Y. 2020-21 (which is already audited) will be considered or F.Y. 2021-22 (unaudited) will be considered for marking?",
      answer: "For awarding marks, audited turnover of the applicant firm will be considered. However, in case of fresh provisional balance sheet turn over, it should be certified by a Statutory Auditor of the company."
    },
    {
      question: "whether term loan sanction and appraisal note from a Non-Scheduled Co-op Bank will be allowed as it is also controlled by RBI?",
      answer: "A detailed appraisal report (indicating all the financial parameters) of the proposal should be from a Scheduled Commercial Bank. However, term loan for the project may be availed either from a Scheduled Commercial Bank or a Government controlled financial institution or a Non-Banking Financial Company approved by RBI."
    },
    {
      question: "No second proposal from an entity or promoter(s) of an entity who have availed grant-in-aid earlier under the scheme will be considered. What does promoter(s) means?",
      answer: "In this context, promoter(s) means an individual in case of a proprietorship concern or a partner/ shareholder of a firm or a Director (with share holding) or persons with direct/ indirect control of the company."
    },
    {
      question: "What will be the form of promoters contribution-Equity share, preference share, Reserve & surplus, unsecured loan from promoters / shareholders?",
      answer: "Promoter(s) contribution includes Equity, Share, Reserve & Surplus and Internal accruals."
    },
    {
      question: "In case of expansion project and having sufficient equity & internal accruals, is it mandatory to infuse fresh 20% equity?",
      answer: "Yes, 20% fresh equity should be infused for expansion components of the existing unit."
    },
    {
      question: "Can private limited company, who has not started commercial operations apply for the grants-in-aid based on the net-worth of promoter/ Directors/ shareholder combined?",
      answer: "Private Limited Company which has not started commercial operation will be considered as new and the net worth of the promoter(s)/ director(s)/ share holder(s) will be considered to assess the combined net worth as per Appendix-I."
    },
    {
      question: "The works related to the proposed unit can be started before the sanction of the proposal by using the fund from promoter's contribution? For start of such work, can Ministry accord permission?",
      answer: "No. The Ministry cannot accord permission to start the works related to the proposed unit before the sanction of the proposal under the scheme."
    },
    {
      question: "If import LC is issued before approval of the proposal by the Ministry, will the amount of LC be excluded for assessment of the eligible cost of the project?",
      answer: "Yes"
    },
    {
      question: "If the promoter has allotted work to an agency on Turn-Key basis who don't manufacture any machines and that agency mentions the model and make of machines then whether the same is allowed?",
      answer: "Yes, a project can be set up on turnkey basis. However, invoices have to be from OEM or authorized dealers in the name of project implementation agency."
    },
    {
      question: "As per Annexure-VIII of the CEFPPC Scheme guidelines dated 08.06.2022, it is mentioned that in the event of Bank recovering its loan liabilities from the promoter in case of default, the bank shall refund to the Govt. grant in proportion of its own dues. Due to this clause, bank has denied to sanction term loan for the project.",
      answer: "Clarification in this regard will be issued subsequently."
    },
    {
      question: "Establishing Animal Feed manufacturing unit outside Mega Food Parks/ Agro Processing Clusters is allowed under CEFPPC scheme.",
      answer: "No. However, Animal Feed manufacturing unit is allowed under MFPs / APCs approved by this Ministry from time to time."
    },
    {
      question: "A company which has availed benefits under one central scheme for establishing a food processing unit, is the same unit is eligible to obtain benefits under CEFPPC scheme?",
      answer: "Clarification in this regard will be issued subsequently."
    },
    {
      question: "A company which has availed benefits under PLI scheme is eligible to obtain benefits under CEFPPC scheme?",
      answer: "Clarification in this regard will be issued subsequently."
    },
    {
      question: "Spices are covered under which priority sector in relation to award of marks?",
      answer: "Spices are semi-perishable and, hence, they are covered under Consumer products."
    },
    {
      question: "Would two or more eligible sectors belonging units be eligible to set up at one premises with CEFPPC grant-in-aid e.g. are cashew nut processing and cold pressed oil units eligible under CEFPPC scheme? If yes, would both the units be set up in one land parcel under the CEFPPC scheme as single project?",
      answer: "Setting up of Cashew nut processing unit and cold pressed oil units are eligible under CEFPPC scheme. However, both the processing units cannot be set up under one single project"
    },
    {
      question: "Is project proposed to be set up in State Notified ITDP (Integrated Tribal Development Projects) areas are eligible for grants in aid @50%?",
      answer: "Project proposed to be set up in ITDP (Integrated Tribal Development Projects) areas notified by Ministry of Tribal Affairs, Government of India are eligible for grants in aid @ 50% of eligible project cost, subject to meeting other conditions of scheme guidelines"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-indigo-900">FAQ's</h3>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-start space-x-3">
              <span className="flex-shrink-0 bg-indigo-100 text-indigo-800 font-medium px-2.5 py-0.5 rounded-full text-sm">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="space-y-2">
                <h4 className="text-gray-900 font-medium">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 