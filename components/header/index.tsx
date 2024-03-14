"use client";

import React, { useState } from 'react';
import { NextPage } from 'next';
import { Button, SearchBar, Space } from 'antd-mobile';
import Menu from '../menu/menu';

const Header: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="mt-5 ml-6 w-full flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src="/icons/logo.png" alt="Logo" className="h-10 w-10" />
        <SearchBar placeholder="Search" className="w-[10%]" />
      </div>
    </header>
  );
};

export default Header;
