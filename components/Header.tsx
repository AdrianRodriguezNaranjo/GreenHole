"use client";

import React from 'react';
import { NextPage } from 'next';
import Menu from './menu/menu';
import './header/style.css';
import { useRouter } from "next/navigation";
const Header: NextPage = () => {
  const router = useRouter();

  return (

    <header className="p-4 flex items-center justify-between border-b-2 border-gray-400">
    <div className="flex items-center space-x-64 header-body">
      <img src="/icons/logo.png" alt="Logo" className="h-10 w-10 header-img" onClick={() => router.push("/")} />
      <Menu />
      </div>
    </header>
  );
};

export default Header;
