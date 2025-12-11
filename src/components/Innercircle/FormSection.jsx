import React from "react";
import ContactForm from "./ContactForm";

function FormSection() {
    return ( <>
    {/* background: #1D2A26; */}

     <div id="contact" className="w-full p-7 bg-[#1D2A26] flex items-center justify-center">
      <div className="max-w-[500px] w-full p-6 rounded-lg text-center">
        <ContactForm />
      </div>
    </div>
    </> );
}

export default FormSection;