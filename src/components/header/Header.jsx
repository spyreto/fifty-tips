import TopHeaderBar from "./TopHeaderBar";
import NavBar from "./NavBar";
import { HeaderContainer } from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <TopHeaderBar />
      <NavBar />
    </HeaderContainer>
  );
};

export default Header;
