import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user?.email);

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="container mx-auto pt-10">
      <h1 className="text-4xl font-bold">THIS IS A PROTECTED PAGE</h1>
      <AuthButton />
    </div>
  );
}
