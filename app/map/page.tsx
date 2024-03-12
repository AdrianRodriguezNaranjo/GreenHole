'useClient'

import React, { useState } from 'react';
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { LatLngExpression } from 'leaflet';
import Location from '@/server/location/page';
import Header from "@/components/header/index";

const Map = dynamic(
  () => import('@/components/map/'),
  {
    loading: () => <p>A map is loading</p>,
    ssr: false
  }
);

export default async function Page() {
  let locations = await Location.getAll();
  const positions = JSON.parse(locations.props.children);

  const markers: LatLngExpression[] = positions.map((location: any) => [
    location.latitud,
    location.longitud
  ] as LatLngExpression);

  const directions: string[] = positions.map((location: any) => 
    location.direction);

  return (
    <>
      <Header/>
      <div className="bg-white-700 mx-auto my-5 w-[98%] h-[480px] relative z-10">
        <Map markers={markers} directions={directions}/>
      </div>
    </>
  )
}
