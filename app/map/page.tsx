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
      <div className=" mx-auto my-1 relative ">
        <Map markers={markers} directions={directions} materials={materials} />
        {user && (
          <>
            <Button className="bg-blue-500" href="/formMap">Add location</Button>
          </>
        )}
      </div>
    </div>
  )
}
