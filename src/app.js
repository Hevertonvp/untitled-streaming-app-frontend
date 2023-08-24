import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
        </CartProvider>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;

// If you want to start measuring performance in your App, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
