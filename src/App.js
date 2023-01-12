import React from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "./pages/categories";
import CategoriesCreate from "./pages/categories/pages/create";
import CategoriesUpdate from "./pages/categories/pages/update";
import Dashboard from "./pages/dashboard";
import Signin from "./pages/signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="signin" element={<Signin />} />
      <Route path="categories" element={<Categories />} />
      <Route path="categories/create" element={<CategoriesCreate />} />
      <Route path="categories/update/:id" element={<CategoriesUpdate />} />
    </Routes>
  );
}

export default App;
