import { ReactComponent as HeartIcon } from "../../assets/wishlist.svg";
import { WishlistIconContainer, ItemCount } from "./WishlistIcon.styles";

const WishlistIcon = () => {
  return (
    <WishlistIconContainer>
      <HeartIcon className="shopping-icon" />
      <ItemCount>10</ItemCount>
    </WishlistIconContainer>
  );
};

export default WishlistIcon;
