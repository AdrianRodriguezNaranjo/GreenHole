"use client";

import Header from "@/components/Header";
import MaterialMenu from "@/components/materialmenu";
import React, { useState } from 'react';
import { items } from "@/utils/materials";
import Footer from "@/components/footer";

export default function Page() {
  const [selectedMaterial, setSelectedMaterial] = useState(items[0]);

  const handleMaterialSelect = (material: string) => {
    const selected = items.find(item => item.title === material);
    if (selected != undefined) {
      setSelectedMaterial(selected);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <MaterialMenu onMaterialSelect={handleMaterialSelect} />
      <div className="bg-white p-6 rounded-lg flex-grow">
        <h1 className="font-bold text-black mb-4">{selectedMaterial.title}</h1>
        <p className="text-gray-700 mb-4">{selectedMaterial.text1}</p>
        <p className="text-gray-700 mb-4">{selectedMaterial.text2}</p>
        <div className="grid grid-cols-3 gap-4 gap-x-10">
          {Array.from({ length: selectedMaterial.image }, (_, index) => (
            <img
              key={index}
              src={`/icons/material/${selectedMaterial.title.toLowerCase().replace(/\s+/g, '')}${index + 1}.svg`}
              alt={`${selectedMaterial.title}${index + 1}`}
              className="h-15 w-15"
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}