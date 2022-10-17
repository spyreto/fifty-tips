import { ReactComponent as RightIcon } from "../../assets/svg/chevron_right.svg";

import {
  Container,
  BreadcrumbLinkContainer,
  BreadcrumbLink,
  LastLink,
} from "./Breadcrumb.styles";

const Breadcrumb = ({ breadcrumbList }) => {
  if (breadcrumbList.length > 0) {
    const lastIndex = breadcrumbList.length - 1;

    breadcrumbList = breadcrumbList.map((item, index) => {
      if (lastIndex === index) {
        return (
          <LastLink Link key={index}>
            {item.title}
          </LastLink>
        );
      } else {
        return (
          <BreadcrumbLinkContainer key={index}>
            <BreadcrumbLink to={item.url}>{item.title}</BreadcrumbLink>
            <RightIcon />
          </BreadcrumbLinkContainer>
        );
      }
    });
  }

  return <Container>{breadcrumbList}</Container>;
};

export default Breadcrumb;
