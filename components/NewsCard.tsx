"use client";

import { NewsItems } from "@/utils/items";
import React from "react";
import Header from "./Header";

export default function NewsCard({ item }: { item: NewsItems }) {
  return (
    <div className="bg-[#325d6a] rounded-md p-2 text-white">
      
      <p className="text-sm">{item.datetime}</p>

      <h1 className="text-lg font-bold my-2">{item.title}</h1>

      <p className="text-xs">
        Published by <span className="font-bold">{item.source}</span>
      </p>
    </div>
  );
}

/* News - Detail */