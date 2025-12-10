import React from 'react';

export default function WesternGhatsDestination() {
  const sections = [
    {
      title: 'Accessibility',
      items: [
        '210 km from Bangalore (4 hrs via NH75)',
        '3 hrs from Mysore & Mangalore airports',
        'Year-round smooth connectivity'
      ]
    },
    {
      title: 'The Setting',
      items: [
        'Western Ghats biodiversity zone',
        '18-28°C perfect climate',
        'Surrounded by coffee plantations & mist',
        'Triple the amount of rainfall in Banglore'
      ]
    },
    {
      title: 'Strategic Value',
      items: [
        'Bangalore-Mangalore Expressway incoming',
        'Government ₹450Cr tourism infrastructure',
        '35% eco-tourism growth post-pandemic'
      ]
    },
    {
      title: 'Nearby attractions',
      items: [
        'Manjarabad Fort • Bisle Ghat viewpoint',
        'Kukke Subramanya • Waterfalls & treks',
        'Heritage temples • Plantation tours'
      ]
    }
  ];

  return (
    <div className="bg-[#FFFCF6] pt-8 pb-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="">
          <h1 className="dm-serif-italic text-[36px] font-light text-center mb-1 text-gray-800">
            Where the Western Ghats Whisper Your Name
          </h1>
          <p className="inter-tight text-center text-[24px] max-w-[800px] m-auto ">
            Jannekere, Sakleshpur, nestled in Hassan's coffee-scented highlands, 949
            <br />
            meters above ordinary life.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, idx) => {
            return (
              <div
                key={idx}
                className="p-6 border-b border-gray-300"
              >
                <div className="mb-4 pb-3 ">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-gray-600 text-sm leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}