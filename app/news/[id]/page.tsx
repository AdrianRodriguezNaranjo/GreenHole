import React from "react";
import { items } from "@/utils/items";
import { notFound } from "next/navigation";
import { FaBars } from "react-icons/fa";
import NewsCard from "@/components/NewsCard";
import Image from "next/image";

interface pageProps {
  params: {
    id: string;
  };
}

export default function page({ params }: pageProps) {
  const item = items.find((item) => item.id === parseInt(params.id));
  if (!item) return notFound();

  return (
    <div className="max-w-[768px] mx-auto my-0 p-6">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">{item.title.slice(0, 15)}</h1>
        <FaBars className="text-gray-900 cursor-pointer" size={22} />
      </header>

      <main className="container mx-auto relative">
        <div className="relative">
          {/* Image */}
          <Image
            src={item.image}
            alt={item.title}
            width={200}
            height={200}
            className="rounded-lg object-cover w-full"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAwAB/9jY9gAAAABJRU5ErkJggg=="
          />

          {/* News Card */}
          <div className="absolute bottom-0 left-0 w-full px-3 py-3">
            <NewsCard item={item} />
          </div>
        </div>

        <div className="text-gray-600 mt-4">
         {item.content}
        </div>
      </main>
    </div>
  );
}
