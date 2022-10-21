import styled from "styled-components";

export const WishlistIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 3.6rem;
    height: 3.6rem;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 1rem;
  font-weight: bold;
  bottom: 1.6rem;
`;
