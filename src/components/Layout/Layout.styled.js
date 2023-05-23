import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  padding: 30px;
  border-bottom: 1px solid black;
`;

export const List = styled.ul`
  display: flex;
  gap: 30px;
  align-content: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  color: black;

  &.active {
    color: #ab7beb;
  }
`;
