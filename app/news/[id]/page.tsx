import React from "react";
import { items } from "@/utils/items";
import { notFound } from "next/navigation";
import { FaBars } from "react-icons/fa";

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
        <h1 className="text-xl font-semibold">{item.title}</h1>
        <FaBars className="text-gray-900 cursor-pointer" size={22} />
      </header>

      <main
        className="bg-cover bg-center bg-no-repeat h-[80vh] w-full"
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      >
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-6 place-items-center w-full bottom-0 absolute select-none">
            dasdas
        </div>
      </main>
    </div>
  );
}
