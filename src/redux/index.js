import { combineReducers } from "redux";

import login, { actualizarLogin } from "./reducers/login";

export default combineReducers({
  login,
});

export const actions = {
  actualizarLogin,
};
