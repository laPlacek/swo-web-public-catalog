import { Outlet } from "@remix-run/react";

export const CategoriesOutlet = () => {
  return (
    <main className="mt-4">
      <h3>Categories {`<Outlet />`}:</h3>
      <Outlet />
    </main>
  );
};
