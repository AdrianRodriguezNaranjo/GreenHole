"use client";

import React from 'react';
import { NextPage } from 'next';
import './styles.css'
import { CopyrightCircleOutlined, GithubFilled } from '@ant-design/icons';

const Footer: NextPage = () => {
  return (
    <div>
      <div className='footer-body' style={{ color: 'white' }}>
        <div className='footer-options'>
          <a href='/login'>Admin login</a>
          <a href='/about-us'>About Us</a>
          <a href='https://sdgs.un.org/es/goals' target='_blank'>UN goals</a>
        </div>
        <div style={{ backgroundColor: '#658E9C' }} className='footer-spacing'></div>
        <div className='footer-data'>
          <p>Copyright <CopyrightCircleOutlined /> 2024<br /> All rights reserved.</p>
          <div className='footer-icons flex'>
            <a href='https://www.figma.com/file/GnBh4hvgNc5bjtQVf7jKpH/Kalm-project?type=design&node-id=91%3A2244&mode=design&t=bDtmQJ7NGbj2mB46-1' target='_blank'><img src='/icons/figma.svg' style={{ fontSize: '30px', margin: '10px' }} /></a>
            <a href='https://github.com/AdrianRodriguezNaranjo/GreenHole/tree/develop' target='_blank'><GithubFilled style={{ fontSize: '30px', margin: '10px' }} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;