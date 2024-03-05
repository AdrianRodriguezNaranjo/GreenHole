import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";



export default async function Index() {
  const supabase = createClient();
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();


  console.log("isSupabaseConnected", isSupabaseConnected);
 
  
  

  return (
    <div className="container mx-auto pt-10">
      <h1 className="text-4xl font-bold">THIS IS A HOME PAGE</h1>
      {isSupabaseConnected && <AuthButton />}
    </div>
  );
}
