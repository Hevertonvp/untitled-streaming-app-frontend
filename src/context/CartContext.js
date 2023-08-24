/* eslint-disable react/prop-types */
import { useReducer, createContext } from 'react';
import { reducer } from '../reducer/cartReducer';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, []);

  console.log(state);

  function addToCart(name, id, price) {
    const existingProduct = state.find((product) => product.id === id);

    if (existingProduct) {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { id, quantity: existingProduct.quantity + 1 },
      });
    } else {
      const product = {
        name,
        id,
        price,
        quantity: 1,
      };
      dispatch({
        type: 'ADD_TO_CART',
        payload: product,
      });
    }
  }

  return (
    <CartContext.Provider value={addToCart}>{children}</CartContext.Provider>
  );
}
