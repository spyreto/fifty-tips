import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  margin: 1.4rem;
  justify-content: flex-start;
  align-items; center;
`;

export const BreadcrumbLinkContainer = styled.div`
  display: flex;
  align-items; center;
  padding-right: 0.8rem;
  svg {
    width: 2.4rem;
    fill: #343a40;
  }
`;

export const BreadcrumbLink = styled(Link)`
  margin: auto 0;
  text-decoration: none;
  color: #343a40;
  font-size: 1.4rem;
  letter-spacing: 0.075rem;
`;

export const LastLink = styled.span`
  margin: auto 0;
  color: #343a40;
  font-size: 1.4rem;
  letter-spacing: 0.075rem;
`;
