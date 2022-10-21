import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductCartContainer = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  height: 40rem;
  align-items: center;
  position: relative;
`;

export const Badge = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  font-size: 1.4rem;
  text-transform: uppercase;
  padding: 0.8rem;
  background-color: #212529;
  color: #fff;
  z-index: 2;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  padding: 0 2.4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-bottom: 0.5rem;
  }

  button {
    width: 70%;
    opacity: 0.7;
    position: absolute;

    top: 18rem;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 20%;
  display: grid;
  grid-template-rows: 80% 20%;
  grid-template-rows: repeat(2, 1fr);
  padding: 1.2rem;
  column-gap: 0.8rem;
`;

export const Name = styled.span`
  font-size: 1.6rem;
  grid-area: 1/1/2/3;
`;

export const WishlistIcon = styled(Link)`
  cursor: pointer;
  grid-area: 2/2/3/3;
  justify-self: center;

  svg {
    width: 2.4rem;
    fill: #212529;
  }
`;

export const Price = styled.span`
  justify-self: start;
  grid-area: 2/1/3/2;
  font-size: 1.8rem;
  font-weight: 700;
`;

export const DiscountContainer = styled.div`
  grid-area: 2/1/3/2;
  display: flex;
  gap: 0.2rem;
`;

export const NewPrice = styled.span`
  grid-area: 1/2/2/3;
  font-size: 1.8rem;
  font-weight: 700;
  color: #f03e3e;
`;

export const OldPrice = styled.span`
  grid-area: 1/2/2/3;
  font-size: 1.6rem;
  vertical-align: bottom;
  text-decoration: line-through;
`;
