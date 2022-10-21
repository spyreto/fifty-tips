import { CART_ACTION_TYPES } from "./cartActionTypes";

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

const addCartItem = (state, productToAdd) => {
  const existingCartItem = state.cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  let cartItems;
  if (existingCartItem) {
    cartItems = state.cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    cartItems = [...state.cartItems, { ...productToAdd, quantity: 1 }];
  }
  return {
    ...state,
    cartItems,
  };
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.CART_ADD_ITEM:
      return addCartItem(state, payload);
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};
