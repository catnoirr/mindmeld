'use client';
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaCloudUploadAlt } from 'react-icons/fa';

export default function WorkWithUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    document: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      document: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className=" lg:py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-[#9AADC4] to-[#E2EAEE] ">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Section - Contact Information */}
          <div className="md:col-span-4 rounded-lg px-8 flex flex-col justify-between space-y-12">
            
            <div className="space-y-6 py-12 lg:py-10">
            <h1 className="text-4xl font-bold mb-8">Work With Us</h1>

              <div className="flex  space-x-4">
                <div className="p-3 border-2 rounded-xl w-12 h-12">
                  <FaPhone className=" text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-gray-600">Mon-Fri from 8am to 5pm</p>
                  <a href="tel:+918872304094" className="font-semibold">+918872304094</a>
                </div>
              </div>

              <div className="flex  space-x-4">
                <div className="p-3 border-2 rounded-xl  w-12 h-12">
                  <FaEnvelope className=" text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Chat to us</h3>
                  <p className="text-gray-600">Our team is here to help</p>
                  <a href="mailto:mindmeldplc@gmail.com" className="font-semibold">mindmeldplc@gmail.com</a>
                </div>
              </div>

              <div className="flex  space-x-4 ">
                <div className="p-3 border-2 rounded-xl  w-12 h-12">
                  <FaMapMarkerAlt className=" text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Visit Us</h3>
                  <p className="text-gray-600">Come say hello at our office</p>
                  <p className="font-semibold">
                  Mindmeld Management Consulting Private Limited
                  Old GT Road, Near Jalandhar Byepass, Opposite Old Sabzi Mandi, Ludhiana, Punjab, 141001
                  </p>
                </div>
              </div>

            
            </div>
            <div className="flex space-x-4  justify-center ">
                <a href="#" className=" p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                  <FaFacebookF className="text-2xl text-white " />
                </a>
                <a href="#" className=" p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                  <FaTwitter className="text-2xl text-white" />
                </a>
                <a href="#" className=" p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                  <FaLinkedinIn className="text-2xl text-white" />
                </a>
                <a href="#" className=" p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                  <FaInstagram className="text-2xl text-white " />
                </a>
              </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="md:col-span-8 bg-[#0A3147] text-white md:rounded-3xl rounded-t-3xl  p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8">"Let's work together!"</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-transparent border-b border-gray-400 focus:border-white outline-none placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="offxsagr@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-transparent border-b border-gray-400 focus:border-white outline-none placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-transparent border-b border-gray-400 focus:border-white outline-none placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-transparent border-b border-gray-400 focus:border-white outline-none placeholder-gray-400"
                  required
                />
              </div>

              <div className="mt-8">
                <p className="mb-2">Upload Document</p>
                <p className="text-sm text-gray-400 mb-4">Upload your resume here</p>
                <div className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center">
                  <div className="flex flex-col items-center">
                    <FaCloudUploadAlt className="text-4xl mb-4" />
                    <p className="mb-4">Select and upload your resume</p>
                    <label className="bg-transparent border-2 border-white px-6 py-2 rounded-lg cursor-pointer hover:bg-white hover:text-[#0A3147] transition-colors">
                      Browse File
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-300 text-[#0A3147] py-4 rounded-3xl font-semibold hover:bg-white transition-colors mt-8"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
