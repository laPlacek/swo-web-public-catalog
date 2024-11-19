import { Outlet } from "@remix-run/react";
import { useState } from "react";

export const CategoriesOutlet = () => {
  console.log("Im checking my state! - CategoriesOutlet");
  const [count, setCount] = useState(0);

  return (
    <main className="mt-4 border-blue-500 border-2">
      <h1>CategoriesOutlet:</h1>

      <button onClick={() => setCount((c) => c + 1)}>
        Bump CategoriesOutlet counter
      </button>
      <p>CategoriesOutlet counter: {count}</p>

      <CategoriesOutletChild />
    </main>
  );
};

const CategoriesOutletChild = () => {
  console.log("Im checking my state! - CategoriesOutletChild");
  const [count, setCount] = useState(0);

  return (
    <div className="border-2 border-yellow-500">
      <h2>CategoriesOutletChild:</h2>

      <button onClick={() => setCount((c) => c + 1)}>
        Bump CategoriesOutletChild counter
      </button>
      <p>CategoriesOutletChild counter: {count}</p>
    </div>
  );
};
