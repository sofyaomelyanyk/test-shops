import { Link } from "./ShopPage.styled";
import { Outlet } from "react-router-dom";

export const ShopPage = () => {
  return (
    <>
      <div>Shops</div>
      <ul>
        <li>
          <Link to="/don-burgers">Don Burgers</Link>
        </li>

        <li>
          <Link to="/beverages">Beverages</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
