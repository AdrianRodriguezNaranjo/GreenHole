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
<<<<<<< HEAD
        <img src="/icons/logo.png" alt="Logo" className="h-40 w-10" />
        <SearchBar placeholder="Search" />
        <MenuOutlined className="text-zinc-800  self-center" />
      </div>      
=======
        <img src="/icons/logo.png" alt="Logo" className="h-10 w-10" />
        <SearchBar placeholder="Search" className="w-[30vh]" />
        {/* <Menu/> */}

      </div>
>>>>>>> d87bed7 (issue#13 last changes)
    </header>
  );
};

export default Header;
