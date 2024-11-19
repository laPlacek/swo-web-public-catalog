import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { useCallback, useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">Header</header>
        <main>
          <p>Index outlet:</p>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
