import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is this investment legal and secure?",
      answer: "Yes. All properties are 100% legally verified, with clear titles and government approvals."
    },
    {
      question: "What kind of returns can I expect?",
      answer: "Returns vary based on property type and location, typically ranging from 8-15% annually. Historical performance and market conditions affect actual returns."
    },
    {
      question: "How long should I stay invested?",
      answer: "We recommend a minimum investment horizon of 3-5 years to maximize returns and benefit from property appreciation."
    },
    {
      question: "Do I need to manage the property myself?",
      answer: "No. We provide full property management services including tenant management, maintenance, and rent collection."
    },
    {
      question: "Can I exit early?",
      answer: "Yes, you can exit your investment early. However, early exit terms and conditions apply, and may affect your returns."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-white flex items-center justify-center p-10">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-[36px] dm-serif-italic">Frequently Asked Questions</h1>
          <p className="text-gray-600">Explore upcoming real estate developments & investment opportunities</p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-5 px-0 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-800 text-lg pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}