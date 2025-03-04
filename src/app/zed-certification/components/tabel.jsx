import React from 'react';
import './tabel.css';

const certificationData = [
  { id: 1, parameter: 'Leadership', bronze: true, silver: true, gold: true },
  { id: 2, parameter: 'Swachh Workplace', bronze: true, silver: true, gold: true },
  { id: 3, parameter: 'Occupational (Workplace) Safety', bronze: true, silver: true, gold: false },
  { id: 4, parameter: 'Measurement of Timely Delivery', bronze: true, silver: true, gold: false },
  { id: 5, parameter: 'Quality Management', bronze: true, silver: true, gold: false },
  { id: 6, parameter: 'Human Resource Management', bronze: true, silver: false, gold: false },
  { id: 7, parameter: 'Daily Works Management', bronze: true, silver: false, gold: true },
  { id: 8, parameter: 'Planned Maintenance & Calibration', bronze: true, silver: false, gold: false },
  { id: 9, parameter: 'Process Control', bronze: true, silver: false, gold: false },
  { id: 10, parameter: 'Product Quality & Safety (Testing/Certification)', bronze: true, silver: false, gold: true },
  { id: 11, parameter: 'Material Management', bronze: true, silver: false, gold: false },
  { id: 12, parameter: 'Energy Management', bronze: false, silver: false, gold: true },
  { id: 13, parameter: 'Environment Management', bronze: false, silver: false, gold: true },
  { id: 14, parameter: 'Measurement and Analysis', bronze: false, silver: false, gold: true },
  { id: 15, parameter: 'Supply Chain Management', bronze: false, silver: false, gold: true },
  { id: 16, parameter: 'Risk Management', bronze: false, silver: false, gold: true },
  { id: 17, parameter: 'Waste Management (Muda, Mura, Muri)', bronze: false, silver: false, gold: true },
  { id: 18, parameter: 'Technology Selection & Upgradation', bronze: false, silver: false, gold: true },
  { id: 19, parameter: 'Natural Resource Conservation', bronze: false, silver: false, gold: true },
  { id: 20, parameter: 'Corporate Social Responsibility', bronze: false, silver: false, gold: true },
];

const ZEDCertificationTable = () => {
  return (
    <div className="table-container">
      <table className="certification-table">
        <thead>
          <tr>
            <th className="serial-col">S. No.</th>
            <th className="parameter-col">Parameters</th>
            <th className="level-col">Bronze</th>
            <th className="level-col">Silver</th>
            <th className="level-col">Gold</th>
          </tr>
        </thead>
        <tbody>
          {certificationData.map((row) => (
            <tr key={row.id}>
              <td className="serial-col">{row.id}</td>
              <td className="parameter-col">{row.parameter}</td>
              <td className={`level-col ${row.bronze ? 'filled' : ''}`}></td>
              <td className={`level-col ${row.silver ? 'filled' : ''}`}></td>
              <td className={`level-col ${row.gold ? 'filled' : ''}`}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ZEDCertificationTable;
