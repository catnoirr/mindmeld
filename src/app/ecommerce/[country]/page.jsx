'use client';

import { useParams } from 'next/navigation';
import { 
  FaBuilding,
  FaFileInvoice,
  FaGlobe,
  FaIndustry,
  FaFileContract,
  FaHandshake,
  FaBalanceScale,
  FaFileAlt,
  FaMoneyBillWave,
  FaChartLine,
  FaShieldAlt,
  FaClipboardCheck,
  FaUserTie,
  FaFileSignature,
  FaRegFileAlt,
  FaIdCard,
  FaSearchDollar,
  FaRegAddressCard,
  FaFileArchive,
  FaRecycle
} from 'react-icons/fa';

const getIcon = (title) => {
  const iconMap = {
    // UAE Services
    'Indirect Tax (VAT) Registration & Return Filing': FaFileInvoice,
    'Importer on Record (IOR) Service': FaGlobe,
    'Dubai Municipality Product Registration': FaClipboardCheck,
    'Trade License in UAE': FaFileContract,
    'Company Formation Services': FaBuilding,
    'Trademark Registration in UAE': FaShieldAlt,

    // KSA Services
    'Indirect Tax (VAT) Registration & Return Filing': FaFileInvoice,
    'Importer on Record (IOR) Service': FaGlobe,
    'Product Certification and Compliance': FaClipboardCheck,
    'Saudi Arabia Zakat and Tax Filing': FaMoneyBillWave,

    // Germany Services
    'Indirect Tax (VAT) Registration & Return Filing': FaFileInvoice,
    'Importer on Record (IOR) Service': FaGlobe,
    'EPR (Extended Producer Responsibility) Registration': FaRecycle,
    'Customs and Import Compliance Advisory': FaShieldAlt,

    // USA Services
    'USFDA Registration': FaClipboardCheck,
    'MOCRA Registration': FaShieldAlt,
    'Foreign Entity Creation': FaBuilding,
    'FSSAI, APEDA, CRES Certification': FaFileContract,
    'Labelling and Packaging Compliance': FaFileAlt,
    'FDA and State-Level Permits': FaIdCard,

    // UK Services
    'Indirect Tax (VAT) Registration & Return Filing': FaFileInvoice,
    'Other UK Compliances': FaShieldAlt,
    'Customs and Import Compliance Advisory': FaGlobe,
    'Product Certification and Compliance': FaClipboardCheck,

    // Other Services
    'United States of America (USA)': FaFileAlt,
    'Canada': FaGlobe,
    'European Union (EU) Countries': FaFileContract,
    'United Kingdom (UK)': FaClipboardCheck,
    'Singapore': FaShieldAlt
  };
  
  return iconMap[title] || FaFileAlt;
};

const countryData = {
  "uae": {
    title: "United Arab Emirates (UAE)",
    description: "We provide comprehensive consultancy services to help businesses establish and grow in the UAE market. Our expert team specializes in key areas such as indirect tax registration, company formation, product registration, and more.",
    services: [
      {
        title: "Indirect Tax (VAT) Registration & Return Filing",
        description: "Indirect tax registration and filing are mandatory for sellers and importers from India or any other country wishing to sell their products in the Middle East region. We assist businesses with VAT registration and ensure timely and accurate VAT return filings, keeping you compliant with the UAE tax authorities."
      },
      {
        title: "Importer on Record (IOR) Service",
        description: "For shipments exceeding 1,000 AED in value, an Importer on Record (IOR) service is required. We help you handle the IOR process smoothly, ensuring that your imports are compliant with UAE regulations."
      },
      {
        title: "Dubai Municipality Product Registration",
        description: "Certain products, especially food and cosmetics, require registration with the Dubai Municipality. Our team assists with the registration process, based on the specific HSN codes of the products, ensuring that your products meet local regulatory standards."
      },
      {
        title: "Trade License in UAE",
        description: "Obtaining a trade license is a mandatory step for anyone wishing to do business or market products in the UAE. We guide you through the process of acquiring a trade license that suits your business needs, whether it's for a mainland company, a free zone, or an offshore entity."
      },
      {
        title: "Company Formation Services",
        description: "Whether you're looking to set up a mainland company, a free zone company, or an offshore company, we provide end-to-end company formation services. We help Indian sellers and businesses set up their operations in the UAE, ensuring a smooth and legally compliant process."
      },
      {
        title: "Trademark Registration in UAE",
        description: "Protect your brand with trademark registration in the UAE. We help businesses register their trademarks, ensuring that your intellectual property is safeguarded within the region. This service is essential for businesses looking to build and protect their brand identity in the UAE."
      }
    ]
  },
  "ksa": {
    title: "Kingdom of Saudi Arabia (KSA)",
    description: "Expert consultancy services to help businesses enter and thrive in the Saudi Arabian market. We provide comprehensive support for VAT registration, product compliance, and tax regulations.",
    services: [
      {
        title: "Indirect Tax (VAT) Registration & Return Filing",
        description: "For sellers and importers from India or any other country wishing to sell products in the Saudi Arabian market, VAT registration and return filing are mandatory. Our team assists you with the VAT registration process and ensures the timely filing of VAT returns, helping you stay compliant with Saudi tax regulations and avoid penalties."
      },
      {
        title: "Importer on Record (IOR) Service",
        description: "The Importer on Record (IOR) service is not required for every shipment. However, businesses involved in shipments must comply with customs clearance procedures and ensure they have the necessary import/export permits. If your shipment is part of an industrial operation, your company must be registered with the relevant authorities. We guide your business in understanding when IOR is needed, ensuring compliance with local regulations and customs procedures."
      },
      {
        title: "Product Certification and Compliance",
        description: "Certain products sold in Saudi Arabia must meet specific standards and certifications to ensure compliance with local safety and quality regulations. We assist with obtaining necessary certifications for your products, such as SASO (Saudi Standards, Metrology and Quality Organization) certifications, ensuring your products meet local market requirements."
      },
      {
        title: "Saudi Arabia Zakat and Tax Filing",
        description: "In addition to VAT, businesses operating in Saudi Arabia must comply with local zakat and tax filing requirements. We assist with zakat and income tax registration, preparation, and filing, helping your business maintain compliance with the Kingdom's tax laws."
      }
    ]
  },
  "germany": {
    title: "Germany",
    description: "Comprehensive business services for the German market. We provide expert guidance on VAT registration, customs compliance, and environmental regulations to help businesses successfully operate in Germany and the EU.",
    services: [
      {
        title: "Indirect Tax (VAT) Registration & Return Filing",
        description: "For sellers and importers from India or any other country wishing to sell products in the EU, VAT registration and return filing are mandatory. Our team guides you through the VAT registration process in Germany and ensures timely filing of VAT returns, helping you maintain compliance with EU tax regulations."
      },
      {
        title: "Importer on Record (IOR) Service",
        description: "Importer on Record (IOR) services are required for all shipments entering Germany. As the IOR, we ensure that the entire import process complies with German customs regulations, including the payment of customs duties, VAT, and any other applicable charges. Our IOR services give you peace of mind that your goods are imported in full compliance with German law."
      },
      {
        title: "EPR (Extended Producer Responsibility) Registration",
        description: "EPR registration in Germany is a requirement for producers, importers, and distributors of packaging, electronics, and batteries. Compliance with EPR ensures that your company meets Germany's recycling and waste management laws. We assist you with the registration process, helping you avoid penalties and fulfil your environmental responsibilities."
      },
      {
        title: "Customs and Import Compliance Advisory",
        description: "We offer expert advisory services on all aspects of customs compliance for businesses importing goods into Germany. This includes ensuring proper classification of products, handling customs duties, and understanding all import regulations to streamline the customs clearance process and avoid delays or fines."
      }
    ]
  },
  "usa": {
    title: "United States of America (USA)",
    description: "Expert guidance for US market entry and compliance. We provide comprehensive support for FDA registrations, regulatory compliance, and business establishment to help businesses successfully enter and operate in the US market.",
    services: [
      {
        title: "USFDA Registration",
        description: "USFDA registration is a mandatory requirement for businesses that sell foods, medical devices, or drugs in the US market. We assist you with the USFDA registration process, ensuring that your products comply with all relevant regulations and are cleared for sale in the US."
      },
      {
        title: "MOCRA Registration",
        description: "The Modernization of Cosmetics Regulation Act (MOCRA) requires cosmetic products sold in the US to comply with safety standards, proper labelling, and ingredient disclosure. We help cosmetic businesses with MOCRA registration and ensure that your products are compliant with US regulations, reducing the risk of penalties or product recalls."
      },
      {
        title: "Foreign Entity Creation",
        description: "We assist foreign sellers and importers, especially from India and other countries, with creating their own companies in the USA. Our services help resolve FEMA (Foreign Exchange Management Act) compliance issues, handle taxes efficiently, and ensure that your business is properly established under US law."
      },
      {
        title: "FSSAI, APEDA, CRES Certification",
        description: "For Indian exporters looking to enter the US market, certifications like FSSAI, APEDA, and CRES are essential. These certifications ensure that your products meet Indian safety and quality standards, which are recognized by US authorities and customers, enhancing the credibility of your business."
      },
      {
        title: "Labelling and Packaging Compliance",
        description: "To ensure your products meet US market standards, we provide services related to labelling and packaging compliance. We make sure that your product labels, ingredients lists, and packaging meet the regulatory requirements set forth by US authorities, reducing the risk of non-compliance."
      },
      {
        title: "FDA and State-Level Permits",
        description: "In addition to federal regulations, some states in the US have their own specific regulations. We help ensure compliance with both FDA requirements and state-level permits and licenses, depending on your business activities and location."
      }
    ]
  },
  "uk": {
    title: "United Kingdom (UK)",
    description: "Comprehensive services for UK market operations. We provide expert guidance on VAT registration, customs compliance, and regulatory requirements to help businesses successfully establish and operate in the UK market.",
    services: [
      {
        title: "Indirect Tax (VAT) Registration & Return Filing",
        description: "For sellers and importers from India or any other country wishing to sell products in the UK, VAT registration and return filing are mandatory. We guide you through the VAT registration process, ensuring that your business is compliant with UK tax laws. Our team also ensures the timely and accurate filing of VAT returns to avoid penalties and ensure smooth operations."
      },
      {
        title: "Other UK Compliances",
        description: "We assist with various UK compliances including customs and import procedures to help navigate duties and taxes, company formation services for setting up UK entities, data protection and GDPR compliance to protect customer data, and employment law guidance covering contracts, wages and tax requirements. Our team ensures your business stays fully compliant with all relevant UK regulations."
      },
      {
        title: "Customs and Import Compliance Advisory",
        description: "We offer comprehensive advisory services to ensure that your imports are fully compliant with UK customs regulations. From tariff classification to customs duties and handling paperwork, our team ensures smooth clearance for your goods without delays or fines."
      },
      {
        title: "Product Certification and Compliance",
        description: "Certain products may require certifications or approvals before being sold in the UK, such as CE marking for safety. Our experts assist with navigating the certification processes, ensuring your products meet UK and EU standards."
      }
    ]
  },
  "other": {
    title: "Other Labelling Compliance Services",
    description: "Specialized labelling compliance services for various international markets. We ensure your products meet the specific labelling requirements and standards for each target market.",
    services: [
      {
        title: "United States of America (USA)",
        description: "We ensure that your product labels meet US regulatory standards, including FDA labelling requirements for food, drugs, medical devices, and cosmetics. We assist with ingredient disclosure, nutritional information, safety warnings, and other mandatory label elements as per US law."
      },
      {
        title: "Canada",
        description: "Our team helps ensure your products meet Canadian labelling standards, which include bilingual labelling (English and French), as well as compliance with health, safety, and environmental information on the packaging. We assist in making sure your products are ready for the Canadian market without risk of non-compliance."
      },
      {
        title: "European Union (EU) Countries",
        description: "We provide expert advice on meeting EU labelling requirements, including multilingual labels, ingredient disclosure, health and safety warnings, and adherence to specific regulations like the European Food Information Regulation (EU FIC) and Cosmetics Regulation (EC) No 1223/2009. We help you navigate the complexities of the EU market, ensuring compliance with every country's individual labelling requirements."
      },
      {
        title: "United Kingdom (UK)",
        description: "We guide businesses through the process of ensuring that their product labels comply with UK regulations. This includes requirements for food and drink labels, cosmetic products, and medical devices, while also ensuring that your labels meet the standards set by UK authorities post-Brexit."
      },
      {
        title: "Singapore",
        description: "Our team helps ensure that your product labels comply with Singapore's regulatory requirements. This includes compliance with the Health Sciences Authority (HSA) for medical devices, food safety standards, and labelling of products such as cosmetics. We ensure your products are ready for distribution in the Singaporean market, meeting all legal requirements."
      }
    ]
  }
};

export default function CountryPage() {
  const params = useParams();
  const country = params.country;
  const data = countryData[country];

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Country Not Found</h1>
          <p className="text-gray-600">The requested country information is not available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-[#4338CA] text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{data.title}</h1>
            <p className="text-xl text-blue-100 text-left">{data.description}</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.map((service, index) => {
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