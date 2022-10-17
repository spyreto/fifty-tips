import ProductsView from "./ProductsView";
import FiltersSidebar from "./FiltersSidebar";

import Breadcrumb from "../../components/shared/Breadcrumb";
import { Container, ShopContainer } from "./Shop.styles";
import { url } from "../../services/utils";

import { productsData } from "../../services/endpoints/fake-db";

const Shop = () => {
  const breadcrumb = [
    { title: "Home", url: url.home() },
    { title: "Shop", url: url.catalog() },
    // { title: product.name, url: url.product(product) },
  ];

  return (
    <Container>
      <Breadcrumb breadcrumbList={breadcrumb} />
      <ShopContainer>
        <FiltersSidebar />
        <ProductsView products={productsData} />
      </ShopContainer>
    </Container>
  );
};

export default Shop;
