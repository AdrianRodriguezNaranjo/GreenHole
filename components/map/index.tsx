"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from 'leaflet';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface MapProps {
  markers: Array<LatLngExpression | LatLngTuple>,
  zoom?: number,
}

const defaults = {
  zoom: 10,
}

const Map: React.FC<MapProps> = ({ markers, zoom = defaults.zoom }) => { // Actualizado la definición de componente
  return (
    <MapContainer
      center={markers[0]} // Definiendo el centro del mapa como la primera posición del marcador
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height: "80vh", width: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((position, index) => ( // Mapeando sobre las posiciones de los marcadores
        <Marker key={index} position={position} draggable={false}>
          <Popup>Hey ! I study here</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map