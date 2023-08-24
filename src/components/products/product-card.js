/* eslint-disable react/prop-types */
import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { BsCheck2Square } from 'react-icons/bs';
import { CartContext } from '../../context/CartContext';

function ProductCard({ name, id, price, description, notify, dispatch }) {
  const addToCard = useContext(CartContext);

  return (
    <div className=" h-auto m-5 w-80 max-sm:w-full shadow-sm shadow-softpurple bg-dark-theme-bg bg-opacity-40 border-softpurple flex flex-col rounded-md text-dark-theme-bg font-squada">
      <div className="flex h-auto justify-center items-center mt-5 flex-col mb-5">
        <img
          src="../../images/cropped-icon-tve.png"
          alt=""
          className="object-scale-down bg-graylight p-3 rounded-lg h-24"
        />
        <h1 className="text-white font m-3">{name.toUpperCase()}</h1>
        <div className="bg-black bg-opacity-60 h-auto p-5 text-graylight rounded-lg  mb-2 w-11/12 text-center">
          <p>{description}</p>
          <h1 className="text-pink  text-2xl">
            {price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </h1>
          <h1 className="  text-white">
            Preço para revenda:
            <span className="text-pink underline text-3xl">
              {price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </h1>
        </div>
        <div>
          <button
            onClick={() => addToCard(name, id, price)}
            className="bg-blue justify-center h-10 w-44 flex items-center text-graylight hover:bg-darkblue duration-150 hover:text-white rounded-md p-3 m-2"
          >
            <FaCartPlus className="mr-2" /> Adicionar ao carrinho
          </button>
          <button className="bg-mediumpurple justify-center w-44 h-10 flex items-center text-graylight hover:bg-darkpurple duration-150 hover:text-white rounded-md p-3 m-2">
            <BsCheck2Square className="mr-2" /> Comprar agora
          </button>
        </div>
        <Link className="hover:text-white text-graylight mt-4" to={'/'}>
          Clique aqui para se tornar um revendedor TVE
        </Link>{' '}
      </div>
    </div>
  );
}

export default ProductCard;
