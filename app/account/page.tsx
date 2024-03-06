import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "@/components/submit-button";
import Button from "@/components/Button";

export default async function ProtectedPage({
  searchParams,
}: {
  searchParams: { message: string, error: boolean };
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

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
  

  return (
    <div className="container mx-auto pt-10">
      <h1 className="text-4xl font-bold">Account</h1>

      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground" action={action}>
        <label className="text-md" htmlFor="password">
          Display Name
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="text"
          name="displayName"
          placeholder=""
          minLength={3}
          maxLength={30}
          defaultValue={user?.user_metadata.displayName}
          required
        />
        <Button variant="primary" type="submit">
          Update
        </Button>

        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.error ? "❌ " : "✅ "}
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}
