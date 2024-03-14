"use client";

import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { Carousel } from 'antd';

interface MaterialMenuProps {
  onMaterialSelect: (material: string) => void;
}

const MaterialMenu: React.FC<MaterialMenuProps> = ({ onMaterialSelect }) => {
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

  useEffect(() => {
    setSelectedMaterial("Plastic");
    onMaterialSelect("Plastic");
  }, []);

  const handleMaterialSelect = (material: string) => {
    setSelectedMaterial(material);
    onMaterialSelect(material);
  };

  return (
    <Carousel dots={false} className='remove-all w-screen border-b-2 border-gray-400'>
      <div>
        <div className="flex items-center justify-between row-auto">
          <img src="/icons/plastic.svg" alt="Plastic"
            className={`h-15 w-15 cursor-pointer ${selectedMaterial === "Plastic" ? "border-b-2 border-teal-800" : ""}`}
            onClick={() => handleMaterialSelect("Plastic")} />
          <img src="/icons/paper.svg" alt="Paper"
            className={`h-15 w-15 cursor-pointer ${selectedMaterial === "Paper" ? "border-b-2 border-teal-800" : ""}`}
            onClick={() => handleMaterialSelect("Paper")} />
          <img src="/icons/electronic.svg" alt="Electronic"
            className={`h-15 w-15 cursor-pointer ${selectedMaterial === "Electronic devices" ? "border-b-2 border-teal-800" : ""}`}
            onClick={() => handleMaterialSelect("Electronic devices")} />
          <img src="/icons/hazardous.svg" alt="Hazardous"
            className={`h-15 w-15 cursor-pointer ${selectedMaterial === "Hazardous waste" ? "border-b-2 border-teal-800" : ""}`}
            onClick={() => handleMaterialSelect("Hazardous waste")} />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between row-auto">
          <img src="/icons/metal.svg" alt="Metal"
            className={`h-15 w-15 cursor-pointer ${selectedMaterial === "Metal" ? "border-b-2 border-teal-800" : ""}`}
            onClick={() => handleMaterialSelect("Metal")} />
          <img src="/icons/textiles.svg" alt="Textiles"
            className={`h-15 w-15 cursor-pointer ${selectedMaterial === "Textiles" ? "border-b-2 border-teal-800" : ""}`}
            onClick={() => handleMaterialSelect("Textiles")} />
          <img src="/icons/general.svg" alt="General"
            className={`h-15 w-15 cursor-pointer ${selectedMaterial === "General Waste" ? "border-b-2 border-teal-800" : ""}`}
            onClick={() => handleMaterialSelect("General Waste")} />
          <img src="/icons/glass.svg" alt="Glass"
            className={`h-15 w-15 cursor-pointer ${selectedMaterial === "Glass" ? "border-b-2 border-teal-800" : ""}`}
            onClick={() => handleMaterialSelect("Glass")} />
        </div>
      </div>
    </Carousel>
  );
};

export default MaterialMenu;