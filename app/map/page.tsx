import dynamic from "next/dynamic";
import { useMemo } from "react";
import { LatLngExpression } from 'leaflet';
import Location from '@/app/location/page';

export default async function Page() {
  const Map = useMemo(() => dynamic(
    () => import('@/components/map/'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  let locations = await Location.getAll();
  const positions = JSON.parse(locations.props.children);
  
  const markers: LatLngExpression[] = positions.map((location: any) => [
    location.latitud,
    location.longitud
  ] as LatLngExpression);

  return (
    <>
      <div className="bg-white-700 mx-auto my-5 w-[98%] h-[480px]">
        <Map markers={markers} />
      </div>
    </>
  )
}