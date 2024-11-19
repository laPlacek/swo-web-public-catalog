import { useLoaderData } from "@remix-run/react";
import { CategoriesClient } from "~/_sdk/categories";
import { CategoriesList } from "./categories-list";
import { CategoriesOutlet } from "./categories-outlet";
import { useState } from "react";

export async function loader() {
  const categoriesClient = new CategoriesClient(import.meta.env.VITE_API_URL);
  const categories = await categoriesClient.findAll();

  return categories;
}

export default function Category() {
  const categories = useLoaderData<typeof loader>();

  console.log("Im checking my state! - CategoryRoute");
  const [count, setCount] = useState(0);

  return (
    <div className="border-2 border-red-500">
      <h1>CategoryRoute:</h1>
      <button onClick={() => setCount((c) => c + 1)}>
        Bump CategoryRoute counter
      </button>
      <p>CategoryRoute counter: {count}</p>

      <CategoriesList categories={categories} />
      <CategoriesOutlet />
    </div>
  );
}
