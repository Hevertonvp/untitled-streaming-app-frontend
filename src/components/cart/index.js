/* eslint-disable prettier/prettier */
import { React, useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

// fazer um map para a quantidade de opções do select e opções do select

function Cart() {
  const
    [
      cartProducts,
      addToCart,
      removeFromCart,
      updateQuantity,
      updateCartValue
    ] = useContext(CartContext);

  useEffect(() => {
    updateCartValue();
  }, [cartProducts, updateCartValue, updateQuantity])


  function RemoveButton(item) {
    return (
      <button onClick={() => removeFromCart(item.id)}
        className='bg-darkorange hover:bg-red text-white rounded-md p-2 mr-1'>
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
  return (
    <div className="p-5 to-mainPurple min-h-screen from-darkpurple bg-gradient-to-t">
      <div className="flex flex-col bg-grayLight items-center border rounded-md py-20 px-5 font-squada text-xl min-h-screen">
        {cartProducts?.length > 0 ?
          <div className=" sm:-mx-6 lg:-mx-8 max-sm:text-sm w-full rounded-md bg-white px-1">
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
                  {cartProducts.map((product) => {
                    return (
                      <tr key={product.id} className='border-b border-grayDark border-dashed'>
                        <td className="whitespace-nowrap px-6 py-4">{product.name}</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <SelectQuantity quantity={product.quantity} id={product.id} />
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">{product.price}</td>
                        <td><RemoveButton id={product.id} /></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              <h1 className='text-end mt-5'>{`Total: R$:500,00`}</h1>
            </div>
          </div>
          :
          <div>
            <h1>Nenhum produto adicionado!</h1>
            <Link className='text-darkorange' to={'/products'}>Clique aqui </Link>e selecione os produtos
          </div>
        }

      </div>
    </div >
  );
}

export default Cart;
