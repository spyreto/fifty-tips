import LinksColumn from "./LinksColumn";
import SocialLinksColumn from "./SocialLinksColumn";
import { FooterContainer } from "./Footer.styles";

const aboutUs = {
  title: "about fifty tips",
  links: [
    { title: "Contact us", route: "/" },
    { title: "About us", route: "/" },
    { title: "Stores", route: "/" },
  ],
};

const help = {
  title: "help",
  links: [
    { title: "Shipping methods", route: "/" },
    { title: "Payment methods", route: "/" },
    { title: "Returns", route: "/" },
    { title: "Terms of use", route: "/" },
    { title: "Privacy policy", route: "/" },
  ],
};

const Footer = () => {
  return (
    <FooterContainer>
      <LinksColumn list={aboutUs} />
      <LinksColumn list={help} />
      <SocialLinksColumn />
    </FooterContainer>
  );
};

export default Footer;
