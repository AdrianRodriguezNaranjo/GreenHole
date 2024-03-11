"use client";

import React from 'react';
import { NextPage } from 'next';
import { Carousel } from 'antd';

const MaterialMenu = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange} dots={false} arrows className='w-screen'>
      <div className='remove-all '>
        <div className="flex items-center justify-between" style={{ display: 'flex !important' }}>
          <img src="/icons/plastic.svg" alt="Plastic" className="h-15 w-15" />
          <img src="/icons/paper.svg" alt="Paper" className="h-15 w-15" />
          <img src="/icons/electronic.svg" alt="Electronic" className="h-15 w-15" />
          <img src="/icons/metal.svg" alt="Metal" className="h-15 w-15" />
        </div>
        <div className="flex items-center justify-between">
          <img src="/icons/hazardous.svg" alt="Hazardous" className="h-15 w-15 " />
          <img src="/icons/textiles.svg" alt="Textiles" className="h-15 w-15" />
          <img src="/icons/general.svg" alt="General" className="h-15 w-15" />
          <img src="/icons/glass.svg" alt="Glass" className="h-15 w-15" />
        </div>
      </div>
    </Carousel>
  );
};

export default MaterialMenu;