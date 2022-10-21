import { useEffect, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";

import {
  openSignInModal,
  openSignUpModal,
} from "../../../store/authModal/authModalActions.js";

import Button from "../../button/Button";

import {
  AccountIconMenuContainer,
  Divider,
  SignUpLabel,
} from "./AccountIconMenu.styles";

const AccountIconMenu = ({ handleIsAccountMenuOpen, iconId }) => {
  const accountDropDownRef = useRef(null);

  const close = () => handleIsAccountMenuOpen(false);

  const handleOutsideClick = useCallback((event) => {
    if (
      accountDropDownRef.current &&
      !accountDropDownRef.current.contains(event.target) &&
      !(0 === iconId.localeCompare(event.target.id))
    ) {
      close();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = useDispatch();
  const handleOpenSignInModal = () => {
    close();
    dispatch(openSignInModal());
  };
  const handleOpenSignUpModal = () => {
    close();
    dispatch(openSignUpModal());
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
    // Specify how to clean up after this effect:
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AccountIconMenuContainer ref={accountDropDownRef}>
      <Button onClick={() => handleOpenSignInModal()}>SIGN IN</Button>
      <Divider />
      <SignUpLabel>Don't have an account?</SignUpLabel>
      <Button onClick={() => handleOpenSignUpModal()}>SIGN UP</Button>
    </AccountIconMenuContainer>
  );
};

export default AccountIconMenu;
