import { Link } from "@remix-run/react";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
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
  console.log("Uncle Joe says: Im checking my state!");
  const [count, setCount] = useState(0);

  return (
    <nav
      className={clsx("flex flex-col border-2 border-green-500", className)}
      {...props}
    >
      <h1>Uncle Joe:</h1>

      <button onClick={() => setCount((c) => c + 1)}>
        Bump Uncle Joe's counter
      </button>
      <p>Uncle Joe's counter: {count}</p>
    </nav>
  );
};
