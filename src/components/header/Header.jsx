import TopHeaderBar from "./top-header-navbar/TopHeaderBar";
import NavBar from "./navbar/NavBar";
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
