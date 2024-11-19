import { useLoaderData } from "@remix-run/react";
import { CategoriesClient } from "~/_sdk/categories";
import { CategoriesList } from "./categories-list";
import { CategoriesOutlet } from "./categories-outlet";

export async function loader() {
  const categoriesClient = new CategoriesClient(import.meta.env.VITE_API_URL);
  const categories = await categoriesClient.findAll();

  return categories;
}

export default function Category() {
  const categories = useLoaderData<typeof loader>();

  return (
    <>
      <CategoriesList categories={categories} />
      <CategoriesOutlet />
    </>
  );
}
