"use client";

import React from 'react';
import { NextPage } from 'next';
import './styles.css'
import { CopyrightCircleOutlined, CopyrightTwoTone, FacebookFilled, FacebookOutlined, GithubFilled, GithubOutlined, LinkedinFilled, LinkedinOutlined } from '@ant-design/icons';
const Footer: NextPage = () => {
  return (
    <div>
        <div className='footer-body' style={{color:'white'}}>
            <div className='footer-options'>
                <a>Admin login</a>
                <a href='https://github.com/AdrianRodriguezNaranjo/GreenHole/tree/develop' target='_blank'>About Us</a>
                <a href='https://sdgs.un.org/es/goals' target='_blank'>UN goals</a>
            </div>
            <div style={{backgroundColor:'#658E9C'}} className='footer-spacing'></div>
            <div className='footer-data'>
                <p>Copyright <CopyrightCircleOutlined/> 2024<br/> All rights reserved.</p>
                <div className='footer-icons'>
                    <a href='https://github.com/AdrianRodriguezNaranjo/GreenHole/tree/develop' target='_blank'><GithubFilled style={{ fontSize: '30px', margin:'10px'}}/></a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;