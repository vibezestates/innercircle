import React from "react";
import bgImage from "../../images/chooseBg.webp";

const Record = () => {
    const items = [
        {
            title: "16 Years",
            desc: "of legacy & excellence",
        },
        {
            title: "1100+",
            desc: "Acres Delivered",
        },
        {
            title: "20+",
            desc: "Projects Completed",
        },
        {
            title: "1000+",
            desc: "Happy Customers",
        },
        {
            title: "300+",
            desc: "Happy Investors",
        },
    ];

    return (
        <section className="relative w-full pt-20 pb-8" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Background Image with 30% Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative w-full  flex items-center justify-center" >

                <div />

                {/* Text */}
                <h2 className="dm-serif-italic text-[36px] text-white pb-[200px] max-w-[800px] m-auto text-center font-light z-10">
                    When you choose Vibez, you're choosing a legacy of delivered promises.
                </h2>

            </div>
            {/* Cards under hero */}
            <div className="max-w-7xl mx-auto px-4  relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="p-6 text-center "
                        >
                            <h3 className="dm-serif text-[42px]  text-white font-semibold ">{item.title}</h3>
                            <p className="text-[#625E59E5] text-white text-[16px] inter-tight ">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Record;
