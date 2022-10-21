import { useState } from "react";
import Menu from "../menu/Menu";
import mainMenu from "../../../data/mainNavigation";
import { NavBarContainer, NavItem } from "./NavBar.styles";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleOnMouseEnter = ({ submenu, imageUrl }) => {
    if (submenu) {
      setOpenMenu(true);
      setActiveMenu({ submenu, imageUrl });
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
        <NavItem
          onMouseEnter={() =>
            handleOnMouseEnter({
              submenu: item.submenu,
              imageUrl: item.imageUrl,
            })
          }
        >
          {item.title}
        </NavItem>
      </div>
    );
  });

  return (
    <NavBarContainer>
      {mainMenuList}
      {openMenu && (
        <Menu
          activeMenu={activeMenu.submenu}
          menuImage={activeMenu.imageUrl}
          handleOnMouseOut={handleOnMouseOut}
        />
      )}
    </NavBarContainer>
  );
};

export default NavBar;
