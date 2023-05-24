import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ShopPage } from "./pages/ShopPage/ShopPage";
import { ShoppingCardPage } from "./pages/ShoppingCardPage/ShoppingCardPage";
import { DonBurgers } from "./components/DonBurgers/DonBurgers";
import { Beverages } from "./components/Beverages/Beverages";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ShopPage />}>
            <Route path="/don-burgers" element={<DonBurgers />} />
            <Route path="/beverages" element={<Beverages />} />
          </Route>
          <Route path="/shopping-card" element={<ShoppingCardPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
