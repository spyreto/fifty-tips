import {
  Container,
  Column,
  ImgColumn,
  Title,
  SubMenuItem,
} from "./Menu.styles";
import submenuImage from "../../assets/main-menu/men.jpg";

const Menu = ({ items, handleOnMouseOut }) => {
  console.log(items);

  const listItems = items.map((item) => {
    let submenu;

    if (item.submenu) {
      submenu = item.submenu.map((item) => {
        return <SubMenuItem>{item.title}</SubMenuItem>;
      });
    }

    return (
      <Column>
        <Title>{item.title}</Title>
        {submenu}
      </Column>
    );
  });

  return (
    <Container onMouseLeave={() => handleOnMouseOut()}>
      {listItems}
      <ImgColumn imagePath={submenuImage} />
    </Container>
  );
};

export default Menu;
