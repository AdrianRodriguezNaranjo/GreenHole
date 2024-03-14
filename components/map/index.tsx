"use client"

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple, Icon } from 'leaflet';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface MapProps {
  markers: Array<LatLngExpression | LatLngTuple>,
  directions: Array<string>,
  materials: Array<string>,
  zoom?: number,
}

const defaults = {
  zoom: 9.5,
  startpoint: null
}

const customIcon = new Icon({
  iconUrl: '/icons/recycleplant.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

const locationIcon = new Icon({
  iconUrl: '/icons/location.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
})

interface Location {
  latitude: number;
  longitude: number;
}

const Map: React.FC<MapProps> = ({ markers, directions, materials, zoom = defaults.zoom }) => {

  const [location, setLocation] = useState<Location | null>(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    getLocation();
  }, []);


  return (
    <MapContainer
      center={location ? [location.latitude, location.longitude] : [28.0102963,-15.5370595]}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height: "110.2%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((position, index) => (
        <Marker key={index} position={position} draggable={false} icon={customIcon}>
          <Popup minWidth={150}>
            <div className="flex items-center space-x-4">
              <img src="/icons/recycleplant.svg" alt="Icon" className="w-10 h-10" />
              <div>
                <h1 className="text-base font-bold text-slate-500">Green Point</h1>
                <p className="text-sm">{directions[index]}</p>
              </div>
            </div>
            <div className='flex space-x-2'>
              {materials[index].split(',').map((material, materialIndex) => (
                <img
                  key={materialIndex}
                  src={`/icons/map/${material.toLowerCase().trim()}.svg`}
                  alt={`${material}${materialIndex + 1}`}
                  className="h-15 w-15"
                />
              ))}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map