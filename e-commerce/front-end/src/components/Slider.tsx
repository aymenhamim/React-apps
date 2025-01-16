import React from 'react';
import './Slider.css';

const Slider: React.FC = () => {
  return (
    <div className="slider relative h-48 min-w-full overflow-hidden rounded-2xl">
      {/* <img src="/img/New-Project-2-1.jpg" alt="" className="slider" /> */}
      <button className="absolute left-5 top-[50%] flex h-12 w-12 translate-y-[-50%] items-center justify-center rounded-full bg-stone-50 font-bold">
        <img src="/icons/left.svg" alt="Previous" />
      </button>
      <button className="absolute right-5 top-[50%] flex h-12 w-12 translate-y-[-50%] items-center justify-center rounded-full bg-stone-50 font-bold">
        <img src="/icons/right-arrow.svg" alt="Next" />
      </button>
    </div>
  );
};

export default Slider;
