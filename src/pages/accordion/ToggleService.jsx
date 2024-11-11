import React, { useState } from 'react';

const ToggleService = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-6">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => handleToggle(index)}
            className="w-full text-left px-4 py-2 font-semibold text-lg flex justify-between items-center focus:outline-none"
          >
            <span>{item.title}</span>
            <span className={`transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
             ▿
            </span>
          </button>
          {activeIndex === index && (
            <div className="px-4 py-2 bg-gray-100 text-gray-700">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ToggleService;
