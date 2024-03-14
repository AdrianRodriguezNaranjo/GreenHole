"use client";

import React, { useState } from 'react';
import { create } from '@/server/location/Location';
import { Button, ConfigProvider, Form, Input } from 'antd';
import Header from '@/components/Header';
import Footer from '@/components/footer';
import './style.css';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
});

export default function FormMap() {
  const [direction, setDirection] = useState('');
  const [material, setMaterial] = useState('');
  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');

  const handleChangeDirection = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setDirection(e.target.value);
  };

  const handleChangeMaterial = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setMaterial(e.target.value);
  };

  const handleChangeLatitud = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setLatitud(e.target.value);
  };

  const handleChangeLongitud = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setLongitud(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await create(direction, material, latitud, longitud);
      console.log('Datos insertados correctamente');
    } catch (error) {
      console.error('Error al insertar los datos:', error);
    }
  };

  return (
    <div className='mainpage'>
      <Header />
      <div className='container'>
      <ConfigProvider
            theme={{
                token: {
                    fontFamily: poppins.style.fontFamily,
                },
            }}
        >
        <Form onFinish={handleSubmit} className='form p-3'>
          <Form.Item label="Direction" name="direction">
            <Input type="text" value={direction} onChange={handleChangeDirection} />
          </Form.Item>
          <Form.Item label="Material" name="material">
            <Input type="text" value={material} onChange={handleChangeMaterial} />
          </Form.Item>
          <Form.Item label="Latitud" name="latitud">
            <Input type="number" value={latitud} onChange={handleChangeLatitud} />
          </Form.Item>
          <Form.Item label="Longitud" name="longitud">
            <Input type="number" value={longitud} onChange={handleChangeLongitud} />
          </Form.Item>
          <div className='flex flex-row justify-center space-x-4'>
          <Button href="/map" htmlType="submit" style={{backgroundColor:'#015958',color:'white'}}>Confirm</Button>
          <Button href="/map" htmlType="button">Cancel</Button>
          </div>
        </Form>
        </ConfigProvider>
      </div>
      <div style={{ bottom: '0' }}>
        <Footer />
      </div>
    </div>
  );
}
