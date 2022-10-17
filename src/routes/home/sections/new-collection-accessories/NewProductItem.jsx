import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  ProductItemContainer,
} from "./NewProductItem.styles";

const NewProductItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <ProductItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={process.env.PUBLIC_URL + imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </ProductItemContainer>
  );
};

export default NewProductItem;
