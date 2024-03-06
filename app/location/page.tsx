import { createClient } from '@/utils/supabase/server';

export default async function Location(){
    const supabase = createClient();
    // Make a request
    const { data: location } = await supabase.from('location').select()

    return <pre>{JSON.stringify(location, null, 3)}</pre>
}
