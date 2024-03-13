"use client";

import React from 'react';
import { NextPage } from 'next';
import { MenuOutlined } from '@ant-design/icons';
import { Button, SearchBar, Space } from 'antd-mobile';
import Menu from './menu/menu';

const Header: NextPage = () => {
  return (
    <header className="p-2 flex items-center justify-between border-b-2 border-gray-400">
    <div className="flex items-center space-x-64">
      <img src="/icons/logo.png" alt="Logo" className="h-10 w-10" />
      <Menu />
    </div>      
  </header>
  
  );
};

export default Header;