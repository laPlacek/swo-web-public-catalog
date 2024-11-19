import { Outlet } from "@remix-run/react";
import { useState } from "react";

export const CategoriesOutlet = () => {
  console.log("Papa says: Im checking my state!");
  const [count, setCount] = useState(0);

  return (
    <main className="mt-4 border-blue-500 border-2">
      <h1>Papa:</h1>

      <button onClick={() => setCount((c) => c + 1)}>Bump Papa counter</button>
      <p>Papa counter: {count}</p>

      <CategoriesOutletChild
        onClick={() => console.log("Papa says: My child was clicked")}
      />
    </main>
  );
};

const CategoriesOutletChild = ({ onClick }: { onClick?: () => void }) => {
  console.log("Child says: Im checking my state!");
  const [count, setCount] = useState(0);

  return (
    <div className="border-2 border-yellow-500">
      <h2>Child:</h2>

      <button
        onClick={() => {
          setCount((c) => c + 1);
          onClick?.();
        }}
      >
        Bump Child counter
      </button>
      <p>Child counter: {count}</p>
    </div>
  );
};
