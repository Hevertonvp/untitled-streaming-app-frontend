/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useReducer, createContext, useEffect, useState } from 'react';
import { reducer, initialState } from '../reducer/cartReducer';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function updateCartValue() {
    let value = 0;
    state.products?.map((cartProduct, i) => {
      value += parseFloat(cartProduct.price * cartProduct.quantity);
    });
    return value;
  }
  function addToCart(name, id, price) {
    const existingProduct = state.products.find(
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
        payload: {
          products: [...state.products, productObj],
        },
      });
    }
  }

  function updateQuantity(quantity, id) {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { quantity, id },
    });
  }

  function removeFromCart(id) {
    const existingProduct = state.products.find(
      (cartProduct) => cartProduct.id === id,
    );
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id },
    });
  }
  const cartProducts = state.products;
  return (
    <CartContext.Provider
      value={[
        state,
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
