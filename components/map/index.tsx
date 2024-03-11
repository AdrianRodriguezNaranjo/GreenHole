"use client"

import React ,{useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple, Icon } from 'leaflet';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface MapProps {
  markers: Array<LatLngExpression | LatLngTuple>,
  directions: Array<string>,
  zoom?: number,
}

const defaults = {
  zoom: 10,
  startpoint: null
}

const customIcon = new Icon({
  iconUrl: '/icons/recycleplant.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

const Map: React.FC<MapProps> = ({ markers, directions, zoom = defaults.zoom }) => {
  // useEffect(() => {
  //   if('geolocation' in navigator){
  //     navigator.geolocation.getCurrentPosition(function() => {

  //     })
  //   }
  // },[]);
  return (
    <MapContainer
      center={markers[0]}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height: "80vh", width: "90vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((position, index) => (
        <Marker key={index} position={position} draggable={false} icon={customIcon}>
           {/* eventHandlers={{
          onclick => (location.id)} */}
          <Popup minWidth={150}>
            <div className="flex items-center space-x-4">
              <img src="/icons/recycleplant.svg" alt="Icon" className="w-10 h-10" />
              <div>
                <h1 className="text-base font-bold">Green Point</h1>
                <p className="text-sm">{directions[index]}</p>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map