import { createClient } from "@/utils/supabase/server";
import { NewsItems } from "@/utils/items";
import Home from "./home/page";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import './style.css';
import NewsList2 from "@/components/NewsList2";

export default async function Index() {
  const supabase = await createClient();
  const { data } = await supabase.from('news').select()

  return (
    <div className="home" >
      <div style={{ width: '100%' }}>
        <Header />
      </div>
      {/* <Home /> */}
      <NewsList2 items={data as NewsItems[]} />
      <div style={{ width: '100%' }}>
        <Footer />
      </div>
    </div>
  )
}
