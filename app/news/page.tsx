import React from "react";
import { FaBars } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

const icons = {
    bbc: "https://i.ibb.co/kGbsBK2/image.png",
    reuters: "https://i.ibb.co/B2vCJFw/image.png",
    nyt: "https://i.ibb.co/3B4FPCX/image.png",
    tomra: "https://i.ibb.co/DYBQM6r/image.png",
}

interface NewsItems {
  title: string;
  source: "BBC News" | "Reuters" | "The NYT" | "TOMRA";
  image: string;
  datetime: string;
}

export default function page() {
  const items: NewsItems[] = [
    {
      title: "Global Summit on Climate Change: Historic Agreement Reached",
      source: "BBC News",
      image: "https://i.ibb.co/zVjKp7c/image.png",
      datetime: "Jun 9, 2023",
    },
    {
      title: "Climate Change Impact on Agriculture: Farmers Seek Solutions",
      source: "Reuters",
      image: "https://i.ibb.co/X3Nnx0P/image.png",
      datetime: "Jun 8, 2023",
    },
    {
      title: "Rising Sea Levels Threaten Coastal Cities' Economies",
      source: "The NYT",
      image: "https://i.ibb.co/3mg1x04/image.png",
      datetime: "Jun 6, 2023",
    },
    {
        title: "What’s AI doing for you? ",
        source: "TOMRA",
        image: "https://i.ibb.co/KWvYPPT/image.png",
        datetime: "Sep 27, 2023",
    }
  ];

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
          {items.map((item, index) => (
            <div className="space-y-2" key={index}>
              <img
                alt={item.title}
                className="aspect-square object-cover rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
                height="200"
                src={item.image}
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
      </main>
    </div>
  );
}
