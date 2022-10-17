import NewProductItem from "./NewProductItem";

import {
  MainContainer,
  Title,
  NewProductsContainer,
} from "./NewProducts.styles";

const NewProducts = ({ title, list }) => {
  const newProductsList = list.map((category) => (
    <NewProductItem key={category.id} category={category} />
  ));

  return (
    <MainContainer>
      <Title>{title.toUpperCase()}</Title>
      <NewProductsContainer>{newProductsList}</NewProductsContainer>
    </MainContainer>
  );
};

export default NewProducts;
