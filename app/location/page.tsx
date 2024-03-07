import { createClient } from '@/utils/supabase/server';

async function getAll(){
    const supabase = createClient();
    // Make a request
    const { data: location } = await supabase.from('location').select()

    return <pre>{JSON.stringify(location, null, 3)}</pre>
}

async function create(){
  const supabase = createClient();
  // Make a request
  const { data: location } = await supabase.from('location').select()

  return <pre>{JSON.stringify(location, null, 3)}</pre>
}

async function update(){
  const supabase = createClient();
  // Make a request
  const { data: location } = await supabase.from('location').select()

  return <pre>{JSON.stringify(location, null, 3)}</pre>
}

async function remove(){
  const supabase = createClient();
  // Make a request
  const { data: location } = await supabase.from('location').select()

  return <pre>{JSON.stringify(location, null, 3)}</pre>
}

const Location = {
  getAll,
}

export default Location;
