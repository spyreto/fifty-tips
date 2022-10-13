import { AUTH_MODAL_ACTION_TYPES } from "./authModalActionTypes";

export const openSignInModal = () => ({
  type: AUTH_MODAL_ACTION_TYPES.OPEN_SIGN_IN_MODAL,
});

export const openSignUpModal = () => ({
  type: AUTH_MODAL_ACTION_TYPES.OPEN_SIGN_UP_MODAL,
});

export const closeAuthModal = () => ({
  type: AUTH_MODAL_ACTION_TYPES.CLOSE_AUTH_MODAL,
});
