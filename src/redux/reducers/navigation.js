export const ACTUALIZAR_UBICACION = "ACTUALIZAR_UBICACION";

export const actualizarUbicacion = (routeName) => ({
  type: ACTUALIZAR_UBICACION,
  routeName,
});

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTUALIZAR_UBICACION:
      return {
        ...state,
        routeName: action.routeName,
      };
    default:
      return state;
  }
};
