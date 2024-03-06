import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "danger" | "success" | "warning";
  children: React.ReactNode;
}
export default function Button({ variant, children, onClick }: ButtonProps) {
  let color;

  switch (variant) {
    case "primary":
      color = "bg-green-500 hover:bg-green-600";
      break;
    case "danger":
      color = "bg-red-500 hover:bg-red-600 text-white";
      break;
  }

  return (
    <button
      className={`py-2 px-4 rounded-md no-underline ${color} transition-colors duration-200 ease-in-out`}
    >
      {children}
    </button>
  );
}
