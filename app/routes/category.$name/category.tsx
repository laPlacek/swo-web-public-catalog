import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Category as CategoryType } from "~/_sdk/categories";

// see comments in categories-list.tsx
export type CategoriesListProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & { category: CategoryType };

// see comments in categories-list.tsx
export const Category = ({
  category,
  className,
  ...props
}: CategoriesListProps) => {
  console.log("Im checking my state! - Category");

  return (
    <section className={clsx("flex flex-col gap-2", className)} {...props}>
      <h1 className="text-lg font-bold">Category {category.name}</h1>
      <p>{category.shortDescription}</p>
      <p>{category.longDescription}</p>
      <p>SwoRanking: {category.swoRanking}</p>
      {category.flags && <p>Flags: {category.flags.join(", ")}</p>}
    </section>
  );
};
