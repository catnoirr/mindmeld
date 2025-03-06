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
              <a href="mailto:Mindmeld@gmail.Com" className="hover:text-gray-200">Mindmeld@gmail.Com</a>
            </p>
            <p className="flex items-start text-sm sm:text-base">
              <FaMapMarkerAlt className="mr-2 text-lg mt-1 flex-shrink-0" />
              <span className="break-words">Office Of Priwani Brand, Plot, Sarna, Kujal 140516 INDIA, Sector 82, Mohali, Sahibzada, Punjab, 140516</span>
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-xl font-semibold mb-3 sm:mb-4">Links</h3>
          <ul className="space-y-2 sm:space-y-3 text-base sm:text-base">
            <li>
              <Link href="/faqs" className="hover:text-gray-200 cursor-pointer">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-gray-200 cursor-pointer">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-gray-200 cursor-pointer">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/work-with-us" className="hover:text-gray-200 cursor-pointer">
                Work With Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-200 cursor-pointer">
                Services
              </Link>
            </li>
            <li>
              <Link href="/certification" className="hover:text-gray-200 cursor-pointer">
                Certification
              </Link>
            </li>
          </ul>
        </div>

        {/* Investment Disclosure Section */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-xl font-semibold mb-3 sm:mb-4">Investment Disclosure</h3>
          <p className="text-sm sm:text-base leading-relaxed">
            You are more than a number; you are a partner. As a partner with us, you can access opportunities usually reserved only for the largest institutional investors. You can expect to benefit from our deep experience and results. You can access real estate investment opportunities designed with you in mind.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20">
        <p className="text-center text-xs sm:text-sm">Mind Meld @ All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
