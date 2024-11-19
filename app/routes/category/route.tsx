import { useLoaderData } from "@remix-run/react";
import { CategoriesClient } from "~/_sdk/categories";
import { CategoriesList } from "./categories-list";
import { CategoriesOutlet } from "./categories-outlet";
import { useRef, useState } from "react";

export async function loader() {
  const categoriesClient = new CategoriesClient(import.meta.env.VITE_API_URL);
  const categories = await categoriesClient.findAll();

  return categories;
}

export default function Category() {
  const categories = useLoaderData<typeof loader>();

  console.log("Grandpa says: Im checking my state!");
  const [count, setCount] = useState(0);

  const countRef = useRef(0);

  return (
    <div className="border-2 border-red-500">
      <h1>Grandpa:</h1>
      <button onClick={() => setCount((c) => c + 1)}>
        Bump Grandpa counter
      </button>
      <p>Grandpa counter: {count}</p>

      <button onClick={() => countRef.current++}>
        Bump GrandpaRef counter
      </button>
      <p>GrandpaRef counter: {countRef.current}</p>

      <CategoriesList categories={categories} />
      <CategoriesOutlet />
    </div>
  );
}
