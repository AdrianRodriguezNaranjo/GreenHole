import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import { SubmitButton } from "../../components/submit-button";

export default function Login({ searchParams,}: { searchParams: { message: string }; }) {

  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }
    return redirect("/account");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      console.log(error);

      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };

  const forgotPassword = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/reset-password",
    });

    if (error) {
      return redirect("/login?message=Could not reset password, try again!");
    } else {
      return redirect("/login?message=Check email to reset password");
    }
  }

  return (
    <div className="h-screen flex-col flex items-center justify-center gap-8">
      <div className="flex flex-col justify-center items-center">
  
        <img src="../icons/logo.png" alt="logo" className="size-28"/>
        <h1 className="text-teal-800 text-4xl font-medium "> GreenHole </h1>
      </div>
      <form className="flex justify-center flex-col items-center gap-6">
        <input className="border-solid border border-teal-700 opacity-90 rounded-lg p-3 w-80"
          type="email"
          name="email"
          placeholder="Email address"
          required
        />
        
        <input className="border-solid border border-teal-700 opacity-90 rounded-lg p-3 w-80"
          type="password"
          name="password"
          placeholder="Password"

          minLength={6}

          required
        />
        <SubmitButton
          formAction={signIn}
          className=" rounded-lg p-3 w-80 bg-teal-800 text-white"
          pendingText="Signing In..."
        >
          Log In
        </SubmitButton>
      

        <SubmitButton 
          formAction={forgotPassword}
          className=""
          pendingText="Sending email..."
        >
          <p className="text-sm text-slate-400">Forgot your password? <strong className="text-teal-600">Get help signing in</strong>
          </p>
        </SubmitButton>

        {searchParams?.message && (
          <p className="">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}
