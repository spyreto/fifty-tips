import { useState } from "react";
import Menu from "./Menu";
import mainMenu from "../../data/mainNavigation";
import { NavBarContainer, NavItem } from "./NavBar.styles";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleOnMouseEnter = (submenu) => {
    if (submenu) {
      setOpenMenu(true);
      setActiveMenu(submenu);
    } else {
      setOpenMenu(false);
      setActiveMenu(null);
    }
  };

  const handleOnMouseOut = (submenu) => {
    setOpenMenu(false);
    setActiveMenu(null);
  };

  const mainMenuList = mainMenu.map((item) => {
    return (
      <div key={item.title}>
        <NavItem onMouseEnter={() => handleOnMouseEnter(item.submenu)}>
          {item.title}
        </NavItem>
      </div>
    );
  });

  return (
    <NavBarContainer>
      {mainMenuList}
      {openMenu && (
        <Menu items={activeMenu} handleOnMouseOut={handleOnMouseOut} />
      )}
    </NavBarContainer>
  );
};

export default NavBar;
