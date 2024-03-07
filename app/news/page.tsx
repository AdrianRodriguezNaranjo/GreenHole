"use client"

import Button from "@/components/Button";
import { items } from "@/utils/items";
import { useRouter } from "next/navigation";
import React from "react";
import { FaBars } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

const icons = {
    bbc: "https://i.ibb.co/kGbsBK2/image.png",
    reuters: "https://i.ibb.co/B2vCJFw/image.png",
    nyt: "https://i.ibb.co/3B4FPCX/image.png",
    tomra: "https://i.ibb.co/DYBQM6r/image.png",
}



export default function page() {
  const router = useRouter()
 

  return (
    <div className="max-w-md mx-auto">
      <div className="flex items-center justify-between p-4">
        <FaBars className="text-gray-600 cursor-pointer" size={22} />
        <input className="flex-1 mx-4 outline-none bg-white border border-gray-200 rounded-full p-2" type="search" placeholder="Search" />
        <button className="text-gray-600">
            <SlOptionsVertical size={22} />
        </button>
      </div>

      <main className="container mx-auto">
        <h1 className="px-4 text-2xl font-bold text-[#484848]">News</h1>

        <div className="space-y-6 p-4">
          {items.map((item) => (
            <div className="space-y-2" key={item.id}>
              <img
                alt={item.title}
                className="aspect-square object-cover rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
                height="200"
                src={item.image}
                onClick={() => router.push(`/news/${item.id}`)}
                width="200"
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <div className="flex items-center space-x-1 text-sm text-gray-500">
                {item.source === "BBC News" && <img src={icons.bbc} alt="BBC News" className="w-4 h-4" />}
                {item.source === "Reuters" && <img src={icons.reuters} alt="Reuters" className="w-4 h-4" />}
                {item.source === "The NYT" && <img src={icons.nyt} alt="The NYT" className="w-4 h-4" />}
                {item.source === "TOMRA" && <img src={icons.tomra} alt="TOMRA" className="w-4 h-4" />}

                <span>{item.source}</span>
                <span>•</span>
                <time dateTime="2023-06-09">{item.datetime}</time>
              </div>
            </div>
          ))}
        </div>

        <Button variant="primary" className="w-full">
            Load More
        </Button>
      </main>
    </div>
  );
}
