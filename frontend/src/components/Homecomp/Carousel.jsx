import React, { useState } from 'react';

const Carousel = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="overflow-hidden relative" style={{minHeight:'400px'}}>
      <div className="flex transition-transform ease-out duration-500 justify-center">
        {slides.map((slide, index) => (
          <div key={index} className={`flex items-center justify-center w-full ${curr === index ? 'block' : 'hidden'}`}>
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/60 text-gray-800 hover:bg-white/30 left-4">
          <i className="fa-solid fa-chevron-left" style={{ size: '40px' }}></i>
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/60 text-gray-800 hover:bg-white/30 right-4">
          <i className="fa-solid fa-chevron-right" style={{ size: '40px' }}></i>
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`transition-all w-3 h-3 bg-white rounded-full mx-1 ${curr === index ? 'p-2' : 'bg-opacity-50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
