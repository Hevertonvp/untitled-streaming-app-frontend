import React, { useContext } from 'react';
import Cart from '../components/cart';
import Layout from '../components/homepage/Layout';
import CartContext from '../context/CartContext';

function CartPage() {
  return (
    <Layout>
      <Cart />
    </Layout>
  );
}

export default CartPage;
