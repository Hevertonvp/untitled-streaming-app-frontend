import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

export default function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('There is no action for cartContext');
  }
  return context;
}
