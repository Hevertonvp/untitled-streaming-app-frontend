import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { BsCheck2Square } from 'react-icons/bs';

function ProductCard() {
  return (
    <div className=" h-auto m-5 w-80 max-sm:w-full shadow-sm shadow-softpurple bg-card-bg border-2 flex flex-col rounded-md text-dark-theme-bg font-squada">
      <div className="w-36 h-8 self-center items-center justify-center  flex mt-4 bg-white  rounded-4xl">
        <div className="w-8 h-10 mb-2 bg-white rounded-t-full bottom-2"></div>
      </div>
      <div className="flex h-auto justify-center items-center mt-4 flex-col mb-5">
        <img
          src="../../images/cropped-icon-tve.png"
          alt=""
          className="object-scale-down bg-white bg-opacity-80 border rounded-b-3xl rounded-t-lg h-24"
        />
        <h1 className="text-white font">TVE anual</h1>
        <div className="bg-mediumpurple h-auto p-5 text-graylight rounded-lg w-11/12 text-center">
          <p>+370 canais</p>
          <p>Função Playback</p>
          <p>Canais Adultos incluídos</p>
          <h1 className="text-pink">R$:129,90</h1>
          <h1 className=" underline text-white">
            Preço para revenda: <span className="text-pink">R$:99,90</span>
          </h1>
        </div>
        <div>
          <button className="bg-mediumpurple justify-center h-10 w-44 flex items-center text-graylight hover:bg-darkpurple duration-150 hover:text-white rounded-md p-3 m-2">
            <FaCartPlus className="mr-2" /> Adicionar ao carrinho
          </button>
          <button className="bg-mediumpurple justify-center w-44 h-10 flex items-center text-graylight hover:bg-darkpurple duration-150 hover:text-white rounded-md p-3 m-2">
            <BsCheck2Square className="mr-2" /> Comprar agora
          </button>
        </div>
        <button className="text-graylight rounded-md mt-5 duration-150 hover:text-white bg-pink border bg-opacity-50 hover:bg-opacity-80 p-2">
          Clique aqui para se tornar um revendedor TVE!
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
