export const initialState = {
  cartProducts: [],
  totalValue: 0,
};
export function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      return [...state, payload];
    case 'UPDATE_QUANTITY':
      return state.map((product) =>
        product.id === payload.id
          ? { ...product, quantity: payload.quantity }
          : product,
      );
    case 'REMOVE_FROM_CART':
      return state.filter((product) => product.id !== payload.id);
    // case 'UPDATE_CART_VALUE':
    //   console.log(payload.value);
    //   return [...state];

    default:
      throw new Error('Case not found');
  }
}
