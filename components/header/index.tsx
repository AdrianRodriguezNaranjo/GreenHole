"use client";

import React from 'react';
import { NextPage } from 'next';
import { MenuOutlined } from '@ant-design/icons';
import { Button, SearchBar, Space } from 'antd-mobile';

const Header: NextPage = () => {
  return (
    <header className="p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src="/icons/logo.png" alt="Logo" className="h-40 w-10" />
        <SearchBar placeholder="Search" />
        <MenuOutlined className="text-zinc-800  self-center" />
      </div>      
    </header>
  );
};

export default Header;