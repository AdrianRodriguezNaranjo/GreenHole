"use client";

import React from "react";
import { NextPage } from "next";
import Menu from "./menu/menu";
import "./header/style.css";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  const router = useRouter();

  React.useEffect(() => {
    async function check() {
      try {
        const supabase = createClient();
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (user) {
          setIsLoggedIn(true);
          console.log("User is logged in");
        }
      } catch (error) {
        setIsLoggedIn(false);
        console.log("User isnot logged in");
      }
    }

    check();
  }, []);

  return (
    <header className="p-4 flex items-center justify-between border-b-2 border-gray-400">
<<<<<<< HEAD
      <div className="flex items-center space-x-64 header-body">
        <img
          src="/icons/logo.png"
          alt="Logo"
          className="h-10 w-10 header-img"
          onClick={() => router.push("/")}
        />
        <Menu isLoggedIn={isLoggedIn} />
=======
    <div className="flex items-center space-x-64 header-body">
      <img src="/icons/logo.png" alt="Logo" className="h-10 w-10 header-img" onClick={() => router.push("/")} />
      <Menu />
>>>>>>> 5f8670b (issue#13 header change)
      </div>
    </header>
  );
}
