import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./CartIcon.styles";

const CartIcon = () => {
  return (
    <CartIconContainer>
      <ShoppingBagIcon className="shopping-icon" />
      <ItemCount>5</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
