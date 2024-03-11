"use client";

import Button from "./Button";
import React from "react";
import { User } from "@supabase/supabase-js";
import { updateUser } from "@/server/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface AccountProps {
  user: User;
}

export default function Account({ user }: AccountProps) {
  const router = useRouter();
  const [displayName, setDisplayName] = React.useState(user?.user_metadata?.displayName);
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div className="container mx-auto pt-10">
      <h1 className="text-4xl font-bold">Account</h1>

      <div className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
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
          defaultValue={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
        <Button
          variant="primary"
          disabled={isLoading}
          onClick={async () => {
           
            const promise = new Promise(async (resolve, reject) => {
              if (!displayName) return reject("Please enter a display name")
              if (displayName.length < 3) return reject("Display name must be at least 3 characters long")
              if (displayName.length > 30) return reject("Display name must be at most 30 characters long")
              if (displayName === user.user_metadata.displayName) return reject("Display name is the same as before")

              const updated = await updateUser({
                data: {
                  displayName,
                },
              });
  
              if (updated) {
                router.refresh()
                resolve(true)
              } else {
                reject("An error occurred, please try again")
              }
            })

            toast.promise(promise, {
              loading: "Updating...",
              success: "Updated!",
              error: (err) => (err as string),
            })
          }}
          
        >
          Update
        </Button>
      </div>
    </div>
  );
}
