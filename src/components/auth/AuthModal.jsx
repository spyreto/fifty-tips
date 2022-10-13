import { useEffect, useCallback, useRef, Fragment } from "react";
import { useDispatch } from "react-redux";
import { closeAuthModal } from "../../store/authModal/authModalActions.js";

import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

import { ModalContainer, FadeBackground } from "./AuthModal.styles";

const AuthModal = ({ isSignInModalOpen }) => {
  const modalRef = useRef(null);

  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeAuthModal());
  };

  const handleOutsideClick = useCallback((event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      close();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <Fragment>
      <FadeBackground />
      <ModalContainer ref={modalRef}>
        {isSignInModalOpen ? <SignInModal /> : <SignUpModal />}
      </ModalContainer>
    </Fragment>
  );
};

export default AuthModal;
