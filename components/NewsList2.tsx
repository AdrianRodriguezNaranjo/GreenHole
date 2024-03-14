"use client";

import { NewsItems } from '@/utils/items';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const icons = {
  bbc: "https://i.ibb.co/kGbsBK2/image.png",
  reuters: "https://i.ibb.co/B2vCJFw/image.png",
  nyt: "https://i.ibb.co/3B4FPCX/image.png",
  tomra: "https://i.ibb.co/DYBQM6r/image.png",
};

export default function NewsList2({ items }: { items: NewsItems[] }) {
  const router = useRouter();
  const [newsItems, setNewsItems] = React.useState<NewsItems[]>(items);

  return (
    <div className="max-w-md mx-auto flex flex-col justify-between" style={{height:"100%"}}>
      <main className="container mx-auto">
        <h1 className="px-4 text-2xl font-bold text-[#484848]">News</h1>
        <div className="space-y-6 p-4">
          {newsItems.map((item) => (
            <div className="grid grid-cols-2 gap-7 items-center space-y-2" key={item.id}>
              <Image
                alt={item.title}
                className="aspect-square object-cover rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
                width={200}
                height={200}
                src={item.image}
                onClick={() => router.push(`/news/${item.id}`)}
              />
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <div className="flex items-center space-x-1 text-sm text-gray-500  bottom-0 overflow-hidden">
                  {item.source === "BBC News" && (
                    <img src={icons.bbc} alt="BBC News" className="w-4 h-4" />
                  )}
                  {item.source === "Reuters" && (
                    <img
                      src={icons.reuters}
                      alt="Reuters"
                      className="w-4 h-4"
                    />
                  )}
                  {item.source === "The NYT" && (
                    <img src={icons.nyt} alt="The NYT" className="w-4 h-4" />
                  )}
                  {item.source === "TOMRA" && (
                    <img src={icons.tomra} alt="TOMRA" className="w-4 h-4" />
                  )}

                  <span>{item.source}</span>
                  <span>•</span>
                  <time dateTime="2023-06-09">{item.datetime}</time>
                </div>
              </div>
            </div>
          ))}

          {newsItems.length < 1 && (
            <div className="flex justify-center p-4">
              <p>No news found</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
