import React from 'react';
// import { Phone, FileCheck, TrendingUp, Shield, Award } from 'lucide-react';
import Legalicon from '../../images/icons/legal.png';
import Growthicon from '../../images/icons/growth.png';
import Managementicon from '../../images/icons/handsfree.png';
import Backingicon from '../../images/icons/dual.png';

const InvestmentZone = () => {
  const features = [
    {
      icon: Legalicon,
      title: "Legal Assurance",
      subtitle: "Verified. Transparent. Zero Risk.",
      content: "100% clear titles, full ownership documents, and all approvals."
    },
        {
      icon: Managementicon,
      title: "Hands-Free Management",
      subtitle: "You Own. We Operate. You Earn.",
      content: "We handle everything: documentation, shances, rentals, guest experience and maintenance."
    },
    {
      icon: Growthicon,
      title: "Capital Growth",
      subtitle: "Strategic Location. Strong Upward Trajectory.",
      content: "Driven by high growth tourism upgrades, new expressway access, and protected land scarcity."
    },

    {
      icon: Backingicon,
      title: "Dual Backing",
      subtitle: "Your Capital. Our Expertise. Guaranteed Exit.",
      content: "Secured by a physical estate and backed by Vihaz Estate's 15-year brand reputation."
    }
  ];

  return (
    <div className="bg-[#fffff] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl italic mb-4">
            Investment Zone
          </h3>
          <p className="text-lg inter-tight" >
            Why Inner Circle Belongs in Your Portfolio?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {features.map((feature, index) => (
            <div key={index} className={`border-b-1 border-[#E2E5E4] bg-white p-5 `}>
              <div className="flex items-start gap-4 mb-4">
                <div className="text-emerald-700 mt-1 pl-2 border-l-1 border-[#6F7D78CC]">
                 <img className='w-[24px]' src={feature.icon} alt=""/>
                </div>
                <div>
                  <h4 className="text-2xl text-[#333333] fw500 mb-1 inter-tight" >
                    {feature.title}
                  </h4>
                  <p className="text-lg text[#000000B2] font-medium mb-1 inter-tight" >
                    {feature.subtitle}
                  </p>
                  <p className="text-base inter-tight text-[#625E59E5]">
                    {feature.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentZone;

