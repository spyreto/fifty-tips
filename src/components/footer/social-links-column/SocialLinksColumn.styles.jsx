import styled from "styled-components";
import { Link } from "react-router-dom";

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.6rem;
`;

export const SocialLinkTitle = styled.p`
  margin-bottom: 1.2rem;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`;

export const SocialLinksContainer = styled.div`
  display: flex;
`;

export const SocialLink = styled(Link)`
  padding: 0.8rem 2rem 0 0.8rem;
  svg {
    width: 3.2rem;
    fill: #fff;
  }
`;
