import React, { useEffect, useRef, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { signOut } from "@/server/actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Menu({ isLoggedIn }: { isLoggedIn: boolean }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(isLoggedIn);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative">
      <div onClick={handleMenuClick}>
        <MenuOutlined className="text-zinc-800 self-center cursor-pointer" />
      </div>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.2 }}
          className="absolute top-10 right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50"
        >
          <ul className="pl-6">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a
                href="/"
                onClick={closeMenu}
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "#658E9C",
                }}
              >
                Home
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a
                href="/map"
                onClick={closeMenu}
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "#658E9C",
                }}
              >
                Map
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a
                href="/inforecycle"
                onClick={closeMenu}
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "#658E9C",
                }}
              >
                Recycle
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a
                href="/transparency"
                onClick={closeMenu}
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "#658E9C",
                }}
              >
                Transparency
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a
                href="/news"
                onClick={closeMenu}
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "#658E9C",
                }}
              >
                News
              </a>
            </li>
            {isLoggedIn ? (
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <a
                  onClick={async () => {
                    const signOutResponse = await signOut();

                    if (signOutResponse) {
                      toast.success("You have been signed out");
                      router.refresh()
                      router.push("/");
                      return;
                    } else {
                      toast.error("There was an error signing out");
                    }
                  }}
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#658E9C",
                  }}
                >
                  Sign out
                </a>
              </li>
            ) : (
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <a
                  href="/login"
                  onClick={closeMenu}
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#658E9C",
                  }}
                >
                  Sign in
                </a>
              </li>
            )}
          </ul>
        </motion.div>
      )}
    </div>
  );
}
