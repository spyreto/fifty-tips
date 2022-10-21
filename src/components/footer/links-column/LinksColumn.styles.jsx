import styled from "styled-components";
import { Link } from "react-router-dom";

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.6rem;
`;

export const FooterLinkTitle = styled.p`
  margin-bottom: 1.2rem;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  font-size: 1.4rem;
  letter-spacing: 0.05rem;
  cursor: pointer;
  text-decoration: none;
  padding: 0.8rem 0.4rem;
`;
