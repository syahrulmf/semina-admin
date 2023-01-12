import { Route, Routes } from "react-router-dom";

import Categories from "../pages/categories";
import CategoriesCreate from "../pages/categories/pages/create";
import CategoriesUpdate from "../pages/categories/pages/update";

export function CategoriesRoute() {
  return (
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/create" element={<CategoriesCreate />} />
      <Route path="/update/:categoryId" element={<CategoriesUpdate />} />
    </Routes>
  );
}
