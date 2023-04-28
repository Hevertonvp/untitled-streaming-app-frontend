import React from 'react';
import ProductCard from './product-card';

function Products() {
  return (
    <div className="w-auto flex flex-wrap pt-10 bg-white rounded-md px-10 text-graylight">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default Products;
