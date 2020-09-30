import { combineReducers } from "redux";

import login, { actualizarLogin } from "./reducers/login";
import navegacion, { actualizarUbicacion } from "./reducers/navigation";

export default combineReducers({
  login,
  navegacion,
});

export const actions = {
  actualizarLogin,
  actualizarUbicacion,
};
