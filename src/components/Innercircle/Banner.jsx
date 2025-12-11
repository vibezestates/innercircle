import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import bgImage from '../../images/homBanner.webp'
import logoImage from '../../images/logo.png'
import ContactForm from './ContactForm';


export default function Banner() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Consultation request submitted!');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden">

            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bgImage})`,
                }}
            >

                <div className="absolute inset-0 bg-black/50"></div>
            </div>


            <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">


                <div className="mb-8">
                    <div className="w-20">
                        <img src={logoImage} />
                    </div>
                </div>


                <h1
                    className="
    text-5xl md:text-7xl 
    dm-serif 
    text-white 
    text-center 
    mb-4
    tracking-wide 
    border-b-2
    border-[#D9D9D980]
    pb-4
  "
                >
                    VIBEZ INNER CIRCLE
                </h1>


                <p className="text-white text-center text-lg md:text-xl max-w-3xl mb-[150px] leading-relaxed inter-tight">
                    An <span className="italic inter-tight">Exclusive</span> Investment Destination in the{' '}
                    <span className="italic dm-serif-italic">Heart of Nature</span>,<br />
                    set amid Sakleshpur's Luxury <span className="italic dm-serif-italic">Coffee Estate Corridor</span>
                </p>


                <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-12">


                        <div className="text-center grid grid-cols-2 gap">

                            <div>
                                <div className="text-white mb-2 border-b-2
    border-[#D9D9D980] pr-4">
                                    <span className="text-3xl md:text-5xl font-light dm-serif ">30,000</span>
                                    <span className="text-2xl ml-2 dm-serif">sqft</span>
                                </div>
                                <div className="text-white text-[16px] inter-tight tracking-wider inter-tight color-white">
                                    Mixed Use Estate
                                </div>
                            </div>

                            <div>
                                <div className="text-white mb-2 border-b-2
    border-[#D9D9D980]">
                                    <span className="text-3xl dm-serif">INR </span>
                                    <span className="text-3xl md:text-5xl font-light dm-serif">2CR</span>
                                </div>
                                <div className="text-white text-[16px] inter-tight tracking-wider">
                                    Investment
                                </div>
                            </div>

                        </div>

                        <div className="text-center grid grid-cols-2 ">

                            <div>
                                <div className="text-white mb-2 border-b-2
    border-[#D9D9D980] pr-4">
                                    <span className="text-5xl md:text-6xl font-light dm-serif">71.42%</span>
                                    <span className="text-2xl ml-2 dm-serif ">ROI</span>
                                </div>
                                <div className="text-white text-[16px] inter-tight tracking-wider">Reseller/Exit Guaranteed</div>
                            </div>

                            <div>
                                <div className="text-white mb-2 border-b-2
    border-[#D9D9D980]">
                                    <span className="text-3xl dm-serif">INR </span>
                                    <span className="text-5xl md:text-6xl font-light dm-serif">3.6CR</span>
                                </div>
                                <div className="text-white text-[16px] inter-tight tracking-wider">Massive Returns</div>
                            </div>

                        </div>



                    </div>


                    <div className="bg-opacity-10 backdrop-blur-md rounded-lg p-8  ">
                        <ContactForm    />
                    </div>

                </div>

            </div>
        </div>
    );
}