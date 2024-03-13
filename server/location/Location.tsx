"use server";

import { createClient } from '@/utils/supabase/server';

export async function getAll() {
  const supabase = createClient();
  const { data: location } = await supabase.from('location').select()

  return <pre>{JSON.stringify(location, null, 3)}</pre>
}

export async function create(direction: any,material: any,latitud: any,longitud: any) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('location')
    .insert([
      {
        direction: direction,
        latitud: parseFloat(latitud),
        longitud: parseFloat(longitud),
        material: material
      },
    ])
    .select()

  return <pre>{JSON.stringify(data, null, 1)}</pre>
}

// async function update() {
//   const supabase = createClient();
//   // Make a request
//   const { data: location } = await supabase.from('location').select()

//   return <pre>{JSON.stringify(location, null, 3)}</pre>
// }

// async function remove() {
//   const supabase = createClient();
//   // Make a request
//   const { data: location } = await supabase.from('location').select()

//   return <pre>{JSON.stringify(location, null, 3)}</pre>
// }

// const Location = {
//   getAll,
//   create,
// }

// export default Location;
