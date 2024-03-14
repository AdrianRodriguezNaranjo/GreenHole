import { createClient } from "@/utils/supabase/server";
import { NewsItems } from "@/utils/items";
import Home from "./home/page";
import Header from "@/components/Header";
import NewsList from "@/components/NewsList";
import Footer from "@/components/footer";


export default async function Index() {
<<<<<<< HEAD


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
=======
  const supabase = await createClient();
  const { data } = await supabase.from('news').select();
>>>>>>> d87bed7 (issue#13 last changes)

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
<<<<<<< HEAD
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DeployButton />
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <Header />
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>  

</div> )
/* <!--   return (
    <div className="container mx-auto pt-10">
      <h1 className="text-4xl font-bold">THIS IS A HOME PAGE</h1>
      //{isSupabaseConnected && <AuthButton />}
    </div>
  ); --> */
}
=======
    <>
      <Header />
      <Home />
      <NewsList items={data as NewsItems[]}/>
      <Footer/>
    </>
  )
}
>>>>>>> d87bed7 (issue#13 last changes)
