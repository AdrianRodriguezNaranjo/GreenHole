"use client";

import React from "react";
import { NextPage } from "next";
import { MenuOutlined } from "@ant-design/icons";
import { Button, SearchBar, Space } from "antd-mobile";
import Menu from "./menu/menu";
import { useRouter } from "next/navigation";

const Header: NextPage = () => {
  const router = useRouter();

  return (
    <header className="p-2 flex items-center justify-between border-b-2 border-gray-400 px-5">
      <img
        src="/icons/logo.png"
        alt="Logo"
        className="h-10 w-10"
        onClick={() => router.push("/")}
      />
      <Menu />
    </header>
  );
};

export default Header;
