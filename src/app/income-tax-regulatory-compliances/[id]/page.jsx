'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { 
  FaFileInvoice, 
  FaFileAlt, 
  FaMoneyBillWave, 
  FaFileContract, 
  FaBalanceScale, 
  FaSearchDollar,
  FaIdCard,
  FaCalculator,
  FaChartLine,
  FaHandHoldingUsd,
  FaGavel,
  FaFileSignature,
  FaGlobe,
  FaBuilding,
  FaClipboardCheck,
  FaUserTie,
  FaRegFileAlt,
  FaFileArchive,
  FaHandshake,
  FaRegAddressCard,
  FaRegCopy,
  FaRegMoneyBillAlt
} from 'react-icons/fa';

const getIcon = (title) => {
  const iconMap = {
    // GST Services
    'GST Registration Services': FaFileInvoice,
    'GST Return Filing': FaFileAlt,
    'GST Refunds': FaMoneyBillWave,
    'Surrendering of GST Registration': FaFileContract,
    'GST Litigation and Appeals': FaBalanceScale,
    'GST Audit': FaSearchDollar,
    
    // Income Tax Services
    'Application of PAN/TAN': FaIdCard,
    'Income Tax & TDS/TCS Return Filing': FaCalculator,
    'Income Tax Assessment': FaChartLine,
    'Income Tax Refunds': FaHandHoldingUsd,
    'Income Tax Litigation and Appeals': FaGavel,
    'Statutory Audit under Income Tax Act': FaFileSignature,
    'Form 15CA, 15CB': FaGlobe,
    
    // MCA Services
    'Incorporation of Company/ LLP/ Firm': FaBuilding,
    'Statutory Audits': FaClipboardCheck,
    'ROC Compliances': FaUserTie,
    'KYC of Directors/ DIN': FaRegAddressCard,
    'Annual Filing of Company With ROC-e': FaRegFileAlt,
    
    // NGO Services
    'Preparation of Pre-incorporation Docs': FaFileArchive,
    'Registration Services': FaHandshake,
    'Filing Returns and NGO (Tax free & Annual)': FaRegCopy,
    'FCRA Compliances': FaRegMoneyBillAlt
  };
  
  return iconMap[title] || FaFileAlt;
};

const complianceData = {
  'gst-compliances': {
    title: "GST Compliances",
    description: "Comprehensive GST services including registration, filing, and auditing",
    services: [
      {
        title: "GST Registration Services",
        description: "Assisting with smooth and timely GST registration for businesses."
      },
      {
        title: "GST Return Filing",
        description: "We handle the filing of GST returns, including GSTR-1, GSTR-3B, GSTR-9, and GSTR-9C, ensuring accurate and timely submission."
      },
      {
        title: "GST Refunds",
        description: "We assist in claiming and processing GST refunds for eligible businesses."
      },
      {
        title: "Surrendering of GST Registration",
        description: "We manage the process of surrendering GST registration when required."
      },
      {
        title: "GST Litigation and Appeals",
        description: "Providing expert support in GST-related legal matters, including litigation and appeals."
      },
      {
        title: "GST Audit",
        description: "Conducting thorough audits to ensure that your GST filings are accurate and compliant."
      }
    ]
  },
  'income-tax-compliances': {
    title: "Income Tax & TDS",
    description: "Complete income tax and TDS compliance solutions",
    services: [
      {
        title: "Application of PAN/TAN",
        description: "Assistance in obtaining PAN and TAN registrations."
      },
      {
        title: "Income Tax & TDS/TCS Return Filing",
        description: "Professional handling of all income tax and TDS/TCS return filings."
      },
      {
        title: "Income Tax Assessment",
        description: "Expert support during income tax assessments and proceedings."
      },
      {
        title: "Income Tax Refunds",
        description: "Assistance in claiming and tracking income tax refunds."
      },
      {
        title: "Income Tax Litigation and Appeals",
        description: "Professional representation in tax litigation and appeals."
      },
      {
        title: "Statutory Audit under Income Tax Act",
        description: "Comprehensive statutory audit services under the Income Tax Act."
      },
      {
        title: "Form 15CA, 15CB",
        description: "Professional assistance with foreign remittance certifications."
      }
    ]
  },
  'mca-compliances': {
    title: "MCA Compliances",
    description: "Professional MCA compliance and registration services",
    services: [
      {
        title: "Incorporation of Company/ LLP/ Firm",
        description: "Complete assistance in business entity registration and incorporation."
      },
      {
        title: "Statutory Audits",
        description: "Comprehensive statutory audit services for companies."
      },
      {
        title: "ROC Compliances",
        description: "Handling all ROC compliance requirements and filings."
      },
      {
        title: "KYC of Directors/ DIN",
        description: "Assistance in director KYC and DIN-related matters."
      },
      {
        title: "Annual Filing of Company With ROC-e",
        description: "Professional handling of annual ROC filings and compliance."
      }
    ]
  },
  'ngo-trust-compliances': {
    title: "NGO/Trust Compliances",
    description: "Specialized compliance services for NGOs and Trusts",
    services: [
      {
        title: "Preparation of Pre-incorporation Docs",
        description: "Assistance in preparing all pre-incorporation documentation."
      },
      {
        title: "Registration Services",
        description: "Complete NGO and Trust registration services."
      },
      {
        title: "Filing Returns and NGO (Tax free & Annual)",
        description: "Professional handling of NGO returns and tax exemption filings."
      },
      {
        title: "FCRA Compliances",
        description: "Expert assistance with FCRA compliance and reporting."
      }
    ]
  }
};

export default function ComplianceDetails() {
  const pathname = usePathname();
  const id = pathname.split('/').pop();

  const compliance = complianceData[id];

  if (!compliance) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-red-600">Service not found</h1>
          <p className="mt-2">The requested compliance service could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-[#4338CA] text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">
              {compliance.title}
            </h1>
            <p className="text-xl text-blue-100">
              {compliance.description}
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {compliance.services.map((service, index) => {
            const Icon = getIcon(service.title);
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
