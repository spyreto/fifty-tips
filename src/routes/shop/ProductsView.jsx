import ProductsViewItem from "./ProductCard";
import {
  Container,
  ProductsContainer,
  ProductsViewBar,
} from "./ProductsView.styles";

const ProductsView = ({ products }) => {
  return (
    <Container>
      <ProductsViewBar>
        <h2>PRODUCTS VIEW BAR </h2>
      </ProductsViewBar>
      <ProductsContainer columns={3}>
        {products.map((item) => (
          <ProductsViewItem key={item.id} product={item} />
        ))}
      </ProductsContainer>
    </Container>
  );
};

export default ProductsView;
