import { useState } from "react";

import AcountIconMenu from "./AccountIconMenu";
import { ReactComponent as PersonIcon } from "../../assets/account.svg";
import { AccountIconContainer } from "./AccountIcon.styles";

const AccountIcon = () => {
  const [isAccountMenuOpen, setisAccountMenuOpen] = useState(false);

  const toggle = () => setisAccountMenuOpen(!isAccountMenuOpen);

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
          handleIsAccountMenuOpen={setisAccountMenuOpen}
          iconId={"accountIcon"}
        />
      )}
    </AccountIconContainer>
  );
};

export default AccountIcon;
