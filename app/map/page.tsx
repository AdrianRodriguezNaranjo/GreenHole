"useClient";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { LatLngExpression } from 'leaflet';
import { getAll } from '@/server/location/Location';
import Header from "@/components/Header";
import { createClient } from '@/utils/supabase/server';
import { Button } from 'antd';
import './style.css';

const Map = dynamic(() => import("@/components/map/"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

export default async function Page() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let locations = await getAll();

  const positions = JSON.parse(locations.props.children);

  const markers: LatLngExpression[] = positions.map(
    (location: any) => [location.latitud, location.longitud] as LatLngExpression
  );

  const directions: string[] = positions.map(
    (location: any) => location.direction
  );

  const materials: string[] = positions.map(
    (location: any) => location.material
  );

  return (
    <div>
      <Header />
        {user && (
          <>
            <Button className="bg-teal-800" href="/formMap" style={{borderColor:'black',color:'white', position:'fixed', zIndex:'1', marginTop:'180%', marginLeft:'70%'}}>Add location</Button>
          </>
        )}
      <div className="bg-white-700 mx-auto my-5 w-100 h-[480px] relative z-10" style={{width:'100%', zIndex:'0'}}>
        <Map markers={markers} directions={directions} materials={materials}/>
      </div>
    </div>
  )
}
