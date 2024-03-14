import { createClient } from "@/utils/supabase/server";
import { NewsItems } from "@/utils/items";
import Home from "./home/page";
import Header from "@/components/Header";
import NewsList from "@/components/NewsList";
import Footer from "@/components/footer";

export default async function Index() {
  const supabase = await createClient();
  const { data } = await supabase.from('news').select();

  // const canInitSupabaseClient = async () => {
  //   // This function is just for the interactive tutorial.
  //   // Feel free to remove it once you have Supabase connected.
  //   try {
  //     await createClient();
  //     return true;
  //   } catch (e) {
  //     return false;
  //   }
  // };

  // const isSupabaseConnected = canInitSupabaseClient();

  return (
    <>
      <Header />
      <Home />
      <NewsList items={data as NewsItems[]}/>
      <Footer/>
    </>
  )
}
