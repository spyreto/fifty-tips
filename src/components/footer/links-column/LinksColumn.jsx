import {
  ColumnContainer,
  FooterLinkTitle,
  FooterLink,
} from "./LinksColumn.styles";

const LinksColumn = ({ list }) => {
  const links = list.links.map((item, index) => {
    return (
      <FooterLink key={index} to={item.route}>
        {item.title}
      </FooterLink>
    );
  });
  return (
    <ColumnContainer>
      <FooterLinkTitle> {list.title} </FooterLinkTitle>
      {links}
    </ColumnContainer>
  );
};

export default LinksColumn;
