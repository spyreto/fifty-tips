import { combineReducers } from "redux";

import { userReducer } from "./user/userReducer";
import { authModalReducer } from "./authModal/authModalReducer";

export default combineReducers({
  user: userReducer,
  authModal: authModalReducer,
});
