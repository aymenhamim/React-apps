import React, { useState } from 'react';
import './Slider.css';
import IconButton from './IconButton';

const imgs = [
  'banner-1.jpg',
  'banner-2.jpg',
  'banner-3.jpg',
  'banner-4.jpg',
  'banner-5.jpg',
];

const Slider: React.FC = () => {
  const [index, setIndex] = useState(0);

  function handleNext() {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handlPrev() {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else setIndex(prev => prev - 1);
  }

  return (
    <div className="relative h-auto max-h-52 w-full overflow-hidden rounded-2xl">
      <img
        src="/img/New-Project-2-1.jpg"
        alt=""
        className="slider h-full w-full origin-center bg-cover object-contain"
      />
      <IconButton
        icon="left"
        iconSize="w-10"
        className="absolute left-5 top-[50%] flex translate-y-[-50%]"
        onClick={handlPrev}
      />

      <IconButton
        icon="right-arrow"
        iconSize="w-10"
        className="absolute right-5 top-[50%] flex translate-y-[-50%]"
        onClick={handleNext}
      />

      <div className="absolute bottom-4 right-[50%] flex translate-x-[50%] gap-3 transition-all duration-200 ease-in-out">
        {imgs.map((img, i) =>
          i === index ? (
            <div className="h-1 w-5 bg-stone-50" key={i}></div>
          ) : (
            <div className="h-1 w-5 bg-stone-500" key={i}></div>
          ),
        )}
      </div>
    </div>
  );
};

export default Slider;
