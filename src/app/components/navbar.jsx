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
      icon: (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      name: 'About us',
      path: '/about',
      icon: (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      icon: (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Work with us',
      path: '/workwithus',
      icon: (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Others',
      path: '/other-services',
      icon: (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
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
    <header className="border bg-white">
      {/* Top bar with contact info */}
      <div className="border-b border-gray-300/30 py-5 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-end gap-2 sm:gap-6 text-gray-700 text-xs sm:text-sm overflow-hidden">
            <span className="whitespace-nowrap">mindmeldplc@gmail.com</span>
            <span className="border-l border-gray-400/50 pl-2 sm:pl-6 whitespace-nowrap">+91887230494</span>
            <span className="border-l border-gray-400/50 pl-2 sm:pl-6 whitespace-nowrap">Mon-Sat 9am-6pm</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="backdrop-blur-sm bg-white relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button onClick={() => router.push('/')} className="flex items-center">
                <Image src="/mindmeldlogo.png" alt="Logo" width={32} height={32} className="sm:w-[40px] sm:h-[40px]" />
                <span className="ml-2 text-lg sm:text-2xl font-semibold text-blue-800">Mind <span className="text-blue-300">Meld</span></span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
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
                      <span className="text-gray-400 group-hover:text-gray-600">{item.icon}</span>
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
              <div className="ml-8 pl-8 border-l border-gray-400/30 h-6 flex items-center">
                <button 
                  className="flex items-center text-gray-700 hover:text-gray-900 font-medium group"
                  onClick={() => router.push('/queries')}
                >
                  <svg className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Queries</span>
                </button>
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
          </div>
        </div>
      </nav>

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
                          {item.icon}
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
