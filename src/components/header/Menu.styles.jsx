import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  min-height: 35rem;
  background-color: #f8f9fa;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 4.4rem);
  z-index: 10;
`;

export const Column = styled.div`
  width: 10rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  margin: 3.2rem 1.6rem 3.2rem 3.2rem;
  gap: 1.6rem;
`;

export const ImgColumn = styled.div`
  flex-grow: 1;
  width: 20rem;
  margin-left: 8.6rem;
  background-image: linear-gradient(
      rgba(34, 34, 34, 0.2),
      rgba(34, 34, 34, 0.2)
    ),
    url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

export const Title = styled.h4`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
`;

export const SubMenuItem = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #000;
  font-size: 1.6rem;
  font-weight: 500;
`;
