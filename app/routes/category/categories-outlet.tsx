import { Outlet } from "@remix-run/react";
import { useState } from "react";

export const CategoriesOutlet = () => {
  console.log("Im checking my state! - CategoriesOutlet");
  const [count, setCount] = useState(0);

  return (
    <main className="mt-4 border-blue-500 border-2">
      <button onClick={() => setCount((c) => c + 1)}>
        Bump CategoriesOutlet counter
      </button>
      <p>CategoriesOutlet counter: {count}</p>

      <h3>Categories {`<Outlet />`}:</h3>
      <Outlet />
    </main>
  );
};
