// import { useDispatch, useSelector } from 'react-redux';

import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import { ReactComponent as HeartIcon } from "../../assets/svg/wishlist.svg";

import {
  ProductCartContainer,
  Badge,
  ImageContainer,
  Footer,
  Name,
  Price,
  DiscountContainer,
  OldPrice,
  NewPrice,
  WishlistIcon,
} from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const { name, price, images, badges, compareAtPrice } = product;

  const addProductToCart = () => console.log("skata");

  return (
    <ProductCartContainer>
      {badges && <Badge type={badges}>{badges}</Badge>}
      <ImageContainer>
        <img src={images[0]} alt={`${name}`} />
        <Button onClick={addProductToCart}>Add to card</Button>
      </ImageContainer>
      <Footer>
        <Name>{name}</Name>
        {compareAtPrice ? (
          <DiscountContainer>
            <NewPrice>
              {price}
              {`\u20AC`}
            </NewPrice>
            <OldPrice>
              {compareAtPrice}
              <span />
            </OldPrice>
          </DiscountContainer>
        ) : (
          <Price>
            {price}
            {`\u20AC`}
          </Price>
        )}
        <WishlistIcon>
          <HeartIcon />
        </WishlistIcon>
      </Footer>
    </ProductCartContainer>
  );
};

export default ProductCard;
