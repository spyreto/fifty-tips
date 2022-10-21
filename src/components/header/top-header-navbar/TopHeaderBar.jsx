import { useSelector } from "react-redux";

import WishlistIcon from "../wishlist-icon/WishlistIcon";
import AccountIcon from "../account-icon/AccountIcon";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import logo from "../../../assets/fifty-tips.png";

import { selectIsCartOpen } from "../../../store/cart/cartSelector";

import {
  TopHeaderBarContainer,
  LogoContainer,
  Logo,
  IconsContainer,
} from "./TopHeaderBar.styles";

const Header = () => {
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <TopHeaderBarContainer>
      <LogoContainer to="/">
        <Logo src={logo} alt="fifty tips logo" />
      </LogoContainer>

      <IconsContainer>
        <WishlistIcon />
        <AccountIcon />
        <CartIcon />
        {isCartOpen && <CartDropdown />}
      </IconsContainer>
    </TopHeaderBarContainer>
  );
};

export default Header;
