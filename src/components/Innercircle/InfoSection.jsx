import React from 'react';
import logoImage from '../../images/cutlogo.png'
export default function InfoSection() {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="container mx-auto max-w-6xl">

                {/* Main Heading */}
                <h2 className="text-[36px] md:text-5xl dm-serif text-gray-800 text-center mb-3">
                    <span className="italic">Vibez Inner Circle:</span>
                </h2>

                {/* Main Description */}
                <p className="text-[24px] inter-tight text-gray-800 text-center leading-relaxed font-medium">
                    An Unique Investment-First Mixed Use Estate development
                </p>

                <p className="text-[24px] inter-tight text-gray-800 text-center leading-relaxed font-medium">
                    Focused on Growth, Security, and Multiplying Asset Value.
                </p>

                <div className='max-w-[768px] m-auto mt-8'>

                    <p className="inter-tight text-[#625E59E5] text-gray-600 text-center max-w-4xl mx-auto mb-4 leading-relaxed">
                        Set in Sakleshpur's luxury coffee estate corridor, offering prime 30,000 sq.ft. plots positioned for sustained appreciation and tax-efficient wealth creation.
                    </p>

                    {/* Detail Paragraph 2 */}
                    <p className="inter-tight text-[#625E59E5] text-gray-600 text-center max-w-5xl mx-auto mb-12 leading-relaxed">
                        An end-to-end managed premium retreat and investment asset offering rental income, plantation care, and full maintenance, paired with riverside views, mature coffee estates, and elevated amenities like a clubhouse, meditation zones, and a farm-to-table restaurant.
                    </p>
                </div>

                {/* Decorative Divider Icon */}
                <div className="flex justify-center mb-6 bgline relative">
                    <div className="w-10  z-10 ">
                        <div className="bg-[#ffffff] w-[80px]">
                            <div className="w-[46px] m-auto">
                                <img src={logoImage} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Features - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mx-auto">

                    {/* Feature 1 */}
                    <div className="inter-tight text-[22px] pl-4 font-semibold">
                        <p className="text-gray-700 text-base md:text-lg font-semibold">
                            <span className="text-amber-700 font-semibold">71.42% ROI</span> tax free return guarantee
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="inter-tight text-[22px] pl-4 font-semibold">
                        <p className="text-gray-700 text-base md:text-lg font-semibold ">
                            <span className="font-semibold leftborder relative" >3 years lock in</span> at INR 2.0 CR
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="inter-tight text-[22px] pl-4 font-semibold">
                        <p className="text-gray-700 text-base md:text-lg font-semibold leftborder relative" >
                            Massive returns <span className="italic text-amber-700">starting</span> from INR 3.6 CR
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}