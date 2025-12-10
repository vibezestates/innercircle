import React from "react";
import bgImage from "../../images/invest.webp";

const Comparison = () => {
    const items = [
        {
            title: "Invest",
            desc: "Review & Sign agreement and Transfer funds",
        },
        {
            title: "Earn",
            desc: "Quarterly rental income distributions begin with end-to-end Management",
        },
        {
            title: "Grow",
            desc: "Property appreciates 71.42% over 3 years holding period",
        },
        {
            title: "Exit",
            desc: "Guaranteed buyback, tax free with bonus potential",
        },
    ];

    return (
        <section className="relative w-full pt-20 pb-8" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Background Image with 30% Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative w-full  flex items-center justify-center" >

                <div />

                {/* Text */}
                <h2 className="dm-serif-italic text-[36px] text-white pb-[100px] m-auto text-center font-light z-10">
                    See how Vibez stacks up against traditional choices.
                </h2>

            </div>
            {/* Cards under hero */}
            <div className="max-w-7xl mx-auto px-4  relative z-10">
                <div className="overflow-x-auto">
                    <table className="min-w-full   text-sm">
                        <thead className="bg-[#104D39]">
                            <tr className="border-0">
                                <th className="inter-tight fw500 text-[16px] text-white px-4 py-2">Investment Type</th>
                                <th className="inter-tight fw500 text-[16px] text-white px-4 py-2">Expected Returns</th>
                                <th className="inter-tight fw500 text-[16px] text-white px-4 py-2">Liquidity</th>
                                <th className="inter-tight fw500 text-[16px] text-white px-4 py-2">Risk level</th>
                                <th className="inter-tight fw500 text-[16px] text-white px-4 py-2">Accessibility</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">Bank FD</td>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">5-7% p.a.</td>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">High</td>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">Low</td>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">Easy</td>
                            </tr>

                            <tr>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">Vibez Investment</td>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">Target 22% ROI</td>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">Moderate</td>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">Medium (Asset - backed)</td>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">Easy</td>
                            </tr>

                            <tr>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">Mutual Funds</td>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">10-12% (Variable)</td>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">High</td>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">Medium - High</td>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">Market Dependent</td>
                            </tr>

                            <tr>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">Stocks</td>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">Variable</td>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">High</td>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">High</td>
                                <td className="bg-white text-[#505050] text-center inter-tight fw500  px-4 py-2">Market Dependent</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    );
};

export default Comparison;
