'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

export default function CompliancesPage() {
  const services = [
    {
      title: "GST Compliances",
      description: "Comprehensive GST services including registration, filing, and auditing",
      image: "/incometax/gst.png",
      color: "from-blue-500/20 to-blue-600/20",
      hoverBg: "hover:bg-blue-50",
      services: [
        "GST Registration Services",
        "GST Return Filing (GSTR-1B,3B)",
        "GST Annual Return",
        "GST Refunds",
        "GST Assessment and Appeals",
        "Reconciliation of GST Regulatory GST Audit"
      ],
      link: "/income-tax-regulatory-compliances/gst-compliances"
    },
    {
      title: "Income Tax & TDS",
      description: "Complete income tax and TDS compliance solutions",
      image: "/incometax/incometax.png",
      color: "from-emerald-500/20 to-emerald-600/20",
      hoverBg: "hover:bg-emerald-50",
      services: [
        "Application of PAN/TAN",
        "Income Tax & TDS/TCS Return Filing",
        "Income Tax Assessment",
        "Income Tax Refunds",
        "Income Tax Litigation and Appeals",
        "Statutory Audit under Income Tax Act",
        "Form 15CA, 15CB"
      ],
      link: "/income-tax-regulatory-compliances/income-tax-compliances"
    },
    {
      title: "MCA Compliances",
      description: "Professional MCA compliance and registration services",
      image: "/incometax/mca.png",
      color: "from-purple-500/20 to-purple-600/20",
      hoverBg: "hover:bg-purple-50",
      services: [
        "Incorporation of Company/ LLP/ Firm",
        "Statutory Audits",
        "ROC Compliances",
        "KYC of Directors/ DIN",
        "Annual Filing of Company With ROC-e",
      ],
      link: "/income-tax-regulatory-compliances/mca-compliances"
    },
    {
      title: "NGO/Trust Compliances",
      description: "Specialized compliance services for NGOs and Trusts",
      image: "/incometax/ngo.png",
      color: "from-orange-500/20 to-orange-600/20",
      hoverBg: "hover:bg-orange-50",
      services: [
        "Preparation of Pre-incorporation Docs",
        "Registration Services",
        "Filing Returns and NGO (Tax free & Annual)",
        "FCRA Compliances"
      ],
      link: "/income-tax-regulatory-compliances/ngo-trust-compliances"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Expert Solutions
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-6 mb-4">
            Regulatory Compliances
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive compliance solutions to keep your business aligned with regulatory requirements
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group bg-white rounded-2xl shadow-md ${service.hoverBg} transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col`}
            >
              {/* Image and Title Section */}
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-200 text-sm">{service.description}</p>
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <div className={`rounded-xl bg-gradient-to-br ${service.color} p-4 mb-4`}>
                  <ul className="space-y-2">
                    {service.services.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 text-gray-700">
                        <FaCheck className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={service.link}
                  className="group/button relative mt-auto flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-200 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover/button:opacity-100 transition-opacity duration-200`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative text-sm font-medium text-gray-900 group-hover/button:text-gray-800">
                    Learn More
                  </span>
                  <FaArrowRight className="relative w-4 h-4 text-gray-600 group-hover/button:text-gray-800 group-hover/button:translate-x-1 transition-all duration-200" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
