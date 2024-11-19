import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { CategoriesClient } from "~/_sdk/categories";
import { Category as CategoryC } from "./category";

export async function loader({ params }: LoaderFunctionArgs) {
  const categoriesClient = new CategoriesClient(import.meta.env.VITE_API_URL);
  const category = await categoriesClient.getByName(params.name!);

  if (!category) {
    throw Response.json({ message: "Category not found" }, { status: 404 });
  }

  return category;
}

export default function Category() {
  const category = useLoaderData<typeof loader>();
  return <CategoryC category={category} />;
}
