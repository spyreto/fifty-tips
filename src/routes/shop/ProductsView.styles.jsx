import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3.6rem;
  width: 100%;
`;

export const ProductsViewBar = styled.div`
  width: 100%;
  display: flex;
  height: 3rem;
  background-color: #91a7ff;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  align-items: center;
  justify-items: center;
  margin-top: 2.4rem;
  row-gap: 4.4rem;
`;
