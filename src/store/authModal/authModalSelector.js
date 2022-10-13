import { AUTH_MODAL_ACTION_TYPES } from "./authModalActionTypes";

const INITIAL_STATE = {
  isSignUpOpen: false,
  isSignInOpen: false,
};

export const authModalReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    case AUTH_MODAL_ACTION_TYPES.TOGGLE_SIGN_IN:
      return { ...state, isSignInOpen: !state.isSignInOpen };
    case AUTH_MODAL_ACTION_TYPES.TOGGLE_SIGN_OUT:
      return { ...state, isSignUpOpen: !state.isSignUpOpen };
    default:
      return state;
  }
};
