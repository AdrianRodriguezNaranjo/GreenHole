import { createClient } from '@/utils/supabase/server';

async function getAll() {
  const supabase = createClient();
  // Make a request
  const { data: location } = await supabase.from('location').select()

  return <pre>{JSON.stringify(location, null, 3)}</pre>
}

async function create() {
  const supabase = createClient();

  const newData = {
    "direction": "La Cuestecilla",
    "material": "Paper",
    "latitud": 45.05465,
    "longitud": -5.15484
  }

  const { data: location } = await supabase.from('location').insert(newData)

  return <pre>{JSON.stringify(location, null, 1)}</pre>
}

async function update() {
  const supabase = createClient();
  // Make a request
  const { data: location } = await supabase.from('location').select()

  return <pre>{JSON.stringify(location, null, 3)}</pre>
}

async function remove() {
  const supabase = createClient();
  // Make a request
  const { data: location } = await supabase.from('location').select()

  return <pre>{JSON.stringify(location, null, 3)}</pre>
}

const Location = {
  getAll,
  create,
}

export default Location;
