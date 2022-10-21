import styled from "styled-components";
import { Link } from "react-router-dom";

export const TopHeaderBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)``;

export const Logo = styled.img`
  width: 15rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;
`;
