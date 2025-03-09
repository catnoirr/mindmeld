import React from 'react'

export default function page() {
  return (
    <div className='bg-[#f8fafc] min-h-screen py-12'>
      <div className='text-5xl font-bold px-12 py-4'>
        <h1>Financial Incentives For <span className='text-[#0a4d68]'>ZED</span> Certification</h1>
      </div>
      <div className='grid gap-8 px-12 py-12'>
        {/* First Incentive */}
        <div className='bg-white p-8 rounded-2xl shadow-sm'>
          <div className='flex gap-6 items-start'>
            <div className='bg-[#0a4d68] text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shrink-0'>
              1
            </div>
            <p className='text-[1.2rem] leading-relaxed'>
              Financial Assistance Of Freight Subsidy Of Rs. 20,00,000 To The Export Oriented Units - The Units Will Get A Reimbursement Of 1% Of FOB Or Actual Freight Charges From Place Of Factory Till Indian Port, Whichever Is Less Subject To A Maximum Of Rs. 20 Lakhs P.A. Under The Invest Punjab Policy, 2022. This File Is Submitted On A Yearly Basis After The End Of The Financial Year.
            </p>
          </div>
        </div>

        {/* Second Incentive */}
        <div className='bg-white p-8 rounded-2xl shadow-sm'>
          <div className='flex gap-6 items-start'>
            <div className='bg-[#0a4d68] text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shrink-0'>
              2
            </div>
            <p className='text-[1.2rem] leading-relaxed'>
              Rs. 50,000/- At Each Level Of ZED Certification (Bronze, Silver, Gold) For ISO Certification (NABCB)/ BIS Certificate/ Testing Services From NABL Laboratories.
            </p>
          </div>
        </div>

        {/* Third Incentive */}
        <div className='bg-white p-8 rounded-2xl shadow-sm'>
          <div className='flex gap-6 items-start'>
            <div className='bg-[#0a4d68] text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shrink-0'>
              3
            </div>
            <p className='text-[1.2rem] leading-relaxed'>
              For Those Upgrading To Silver Or Gold Status, A Subsidy Of Up To INR 3,00,000 Is Available For The Acquisition Of Machinery/Equipment
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
