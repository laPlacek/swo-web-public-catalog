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

  console.log("Im checking my state! - Category Route");
  const [count, setCount] = useState(0);

  return (
    <div className="border-2 border-red-500">
      <button onClick={() => setCount((c) => c + 1)}>
        Bump Category Route counter
      </button>
      <p>Category Route counter: {count}</p>

      <CategoriesList categories={categories} />
      <CategoriesOutlet />
    </div>
  );
}
