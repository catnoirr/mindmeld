import React from 'react';
import CentralGovScheme from './components/centralgovScheme';
import SidePanel from './components/sidepanel';
import StateGovSchemes from './components/stategovScheme';

export default function CentralSubsidiesPage() {
  return (
    <div className="  bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 
    dark:to-gray-800">
      <div className="">
        {/* <SidePanel /> */}
      </div>
      <div className=""> {/* Added padding bottom for footer */}
        <CentralGovScheme />
        <StateGovSchemes />
      </div>
      
    </div>
  );
}
