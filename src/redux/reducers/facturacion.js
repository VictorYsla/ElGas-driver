export const ACTUALIZAR_FACTURACION = "ACTUALIZAR_FACTURACION";

export const actualizarFacturacion = (factura) => ({
  type: ACTUALIZAR_FACTURACION,
  factura,
});

const initialState = {
  factura: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTUALIZAR_FACTURACION:
      return {
        ...state,
        factura: action.factura,
      };
    default:
      return state;
  }
};
