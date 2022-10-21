import { combineReducers } from "redux";

// import { userReducer } from "./user/userReducer";
import { authModalReducer } from "./authModal/authModalReducer";
import { cartReducer } from "./cart/cartReducer";

export default combineReducers({
  cart: cartReducer,
  authModal: authModalReducer,
});
