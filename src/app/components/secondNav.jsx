"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);
  const closeTimeoutRef = useRef(null);
  const router = useRouter();

  // Menu items configuration with icons
  const menuItems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About us',
      path: '/about',
    },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Govt-Subsidies',
          subItems: [
            {
              name: 'Central Subsidies',
              path: '/central-subsidies'
            },
            {
              name: 'State Subsidies',
              path: '/state-subsidies'
            }
          ]
        },
        {
          name: 'Zed-Certification',
          path: 'zed-certification',
          subItems: []
        },
        {
          name: 'E-Commerce',
          path: 'ecommerce',
          subItems: []
        },
      ]
    },
    {
      name: 'Contact us',
      path: '/contact-us',
    },
    {
      name: 'Work with us',
      path: '/workwithus',
    },
  ];

  const handleMouseEnter = (itemName) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setHoveredDropdown(itemName);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredDropdown(null);
    }, 150); // Small delay before closing
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className=" bg-white flex  py-4 lg:py-0  ">
      <div className="flex justify-center items-center flex-shrink-0 lg:px-10 px-4 ">
         {/* Logo */}
         <div className="flex-shrink-0">
              <button onClick={() => router.push('/')} className="flex items-center">
                <Image 
                  src="/mindmeldlogo.png" 
                  alt="Mind Meld Logo"
                  width={45} 
                  height={45} 
                  className="w-[45px] h-[45px] sm:w-[50px] sm:h-[45px] object-contain transition-transform hover:scale-105"
                  priority
                />
                <div className="flex flex-col items-start justify-start space-y-0">
                <span className="ml-2 text-xl sm:text-2xl font-semibold text-blue-800">Mind <span className="text-blue-300">Meld</span></span>
                <p className="text-xs ml-2 text-gray-500">Business Consulting</p>
                </div>
               

              </button>
            </div>
      </div>
      <div className="lg:border w-full">

      
      {/* Top bar with contact info */}
      <div className="border-b border-gray-300/30 py-5 text-sm hidden md:block">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between gap-2 sm:gap-6 text-gray-700 text-xs sm:text-sm overflow-hidden">
            <div className="flex flex-wrap justify-between gap-2 sm:gap-6 text-gray-700 text-xs sm:text-sm overflow-hidden">
            <span className="whitespace-nowrap">mindmeldplc@gmail.com</span>
            <span className="border-l border-gray-400/50 pl-2 sm:pl-6 whitespace-nowrap">+91887230494</span>
            <span className="border-l border-gray-400/50 pl-2 sm:pl-6 whitespace-nowrap">Mon-Sat 9am-6pm</span>
            </div>
            
            <div>
            <span className="border-l border-gray-400/50 pl-2 sm:pl-6 whitespace-nowrap">English</span>

            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="backdrop-blur-sm  relative z-40">
        <div className=" px-4 sm:px-6 lg:px-5 ">
          <div className="flex justify-end lg:justify-start h-16 items-center   border-red-700 ">
           

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center ">
              <div className="flex space-x-4">
                {menuItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => {
                        if (!item.hasDropdown) {
                          router.push(item.path);
                        }
                      }}
                      className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-150 group"
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <svg
                          className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${
                            hoveredDropdown === item.name ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                    {item.hasDropdown && hoveredDropdown === item.name && (
                      <div
                        className="absolute left-0 w-56 mt-0 pt-0"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                          <div className="py-1">
                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                              <div key={dropdownIndex} className="relative group/sub">
                                <button
                                  onClick={() => {
                                    if (dropdownItem.subItems && dropdownItem.subItems.length > 0) {
                                      setExpandedItem(expandedItem === dropdownItem.name ? null : dropdownItem.name);
                                    } else {
                                      router.push(dropdownItem.path);
                                      setHoveredDropdown(null);
                                    }
                                  }}
                                  className="flex items-center justify-between w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                  <span>{dropdownItem.name}</span>
                                  {dropdownItem.subItems && dropdownItem.subItems.length > 0 && (
                                    <svg 
                                      className={`h-4 w-4 transform transition-transform duration-200 ${
                                        expandedItem === dropdownItem.name ? 'rotate-90' : ''
                                      }`} 
                                      fill="none" 
                                      viewBox="0 0 24 24" 
                                      stroke="currentColor"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  )}
                                </button>
                                {dropdownItem.subItems && dropdownItem.subItems.length > 0 && expandedItem === dropdownItem.name && (
                                  <div className="pl-4 py-1 bg-white">
                                    {dropdownItem.subItems.map((subItem, subIndex) => (
                                      <button
                                        key={subIndex}
                                        onClick={() => {
                                          router.push(subItem.path);
                                          setHoveredDropdown(null);
                                        }}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                      >
                                        {subItem.name}
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
             
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden bg-white">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors duration-200"
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-5">
                  <span 
                    className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                      isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-2'
                    }`}
                  />
                  <span 
                    className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                      isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span 
                    className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                      isMenuOpen ? '-rotate-45 translate-y-0.5' : 'translate-y-2'
                    }`}
                  />
                </div>
              </button>
            </div>
            {/* <div className="ml-8 pl-6 border-l border-gray-400/30 h-6  items-center hidden md:flex">
                <button 
                  className="flex items-center text-gray-700 hover:text-gray-900 font-medium group"
                  onClick={() => router.push('/queries')}
                >
                  
                  <span>Queries</span>
                </button>
              </div> */}
          </div>
        </div>
      </nav>
      </div>

          {/* Mobile Navigation Popover */}
          <div 
        className={`md:hidden fixed inset-0 z-50 ${
              isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
          >
            {/* Backdrop */}
            <div 
              className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Popover Panel */}
            <div 
          className={`fixed top-0 right-0 h-full w-[280px] bg-white transform transition-all duration-300 ease-in-out ${
                isMenuOpen 
                  ? 'translate-x-0 opacity-100 shadow-2xl' 
                  : 'translate-x-full opacity-0'
              }`}
            >
              {/* Menu Container */}
          <div className="h-full w-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center space-x-2">
                    <Image src="/logo.png" alt="Logo" width={24} height={24} className="w-6 h-6" />
                    <span className="text-lg font-semibold text-gray-800">Mind Meld</span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto py-2">
                  {menuItems.map((item, index) => (
                    <div key={index}>
                      <button
                        onClick={() => {
                          if (item.hasDropdown) {
                            setServicesDropdownOpen(!servicesDropdownOpen);
                          } else {
                            router.push(item.path);
                            setIsMenuOpen(false);
                          }
                        }}
                        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors duration-150"
                      >
                        <div className="flex items-center">
                          {item.name}
                        </div>
                        {item.hasDropdown && (
                          <svg
                            className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${
                              servicesDropdownOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </button>
                      {item.hasDropdown && servicesDropdownOpen && (
                        <div className="bg-gray-50">
                          {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                            <div key={dropdownIndex}>
                              <button
                                onClick={() => {
                                  if (dropdownItem.subItems && dropdownItem.subItems.length > 0) {
                                    setExpandedItem(expandedItem === dropdownItem.name ? null : dropdownItem.name);
                                  } else {
                                    router.push(dropdownItem.path);
                                    setIsMenuOpen(false);
                                    setServicesDropdownOpen(false);
                                  }
                                }}
                                className="flex items-center justify-between w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                <span>{dropdownItem.name}</span>
                                {dropdownItem.subItems && dropdownItem.subItems.length > 0 && (
                                  <svg 
                                    className={`h-4 w-4 transform transition-transform duration-200 ${
                                      expandedItem === dropdownItem.name ? 'rotate-90' : ''
                                    }`} 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                )}
                              </button>
                              {dropdownItem.subItems && dropdownItem.subItems.length > 0 && expandedItem === dropdownItem.name && (
                                <div className="bg-gray-100">
                                  {dropdownItem.subItems.map((subItem, subIndex) => (
                                    <button
                                      key={subIndex}
                                      onClick={() => {
                                        router.push(subItem.path);
                                setIsMenuOpen(false);
                                setServicesDropdownOpen(false);
                              }}
                                      className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                            >
                                      {subItem.name}
                            </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
    </header>
  );
};

export default Navbar;
