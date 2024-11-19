import type { MetaFunction } from "@remix-run/node";
import { useCallback, useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [a, setA] = useState("");



  useEffect(() => {
    // localStore, window.
  }, [])

  setA("asdf")

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          Header
        </header>
        <main>
          Main
        </main>
      </div>
    </div>
  );
}