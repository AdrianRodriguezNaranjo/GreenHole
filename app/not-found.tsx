import Button from "@/components/Button";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen select-none">
      <h1 className="text-7xl">Bruhh, the page was not found 💀</h1>
      <Button variant="primary">
        <a href="/">Go back home</a>
      </Button>
    </div>
  );
}
