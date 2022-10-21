import { CART_ACTION_TYPES } from "./cartActionTypes";

export const addItemToCart = (productToAdd) => ({
  type: CART_ACTION_TYPES.CART_ADD_ITEM,
  payload: productToAdd,
});

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const setIsCartOpen = (boolean) => ({
  type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
  payload: boolean,
});

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  // return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
};
