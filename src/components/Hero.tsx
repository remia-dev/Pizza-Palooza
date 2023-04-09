import React, { useEffect, useRef } from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';

interface HeroProps {
  images: string[];
  width?: number;
  height?: number;
}

const Hero: React.FC<HeroProps> = ({ images, width=1000, height=250}) => {
  const splideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new Splide(splideRef.current!, {
      type: 'loop',
      perPage: 3,
      arrows: true,
      classes: {
        arrow: 'splide__arrow text-white bg-gray-700 rounded-full p-2 hover:bg-gray-800',
        prev: 'splide__arrow--prev absolute top-1/2 left-4 transform -translate-y-1/2',
        next: 'splide__arrow--next absolute top-1/2 right-4 transform -translate-y-1/2',
        pagination: 'hidden'
      }
    }).mount();
  }, []);

  return (
    <div ref={splideRef} className="splide">
      <div className="splide__track m-0 p-0 list-none flex gap-0">
        <ul className="splide__list">
          {images.map((image, index) => (
            <li key={index} className="splide__slide">
              <img src={image} alt={`Image ${index}`} width={width} height={height}  className='object-cover mx-auto h-full'/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero