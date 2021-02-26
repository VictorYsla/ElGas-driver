import { combineReducers } from "redux";

import login, { actualizarLogin } from "./reducers/login";
import navegacion, { actualizarUbicacion } from "./reducers/navigation";
import cart, { UpdateCart } from "./reducers/cart";
import factura, { actualizarFacturacion } from "./reducers/facturacion";

export default combineReducers({
  login,
  navegacion,
  cart,
  factura,
});

export const actions = {
  actualizarLogin,
  actualizarUbicacion,
  actualizarFacturacion,
};
