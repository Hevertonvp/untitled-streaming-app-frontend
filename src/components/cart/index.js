/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { React, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { IoReturnUpBackOutline } from 'react-icons/io5'

// fazer um map para a quantidade de opções do select e opções do select

function Cart() {
  const
    [
      state,
      addToCart,
      removeFromCart,
      updateQuantity,
      updateCartValue,
      quantity
    ] = useContext(CartContext);

  const value = updateCartValue().toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  function RemoveButton(item) {
    return (
      <button onClick={() => removeFromCart(item.id)}
        className='bg-darkorange hover:bg-red text-white rounded-md p-2 text-sm mr-1'>
        Remover
      </button>
    )
  }
  function SelectQuantity(item) {
    const quantity = ['1', '2', '3', '4', '5']   // this value will be updated in production based on the quantity of products available
    return (
      <select
        onChange={(e) => {
          updateQuantity(e.target.value, item.id);
        }
        }
        className='bg-grayLight'
        key={item.id}
        value={item.quantity}
        name={item.name}
        id={item.id} >
        {
          quantity.map((num) => {
            return <option key={num}>{num}</option>
          })
        }
      </select >
    )
  }


  function handleSubmit() {
    axios.post('/user', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <div className="flex flex-col bg-grayLight items-center border rounded-sm py-5 px-2 font-sanspro text-xl min-h-screen">
      {state.products?.length > 0 ?
        <div className=" sm:-mx-6 lg:-mx-8 max-sm:text-sm w-full rounded-md bg-white px-1">
          <Link to={'../products'} className='inline-flex text-3xl text-darkTheme hover:text-gray p-4'><IoReturnUpBackOutline /></Link>
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <table className="min-w-full text-center">
              <thead className="border-b">
                <tr>
                  <th scope="col" className="px-6 py-4">Produto</th>
                  <th scope="col" className="px-6 py-4">Quantidade</th>
                  <th scope="col" className="px-6 py-4">Preço unid</th>
                </tr>
              </thead>
              <tbody className='p-7'>
                {state.products.map((product) => {
                  return (
                    <tr key={product.id} className='border-b border-grayDark border-dashed'>
                      <td className="px-6 py-4">{product.name.toUpperCase()}</td>
                      <td className="px-6 py-4">
                        <SelectQuantity quantity={product.quantity} id={product.id} />
                      </td>
                      <td className="px-6 py-4">{product.price}</td>
                      <td><RemoveButton id={product.id} /></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <h1 className='text-end mt-5'>{`Total: ${value}`}</h1>
          </div>
          <div className='flex justify-center items-center space-x-2 pb-3'>
            <button className='bg-darkTheme hover:bg-opacity-90 rounded-md hover:text-white text-grayLight p-4'>Finalizar Compra</button>
          </div>
        </div>
        :
        <div className='mt-20'>
          <h1>Nenhum produto adicionado!</h1>
          <Link className='text-darkorange' to={'/products'}>Clique aqui </Link>e selecione os produtos
        </div>
      }
    </div>
  );
}

export default Cart;
