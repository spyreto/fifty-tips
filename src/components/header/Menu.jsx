import { Fragment } from "react";

import {
  Container,
  Column,
  ImgColumn,
  Title,
  SubMenuItem,
} from "./Menu.styles";

const Menu = ({ activeMenu, menuImage, handleOnMouseOut }) => {
  const listItems = activeMenu.map((item, index) => {
    let submenu;

    if (item.submenu) {
      submenu = item.submenu.map((item, index) => {
        return <SubMenuItem key={index}>{item.title}</SubMenuItem>;
      });
    }

    return (
      <Column key={index}>
        <Title>{item.title}</Title>
        {submenu}
      </Column>
    );
  });

  return (
    <Container onMouseLeave={() => handleOnMouseOut()}>
      {listItems}
      <ImgColumn imageUrl={process.env.PUBLIC_URL + menuImage} />
    </Container>
  );
};

export default Menu;
