"use client";
import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div >
      <div className=" h-64 bg-[#073952] ">
        <div className="flex flex-col  items-end justify-center h-full p-8">
          <h1 className="text-white text-3xl font-bold">Contact Us</h1>
          <p className="text-gray-400 text-sm">Reach Out—We’re Here to Help</p>
        </div>
      </div>

      <div className="md:max-w-7xl mx-auto md:px-4 sm:px-6 lg:px-8 py-12 relative top-[-113px] ">
        <div className="flex flex-col md:flex-row  overflow-hidden">
          {/* left - Contact Information */}
          <div className="md:w-[500px] bg-gradient-to-br from-[#E2EAEE] to-[#9AADC4] p-8 text-gray-800 md:rounded-2xl  md:rounded-br-none rounded-b-none  bg-white">
            <h2 className="text-xl font-semibold mb-2 text-center ">
              CONTACT INFORMATION
            </h2>
            <p className="text-xs text-gray-600 mb-8 italic text-center">
              "SPEAK WITH US DIRECTLY FOR ANY ASSISTANCE."
            </p>

            <div className="space-y-6 py-10">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="space-y-3">
                  <p className="font-medium text-lg ">
                    Phone Number: +91887230494
                  </p>
                  <p className="font-medium text-lg ">
                    Alternate Number: +919815081610
                  </p>
                  <p className="text-lg text-gray-600">
                    Available: Monday to Saturday,
                  </p>
                  <p className="text-lg text-gray-600">9:00 AM — 6:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-lg">mindmeldplc@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-lg">Office Address:</p>
                  <p className="text-lg text-gray-600">
                    Mindmeld Management Consulting Private Limited
                    Old GT Road, Near Jalandhar Byepass, Opposite Old Sabzi Mandi, Ludhiana, Punjab, 141001
                  </p>
                  
                </div>
              </div>
            </div>
          </div>

          {/* right - Contact Form */}
          <div className="flex-1 rounded-t-3xl  md:border-none md:shadow-none relative top-[-40px] md:top-0 bg-white">
            <div className="md:flex justify-between items-center px-4 md:px-5 py-4 md:py-5 bg-[#073952] hidden">
              <div>
                <p className="text-white">Follow us</p>
              </div>
              <div className="flex gap-4">
                <FaFacebook className="text-white cursor-pointer" />
                <FaInstagram className="text-white cursor-pointer" />
              </div>
            </div>
            <div className="p-10 md:p-20">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="space-y-6">
                  <label
                    htmlFor="name"
                    className="block lg:text-sm text-lg font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 border-b sm:text-sm outline-none"
                    required
                  />
                </div>

                <div className="space-y-6">
                  <label
                    htmlFor="email"
                    className="block lg:text-sm text-lg font-medium text-gray-700 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 border-b sm:text-sm outline-none"
                    required
                  />
                </div>

                <div className="space-y-6">
                  <label
                    htmlFor="subject"
                    className="block lg:text-sm text-lg font-medium text-gray-700 "
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 border-b sm:text-sm outline-none"
                    required
                  />
                </div>

                <div className="space-y-6">
                  <label
                    htmlFor="message"
                    className="block lg:text-sm text-lg font-medium text-gray-700 "
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 border-b sm:text-sm outline-none"
                      required
                  />
                </div>

                <div className="space-y-6">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-4 px-4 bg-[#073952]  border-transparent rounded-full border border-black text-sm text-white   font-semibold hover:bg-[#354953] hover:text-white"
                  >
                    Send 
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:h-40 h-10 border-t-2 border-gray-300 flex justify-between">
        <div className="relative top-[-50px]">
          <img src="/b1.png" alt="" className="lg:w-full lg:h-full h-20  w-30"  />
        </div>
        <div className="relative top-[-50px]">
            <img src="b2.png" alt="" className="lg:w-full lg:h-full h-20  w-30" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
