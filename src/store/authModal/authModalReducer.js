import { AUTH_MODAL_ACTION_TYPES } from "./authModalActionTypes";

const INITIAL_STATE = {
  isSignInModalOpen: false,
  isSignUpModalOpen: false,
};

export const authModalReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    case AUTH_MODAL_ACTION_TYPES.OPEN_SIGN_IN_MODAL:
      return { isSignUpModalOpen: false, isSignInModalOpen: true };
    case AUTH_MODAL_ACTION_TYPES.OPEN_SIGN_UP_MODAL:
      return { isSignInModalOpen: false, isSignUpModalOpen: true };
    case AUTH_MODAL_ACTION_TYPES.CLOSE_AUTH_MODAL:
      return { isSignUpModalOpen: false, isSignInModalOpen: false };
    default:
      return state;
  }
};
