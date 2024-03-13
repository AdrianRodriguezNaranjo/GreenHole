"use client";

<<<<<<< HEAD
import React from "react";
import { NextPage } from "next";
import { MenuOutlined } from "@ant-design/icons";
import { Button, SearchBar, Space } from "antd-mobile";
import Menu from "./menu/menu";
import { useRouter } from "next/navigation";

=======
import React from 'react';
import { NextPage } from 'next';
import Menu from './menu/menu';
import './header/style.css';
>>>>>>> 0c6ad1d (changes for issue#8)
const Header: NextPage = () => {
  const router = useRouter();

  return (
<<<<<<< HEAD
    <header className="p-2 flex items-center justify-between border-b-2 border-gray-400 px-5">
      <img
        src="/icons/logo.png"
        alt="Logo"
        className="h-10 w-10"
        onClick={() => router.push("/")}
      />
=======
    <header className="p-4 flex items-center justify-between border-b-2 border-gray-400">
    <div className="flex items-center space-x-64 header-body">
      <img src="/icons/logo.png" alt="Logo" className="h-10 w-10 header-img" />
>>>>>>> 0c6ad1d (changes for issue#8)
      <Menu />
    </header>
  );
};

export default Header;
