/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import ProductCard from './product-card';
import LoadingSpiner from '../loadingSpiner';
import { ToastContainer, toast } from 'react-toastify';
const bgImg = '.././images/han.png';
import { BsCart } from 'react-icons/bs';
import 'react-toastify/dist/ReactToastify.css';

function Products() {
  const { data: products, error, loading } = useFetch('/api/v1/products/');
  const [openOrderMenu, setOpenOrderMenu] = useState(false);

  const notify = () => {
    toast('Adicionado ao carrinho!');
  };

  return (
    <div className="p-5 to-maincolor min-h-screen from-softpurple bg-gradient-to-t">
      <div className="flex flex-col bg-black bg-opacity-40 border border-gray ">
        <div>
          <div className=" bg-gray-dark flex items-center px-10 py-4 justify-between text-white font-squada ">
            <h1 className="text-3xl text-center">Escolha seus planos</h1>
            <div className="text-2xl items-center space-x-2 flex">
              <Link to={'/cart'}>
                <BsCart className="text-orange hover:text-darkorange" />
              </Link>
            </div>
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
                    notify={notify}
                  />
                );
              })}
            </div>
          )}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
