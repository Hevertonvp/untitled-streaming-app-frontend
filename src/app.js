import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/registerLoginForm/login';
import Register from './components/homepage/register-form';
import Products from './components/products/';
import Cart from './components/cart';
import Main from './components/homepage/main';
import Home from './pages/homePage';
import Dashboard from './pages/dashboard';
import { CartProvider } from './context/CartContext';
import { BgProvider } from './context/blurBgContext';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <BgProvider>
            <Routes>
              <Route element={<Home />}>
                <Route path="/" element={<Main />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
              </Route>
            </Routes>
          </BgProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

// If you want to start measuring performance in your App, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
