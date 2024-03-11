'use client'

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import carouselData from '../data/data-slide.json';
import './style.css';

export default function Home() {
  const [emblaRef] = useEmblaCarousel(
    { loop: false },
    [Autoplay()]
  );

  useEffect(() => {
    console.log('Reference:', emblaRef);
  }, [emblaRef]);

  return (
    <>
    <div className="embla">
      <div className="embla__container" ref={emblaRef}>
        <div className="embla__container__inner">
          {carouselData.map((slide) => (
            <div key={slide.id} className="embla__slide">
              <img src={slide.imageUrl} alt={`Slide ${slide.id}`} />
              <p className="slide-text">{slide.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
          
    </>
  );
}
