import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2.4rem;
  margin: 2.4rem;
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.075rem;
`;
