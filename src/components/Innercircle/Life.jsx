import React from "react";
import bgImage from "../../images/Life.webp";
import logoImage from '../../images/cutlogo.png'

const Life = () => {
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
            <div className="relative " >

                <div />
                <div className="w-12 h-12 m-auto ">
                    <div className="">

                        <div className="mb-8">
                            <div className="w-10 m-auto">
                                <img src={logoImage} />
                            </div>
                        </div>

                    </div>
                </div>
                {/* Text */}
                <h2 className="dm-serif-italic text-[36px] text-white pb-[200px] m-auto text-center font-light z-10">
                    Root your life in something deeper.
                </h2>

            </div>

        </section>
    );
};

export default Life;
