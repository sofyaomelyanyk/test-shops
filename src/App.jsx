import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ShopPage } from "./pages/ShopPage/ShopPage";
import { ShoppingCardPage } from "./pages/ShoppingCardPage/ShoppingCardPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShopPage />} />
          <Route path="/shopping-card" element={<ShoppingCardPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
