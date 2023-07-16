import React from "react";
import { Link } from "react-router-dom";
import { selectAllProducts } from "../productSlice";
import { StarIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

const ProductGrid = () => {
  const products = useSelector(selectAllProducts);
  return (
    <div className="lg:col-span-3">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <Link to={`/product-detail/${product.id}`}>
                <div
                  key={product.id}
                  className="group relative border-solid border-2 p-2 w6 h6"
                >
                  <div className="min-h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                    <img
                      src={product.thumbnail}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <p>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </p>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        <StarIcon className="w-5 h-5 inline" />
                        <span className=" align-bottom">{product.rating}</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm block font-medium text-gray-900 ml-1">
                        $
                        {Math.round(
                          product.price * (1 - product.discountPercentage / 100)
                        )}
                      </p>
                      <p className="text-sm block font-medium text-gray-400 line-through ml-1">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
