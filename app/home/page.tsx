'use client'

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import carouselData from '../data/data-slide.json';
import './style.css';

export default function Home() {
  const [emblaRef] = useEmblaCarousel(
    { loop: false }, // Opciones del carousel
    [Autoplay()]    // Activación del autoplay
  );

  useEffect(() => {
    console.log('Embla Carousel Reference:', emblaRef);
  }, [emblaRef]);

  return (
    <div className="embla">
      <div className="embla__container" ref={emblaRef}>
        <div className="embla__container__inner">
          {carouselData.map((slide) => (
            <div key={slide.id} className="embla__slide">
              <img src={slide.imageUrl} alt={`Slide ${slide.id}`} />
              <h3>{slide.title}</h3>
              <p>{slide.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
