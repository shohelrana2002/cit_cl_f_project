import React, { useEffect, useState } from "react";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="text-center  text-xl my-8 text-red-700 font-bold">
        <h2>All Products</h2>
      </div>

      <div className="grid container grid-cols-1 mx-auto md:grid-cols-2 mt-5 lg:grid-cols-4 gap-y-4 gap-x-4">
        {data.length > 0 ? (
          data.map((product) => (
            <div
              key={product.length}
              className="card card-compact bg-base-100  shadow-xl"
            >
              <figure>
                <img
                  className="object-cover h-full"
                  src={product.images}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-fuchsia-700">{product.title}</h2>
                <p>{product.brand}</p>
                <p>{product.description}</p>
                <div className="card-actions justify-between">
                  <button className="text-red-400 text-xl">
                    {product.category}
                  </button>
                  <button className="btn btn-primary">Add to Card</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="">
            <div className="space-x-6">
              <span className="loading loading-spinner loading-xs"></span>
              <span className="loading loading-spinner loading-sm"></span>
              <span className="loading loading-spinner loading-md"></span>
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
