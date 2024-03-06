import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import Button from "@/components/Button";
import { FaSignOutAlt } from "react-icons/fa";

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
      <h1 className="text-4xl font-bold">Account</h1>
      <div className="mt-10">
        <Button
          variant="danger"
          onClick={() => {
            console.log("You clicked the button");
          }}
        >
          <FaSignOutAlt className="inline-block mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
}
