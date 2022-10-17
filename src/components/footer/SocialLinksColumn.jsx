import {
  ColumnContainer,
  SocialLinkTitle,
  SocialLinksContainer,
  SocialLink,
} from "./SocialLinksColumn.styles";

import { ReactComponent as Facebook } from "../../assets/svg/social-icons/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/svg/social-icons/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/svg/social-icons/instagram.svg";

const SocialLinksColumn = () => {
  return (
    <ColumnContainer>
      <SocialLinkTitle> follow us </SocialLinkTitle>
      <SocialLinksContainer>
        <SocialLink>
          <Facebook />
        </SocialLink>
        <SocialLink>
          <Instagram />
        </SocialLink>
        <SocialLink>
          <Twitter />
        </SocialLink>
      </SocialLinksContainer>
    </ColumnContainer>
  );
};

export default SocialLinksColumn;
