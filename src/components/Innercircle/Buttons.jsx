import React from "react";
import { useForm } from "react-hook-form";
import { Phone } from "lucide-react";
function Buttons({ buttonText = "Book A Private Consultation", showPhoneButton = true }) {
     const handleMenuClick = (id) => {
    console.log(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
    return (
        <div className="max-w-[500px] m-auto flex gap-2 pt-4 pb-2 px-5">

               <button
                type="Book A Private Consultation"
                onClick={() => handleMenuClick('contact')}
                className=" premium-gold glow-border flex-1 uppercase text-white font-medium py-4 px-6 
               cursor-pointer flex items-center justify-center"
                >

                {buttonText}
            </button>

            {showPhoneButton && (
                <button
                    type="button"
                    onClick={() => (window.location.href = "tel:+9185508 82882")}
                    className="premium-gold bg-[#104D39] hover:bg-[#104d39a6] text-white p-4 transition-colors cursor-pointer"
                >
                    <Phone className="w-5 h-5" />
                </button>
            )}
        </div>
    );
}

export default Buttons;