import { CartItemContainer, ItemDetails, ItemName } from "./CartItem.styles";

const CartItem = ({ cartItem }) => {
  const { name, images, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={images[0]} alt={`${name}`} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
