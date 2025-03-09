'use client'
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#4338CA] text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-xl font-semibold mb-3 sm:mb-4">Contact</h3>
          <div className="space-y-3 sm:space-y-2">
            <p className="flex items-center text-sm sm:text-base">
              <FaPhone className="mr-2 text-lg flex-shrink-0" />
              <a href="tel:+918872304094" className="hover:text-gray-200">+918872304094</a>
            </p>
           
            <p className="flex items-center text-sm sm:text-base">
              <FaPhone className="mr-2 text-lg flex-shrink-0" />
              <a href="tel:+919815081610" className="hover:text-gray-200">+919815081610</a>
            </p>
            <p className="flex items-center text-sm sm:text-base">
              <FaEnvelope className="mr-2 text-lg flex-shrink-0" />
              <a href="mailto:Mindmeld@gmail.Com" className="hover:text-gray-200">Mindmeldplc@gmail.com</a>
            </p>
            <p className="flex items-start text-sm sm:text-base">
              <FaMapMarkerAlt className="mr-2 text-lg mt-1 flex-shrink-0" />
              <span className="break-words">Mindmeld Management Consulting Private Limited
              Old GT Road, Near Jalandhar Byepass, Opposite Old Sabzi Mandi, Ludhiana, Punjab, 141001</span>
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-xl font-semibold mb-3 sm:mb-4">Quick Links</h3>
          <ul className="space-y-2 sm:space-y-3 text-base sm:text-base">
            <li>
              <Link href="/" className="hover:text-gray-200 cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <div >
                Services
              </div>
              <ul className="ml-4 mt-2 space-y-2">
               
                <li>
                  <Link href="/zed-certification" className="hover:text-gray-200 cursor-pointer">
                    MSME Sustainable (ZED) Certification
                  </Link>
                </li>
                <li>
                  <Link href="/central-subsidies" className="hover:text-gray-200 cursor-pointer">
                    Government Subsidies and Grant
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-gray-200 cursor-pointer">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-200 cursor-pointer">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Info Section */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-xl font-semibold mb-3 sm:mb-4">Mind Meld Consulting</h3>
          <p className="text-sm sm:text-base leading-relaxed">
            Mindmeld Management Consulting offers expert financial and consulting services, including virtual CFO, accounting, and bookkeeping for offshore clients, regulatory clearances, and startup support. Specializing in tax, GST, subsidies, and trusts, we help businesses thrive with tailored, efficient solutions.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20">
        <p className="text-center text-xs sm:text-sm">© {new Date().getFullYear()} Mind Meld Consulting. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
