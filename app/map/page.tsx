"useClient";

import React, { useState } from "react";
import dynamic from "next/dynamic";
<<<<<<< HEAD
import { LatLngExpression } from "leaflet";
import { getAll } from "@/server/location/Location";
import Header from "@/components/header/index";
import { createClient } from "@/utils/supabase/server";
=======
import { LatLngExpression } from 'leaflet';
import { getAll } from '@/server/location/Location';
import Header from "@/components/Header";
import { createClient } from '@/utils/supabase/server';
import { Button } from 'antd';
<<<<<<< HEAD
>>>>>>> 5f8670b (issue#13 header change)

import { Button } from "antd";
=======
import Footer from "@/components/footer";
>>>>>>> d87bed7 (issue#13 last changes)

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
      <div className="bg-white-700 mx-auto my-5 w-auto h-[480px] relative z-10">
        <Map markers={markers} directions={directions} materials={materials} />
<<<<<<< HEAD
      </div>
      {user && (
<<<<<<< HEAD
        <>
          <Button href="/formMap">Add location</Button>
        </>
      )}
    </>
  );
=======
=======
        {user && (
>>>>>>> d87bed7 (issue#13 last changes)
          <>
            <Button className="bg-blue-500" href="/formMap">Add location</Button>
          </>
        )}
      </div>
    </div>
  )
>>>>>>> 5f8670b (issue#13 header change)
}
