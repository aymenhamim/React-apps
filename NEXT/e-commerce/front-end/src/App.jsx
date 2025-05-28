import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./pages/public/layout";
import ProductsPage from "./pages/public/products/products-page";
import ProductPage from "./pages/public/product/product-page";
import HomePage from "./pages/public/home/home-home";
import CategoryPage from "./pages/public/category/category-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<HomePage />} index />
          <Route path="products" element={<ProductsPage />} index />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path="category" element={<CategoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
