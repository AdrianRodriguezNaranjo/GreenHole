import { createClient } from "@/utils/supabase/server";
import { NewsItems } from "@/utils/items";
import NewsList from "@/components/NewsList";

export default async function page() {
  const supabase = await createClient();
  const { data } = await supabase.from('news').select()
 
  return (<NewsList items={data as NewsItems[]} />);
}
