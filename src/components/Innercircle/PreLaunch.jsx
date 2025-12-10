import React from 'react';
import { Phone } from 'lucide-react';

export default function PreLaunch() {
  return (
    <div className="pt-15   pb-8 bg-[#F2FFFB] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-[#F2FFFB] ">
        <div className="text-center mb-8">
          <p className="text-[#333333] fw500 inter-tight text-sm  tracking-wider uppercase mb-4">
            Exclusive Pre-Launch Advantage
          </p>
          <h3 className="dm-serif-italic text-[#000000CC] text-[36px] leading-[1.3]" >
            Secure 3 premium estate plots for INR 2 Cr under
            Inner Circle's limited pre-launch window.
          </h3>

        </div>


        <div className="mb-12 mt-12">
          <div className="flex justify-between items-center mb-4 pb-1">
            <span className="text-[#00000080]  inter-tight text-[18px] fw500">Standard Price for 3 plots</span>
            <span className="text-gray-400 inter-tight text-[26px] line-through">INR 2.10 Cr</span>
          </div>
          
          <div className="flex justify-between items-center pb-6 border-b border-gray-300">
            <span className="text-[#00000080] inter-tight text-[18px] fw500">Pre-Launch Price for 3 plots</span>
            <div className="text-right">
              <p className="inter-tight text-[26px]">INR ₹2 Cr</p>
              <p className="inter-tight text-[14px]">(all-inclusive)</p>
            </div>
          </div>
        </div>

        <div className="text-center ">
          <p className="text-[28px] dm-serif-italic" >
            INR 10L Immediate Savings
          </p>
        </div>;

        <p className="text-[#625E59E5] text-[20px] text-center leading-relaxed mb-12 max-w-[718px] mx-auto">
          A limited, one-time opportunity to enter at this bracket. With a uniquely structured
          investment product and finite availability, secure a private appointment to step in
          as an investor.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-8 py-4 rounded transition-all duration-300">
            <span className="tracking-wider uppercase text-sm">Book a Private Consultation</span>
          </button>
          <button className="bg-emerald-800 hover:bg-emerald-900 text-white p-4 rounded transition-all duration-300">
            <Phone className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}