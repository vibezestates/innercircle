import React from "react";
import bgImage from "../../images/chooseBg.webp";

const Choose = () => {
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
                <h2 className="dm-serif-italic text-[36px] text-white pb-[200px] max-w-[545px] m-auto text-center font-light z-10">
                    Choose your tier. Earn quarterly.
                    Exit guaranteed.
                </h2>

            </div>
            {/* Cards under hero */}
            <div className="max-w-7xl mx-auto px-4  relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white  p-6 text-center "
                        >
                            <h3 className="dm-serif text-[28px] font-semibold mb-2">{item.title}</h3>
                            <p className="text-[#625E59E5] inter-tight text-[18px]">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Choose;
