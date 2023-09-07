/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import ProductCard from './product-card';
import LoadingSpiner from '../loadingSpiner';
import { ToastContainer, toast } from 'react-toastify';
import { BsCart, BsCartCheckFill } from 'react-icons/bs';
import 'react-toastify/dist/ReactToastify.css';
const bgImg = '.././images/han.png';

function Products() {
  const { data: products, error, loading } = useFetch('/api/v1/products/');
  const [state, addToCart, removeFromCart, updateQuantity] =
    useContext(CartContext);
  const [openOrderMenu, setOpenOrderMenu] = useState(false);

  function AnimatedCart() {
    return state.products?.length > 0 ? (
      <div>
        <BsCartCheckFill className="text-3xl animate-pulse" />
      </div>
    ) : (
      <BsCart className="text-3xl" />
    );
  }

  useEffect(() => {
    AnimatedCart();
  }, [state.products]);

  return (
    <div className="p-5 to-mainPurple min-h-screen from-orangeIndexBg bg-gradient-to-t">
      <div className="flex flex-col bg-black bg-opacity-80 border border-gray ">
        <div>
          <div className=" bg-grayDark flex items-center px-10 py-4 justify-between text-white font-squada ">
            <h1 className="text-3xl text-center">Escolha seus planos</h1>
            <Link className="items-center space-x-2 flex" to={'/cart'}>
              <div className="flex px-1 text-orange hover:text-darkorange space-x-1 items-center">
                <AnimatedCart />
              </div>
            </Link>
          </div>
          {loading ? (
            <LoadingSpiner />
          ) : (
            <div className="w-auto flex flex-wrap pt-10">
              {products?.map((product) => {
                return (
                  <ProductCard
                    key={product._id}
                    id={product._id}
                    name={product.name}
                    price={product.registrationPrice}
                    description={product.description}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
