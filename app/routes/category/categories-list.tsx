import { Link } from "@remix-run/react";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Category, normalizeName } from "~/_sdk/categories";
import clsx from "clsx";

// by allowing all DetailedHTMLProps<...> props we make component that can be used in many different contexts.
// a bit of overkill for route but good practise for evrything considered reusable
export type CategoriesListProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & { categories: Category[] };

// we use clsx for classNames composition - apply our own styles but also allow to use other styles
export const CategoriesList = ({
  categories,
  className,
  ...props
}: CategoriesListProps) => {
  return (
    <nav className={clsx("flex flex-col", className)} {...props}>
      <h1>Categories:</h1>
      <ul className="flex flex-row gap-4">
        {categories.map((c) => (
          <li key={c.id}>
            <Link to={`/category/${normalizeName(c.name)}`}>{c.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
