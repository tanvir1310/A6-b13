import React, { use } from "react";
import Product from "./Product/Product";

const Products = ({ modelPromise, carts, setCarts }) => {
  const products = use(modelPromise);
  console.log(products);

  return (
    <div className="pb-20">
      <div className="text-center gap-1">
        <h2 className="text-5xl font-bold py-4">Premium Digital Tools</h2>
        <p>
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>

      <div className="max-w-290 mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className=" p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                carts={carts}
                setCarts={setCarts}
              ></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
