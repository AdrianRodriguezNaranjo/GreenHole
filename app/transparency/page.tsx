'use client'

import React from 'react';
import './style.css';
import { Badge, Progress, ProgressProps, Statistic } from 'antd';

const twoColors: ProgressProps['strokeColor'] = {
  '0%': '#FFC53D',
  '100%': '#B68615',
};
const twoColors2: ProgressProps['strokeColor'] = {
  '0%': '#658E9C',
  '100%': '#015471',
};
const twoColors3: ProgressProps['strokeColor'] = {
  '0%': '#9DB879',
  '100%': '#C3E991',
};
export default function Transparency() {
  return (
    <>
      <div className="transparency-body">
        <div /*for header*/></div>
        <div className='transparency-content'>
          <h1>Transparency of recycling facilities</h1>
          <div className='GreenPoint1'>
            <h1>Green Point</h1>
            <Badge color='#FFB419' text="Achieved" style={{ color: "white", margin: "1%" }} />
            <Badge color='#DDE1E6' text="Remaining" style={{ color: "white", margin: "1%" }} />
            <div className='Percentage-display'>
              <Progress type='circle' percent={56} strokeColor={twoColors} size={200} />
            </div>
          </div>
          <div className='GreenPoint2'>
            <h1>Green Point</h1>
            <Badge color='#658E9C' text="Achieved" style={{ margin: "1%" }} />
            <Badge color='#DDE1E6' text="Remaining" style={{ margin: "1%" }} />
            <div className='Percentage-display'>
              <Progress type='circle' percent={40} strokeColor={twoColors2} size={200} />
            </div>
          </div>
          <div className='GreenPoint1'>
            <h1>Green Point</h1>
            <Badge color='#C3E991' text="Achieved" style={{ color: "white", margin: "1%" }} />
            <Badge color='#DDE1E6' text="Remaining" style={{ color: "white", margin: "1%" }} />
            <div className='Percentage-display'>
              <Progress type='circle' percent={10} strokeColor={twoColors3} size={200} />
            </div>
          </div>
          <div className='Facilities'>
            <h1>Transparency of recycling facilities</h1>
            <div className='Facilities-container'>
              <div className='flex component-facility'><p>Green Point 1</p><Statistic style={{marginLeft:'140px'}} value={56} suffix="%" /></div>
              <div className='flex component-facility'><p>Green Point 2</p><Statistic style={{marginLeft:'140px'}} value={40} suffix="%" /></div>
              <div className='flex component-facility'><p>Green Point 3</p><Statistic style={{marginLeft:'140px'}} value={10} suffix="%" /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
