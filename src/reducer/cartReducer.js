export const initialState = {
  products: [],
};
export function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        products: payload.products,
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === payload.id
            ? { ...product, quantity: payload.quantity }
            : product,
        ),
      };
    case 'REMOVE_FROM_CART':
      return {
        products: state.products.filter((product) => product.id !== payload.id),
      };

    default:
      throw new Error('Case not found');
  }
}
