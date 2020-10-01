import { combineReducers } from "redux";

import login, { actualizarLogin } from "./reducers/login";
import navegacion, { actualizarUbicacion } from "./reducers/navigation";
import cart, {UpdateCart} from './reducers/cart'

export default combineReducers({
  login,
  navegacion,
  cart
});

export const actions = {
  actualizarLogin,
  actualizarUbicacion,
  UpdateCart
};
