/* eslint-disable react/prop-types */
import { useReducer, createContext } from 'react';
import { reducer } from '../reducer/cartReducer';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartProducts, dispatch] = useReducer(reducer, []);

  function addToCart(name, id, price) {
    const existingProduct = cartProducts.find(
      (cartProduct) => cartProduct.id === id,
    );
    if (existingProduct) {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { id, quantity: existingProduct.quantity + 1 },
      });
    } else {
      const productObj = {
        name,
        id,
        price,
        quantity: 1,
      };
      dispatch({
        type: 'ADD_TO_CART',
        payload: productObj,
      });
    }
    console.log(cartProducts);
  }

  function updateCartValue() {
    let value = 0;
    cartProducts?.map((cartProduct, i) => {
      value += parseFloat(cartProduct.price * cartProduct.quantity);
    });
    console.log(value);
    // dispatch({
    //   type: 'UPDATE_CART_VALUE',
    //   payload: value,
    // });
  }

  function updateQuantity(quantity, id) {
    const existingProduct = cartProducts.find(
      (cartProduct) => cartProduct.id === id,
    );
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { quantity, id },
    });
  }

  function removeFromCart(id) {
    const existingProduct = cartProducts.find(
      (cartProduct) => cartProduct.id === id,
    );
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id },
    });
  }
  return (
    <CartContext.Provider
      value={[
        cartProducts,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateCartValue,
      ]}
    >
      {children}
    </CartContext.Provider>
  );
}
