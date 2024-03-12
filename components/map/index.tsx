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

const locationIcon = new Icon({
  iconUrl: '/icons/location.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
})

interface Location {
  latitude: number;
  longitude: number;
}

const Map: React.FC<MapProps> = ({ markers, directions, zoom = defaults.zoom }) => {
  const [location, setLocation] = React.useState<Location>(
    {
      latitude: 0,
      longitude: 0
    }
  );


  const getLocation = () => {
    
    if (navigator.geolocation) {
      
      navigator.geolocation.getCurrentPosition((position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          console.log(position);
          
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
      center={markers[0]}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height: "80vh", width: "90vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Users marker */}
      {location && (
        <Marker
          position={[location.latitude, location.longitude]}
          icon={locationIcon}
        >
          <Popup>
            <div className="flex items-center space-x-4">
              <img src="/icons/location.svg" alt="Icon" className="w-10 h-10" />
              <div>
                <h1 className="text-base font-bold">Your Location</h1>
                <p className="text-sm">This is your current location</p>
              </div>
            </div>
          </Popup>
        </Marker>
      )}
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