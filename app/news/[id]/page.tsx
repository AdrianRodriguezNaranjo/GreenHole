import React from "react";
import { NewsItems, items } from "@/utils/items";
import { notFound } from "next/navigation";
import { FaBars } from "react-icons/fa";
import NewsCard from "@/components/NewsCard";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";

interface pageProps {
  params: {
    id: string;
  };
}

export default async function page({ params }: pageProps) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("news")
    .select()
    .eq("id", params.id)
    .single();
  if (!data || error) return notFound();

  const item: NewsItems = data;

  return (
    <div className="max-w-[768px] mx-auto my-0 p-6">
      <div className="mb-5">
        <Header />
      </div>

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

        <div className="text-gray-600 mt-4">{item.content}</div>
      </main>
    </div>
  );
}
