import { Outlet } from "react-router-dom";

import { Header, List, Link } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <List>
            <li>
              <Link to="/" end>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/shopping-card">Shopping Card</Link>
            </li>
          </List>
        </nav>
      </Header>

      <Outlet />
    </>
  );
};
