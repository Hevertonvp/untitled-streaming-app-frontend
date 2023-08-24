import React from 'react';

// fazer um map para a quantidade de opções do select e opções do select

function Cart() {
  return (
    <div className="flex flex-col bg-white border border-gray p-20">
      <h1 className="font-sanspro mb-5">Confira sua compra:</h1>
      <div className="bg-graylight rounded-sm p-10 ">
        <ul className="space-x-1 space-y-1">
          <li>
            <label htmlFor="cars" className="mr-2">
              Tv express
            </label>
            <select name="cars" id="cars">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </li>
          <li>product 1</li>
          <li>product 1</li>
          <li>product 1</li>
          <li>product 1</li>
          <li>product 1</li>
          <li>product 1</li>
          <li>product 1</li>
        </ul>
      </div>
    </div>
  );
}

export default Cart;
