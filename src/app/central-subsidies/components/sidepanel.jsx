"use client"
import React, { useState } from 'react';

const SidePanel = () => {
  const [isCentralOpen, setIsCentralOpen] = useState(true);
  const [isStateOpen, setIsStateOpen] = useState(true);

  const centralSchemes = [
    'MOFPI',
    'APEDA',
    'NABARD',
    'NLM',
    'NHB',
    'NHM',
    'NSCL',
    'SFAC',
    'Ministry of Textiles',
    'MSME',
    'NFDB',
    'Ministry of New & Renewable Energy'
  ];

  const stateSchemes = [
    'Andhra Pradesh',
    'Telangana',
    'Maharastra',
    'Madhya Pradesh',
    'Karnataka',
    'Chhattisgarh',
    'Orissa'
  ];

  return (
    <div className="w-64  bg-gradient-to-b from-gray-50 to-white shadow-lg p-4 h-full">
      <h2 className="text-xl font-bold mb-4">Industrial Subsidies</h2>
      
      <div className="mb-4">
        <div 
          className="flex justify-between items-center p-2 bg-blue-800 text-white  cursor-pointer rounded-md"
          onClick={() => setIsCentralOpen(!isCentralOpen)}
        >
          <span className="font-medium">Central Govt Schemes</span>
          <span className="text-xl">{isCentralOpen ? '−' : '+'}</span>
        </div>
        {isCentralOpen && (
          <ul className="mt-2 space-y-2">
            {centralSchemes.map((scheme, index) => (
              <li key={index} className="pl-4 py-1 text-gray-700 hover:text-gray-900">{scheme}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="mb-4">
        <div 
          className="flex justify-between items-center p-2 bg-blue-800 text-white  cursor-pointer rounded-md"
          onClick={() => setIsStateOpen(!isStateOpen)}
        >
          <span className="font-medium">State Govt Schemes</span>
          <span className="text-xl">{isStateOpen ? '−' : '+'}</span>
        </div>
        {isStateOpen && (
          <ul className="mt-2 space-y-2">
            {stateSchemes.map((scheme, index) => (
              <li key={index} className="pl-4 py-1 text-gray-700 hover:text-gray-900">{scheme}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SidePanel;
