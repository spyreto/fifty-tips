import { useState } from "react";

import AcountIconMenu from "../account-icon-menu/AccountIconMenu";
import { ReactComponent as PersonIcon } from "../../../assets/svg/account.svg";
import { AccountIconContainer } from "./AccountIcon.styles";

const AccountIcon = () => {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const toggle = () => setIsAccountMenuOpen(!isAccountMenuOpen);

  const handleButtonClick = (event) => {
    event.preventDefault();
    toggle();
  };

  return (
    <AccountIconContainer>
      <PersonIcon
        id="accountIcon"
        className="account-icon"
        onClick={handleButtonClick}
      />
      {isAccountMenuOpen && (
        <AcountIconMenu
          handleIsAccountMenuOpen={setIsAccountMenuOpen}
          iconId={"accountIcon"}
        />
      )}
    </AccountIconContainer>
  );
};

export default AccountIcon;
