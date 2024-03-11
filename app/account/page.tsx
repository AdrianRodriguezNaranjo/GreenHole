import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "@/components/submit-button";
import Button from "@/components/Button";
import Account from "@/components/Account";

export default async function ProtectedPage() {
  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const action = async (formData: FormData) => {
    "use server";
  
    const displayName = formData.get("displayName") as string;
   
    const supabase = createClient();

    const { error } = await supabase.auth.updateUser({
      data: {
        displayName,
      },
    });

    if (error) {
      return redirect("/account?message=Could not update user&error=true");
    } else {
      return redirect("/account?message=User updated successfully");
    }
    
    
  }
  

  return <Account user={user} />
}
