import React from 'react';
import logoImage from '../../images/cutlogo.png'

export default function TrustBadge() {
  return (
    <div className="w-full bg-[#020C09] py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        
        {/* Icon */}
        <div className="flex justify-center mb">
          <div className="w-12 h-12 ">
            <div className="">

                <div className="mb-8">
                    <div className="w-10">
                        <img src={logoImage} />
                    </div>
                </div>

            </div>
          </div>
        </div>

        {/* Main Text */}
        <div className="text-center text-[36px] dm-serif text-white mb-6 font-semibold">
          <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed">
            <span className="text-gray-400 font-light">Backed by </span>
            <span className="text-white font-serif font-semibold">15 years</span>
            <span className="text-gray-400 font-light"> of trusted land expertise & the </span>
            <br className="hidden md:block" />
            <span className="text-white font-serif font-semibold">confidence of 300+ investors</span>
            <span className="text-gray-400 font-light"> shaping the vision and </span>
            <br className="hidden md:block" />
            <span className="text-white font-serif font-semibold">exclusivity</span>
            <span className="text-gray-400 font-light"> of the Inner Circle.</span>
          </p>
        </div>

      </div>
    </div>
  );
}