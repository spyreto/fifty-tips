import WishlistIcon from "./WishlistIcon";
import AccountIcon from "./AccountIcon";
import CartIcon from "./CartIcon";
import logo from "../../assets/fifty-tips.png";

import {
  TopHeaderBarContainer,
  LogoContainer,
  Logo,
  IconsContainer,
} from "./TopHeaderBar.styles";

const Header = () => {
  return (
    <TopHeaderBarContainer>
      <LogoContainer to="/">
        <Logo src={logo} alt="fifty tips logo" />
      </LogoContainer>

      <IconsContainer>
        <WishlistIcon />
        <AccountIcon />
        <CartIcon />
      </IconsContainer>
    </TopHeaderBarContainer>
  );
};

export default Header;
