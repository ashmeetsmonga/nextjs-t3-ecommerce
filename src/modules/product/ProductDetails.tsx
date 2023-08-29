import { Product } from "@prisma/client";
import React, { FC, useState } from "react";

interface ProductDetailsProps {
  data: Product | undefined | null;
}

const ProductDetails: FC<ProductDetailsProps> = ({ data }) => {
  const [size, setSize] = useState("XS");

  return (
    <div className="mt-10 flex w-full flex-col items-center gap-4">
      <div className="flex w-full flex-col justify-center gap-10 md:w-4/5 md:flex-row lg:w-3/5">
        <div className="w-full flex-shrink-0 md:w-1/2">
          <img
            src={`/images/product-${data?.img}.jpg`}
            alt="product"
            className="aspect-square w-full object-cover"
          />
        </div>
        <div className="flex w-full flex-shrink-0 flex-col gap-4 md:w-1/2">
          <h1 className="text-4xl font-semibold">{data?.title}</h1>
          <p className="text-xs text-gray-600">
            {data?.desc?.substring(0, 200)}...
          </p>
          <h2 className="text-4xl font-light text-blue-900">
            Rs. {data?.price}
          </h2>
          <div>
            <p className="font-semibold">Select Size</p>
            <div className="mt-2 flex gap-3">
              <button
                onClick={() => setSize("XS")}
                className={`px-4 py-2 ${
                  size === "XS" ? "bg-blue-900 text-white" : "bg-gray-200"
                }`}
              >
                XS
              </button>
              <button
                onClick={() => setSize("S")}
                className={`px-4 py-2 ${
                  size === "S" ? "bg-blue-900 text-white" : "bg-gray-200"
                }`}
              >
                S
              </button>
              <button
                onClick={() => setSize("M")}
                className={`px-4 py-2 ${
                  size === "M" ? "bg-blue-900 text-white" : "bg-gray-200"
                }`}
              >
                M
              </button>
              <button
                onClick={() => setSize("L")}
                className={`px-4 py-2 ${
                  size === "L" ? "bg-blue-900 text-white" : "bg-gray-200"
                }`}
              >
                L
              </button>
              <button
                onClick={() => setSize("XL")}
                className={`px-4 py-2 ${
                  size === "XL" ? "bg-blue-900 text-white" : "bg-gray-200"
                }`}
              >
                XL
              </button>
              <button
                onClick={() => setSize("XXL")}
                className={`px-4 py-2 ${
                  size === "XXL" ? "bg-blue-900 text-white" : "bg-gray-200"
                }`}
              >
                XXL
              </button>
            </div>
          </div>
          <div className="mt-2">
            <p className="font-semibold">Select Quantity</p>
            <input
              type="number"
              className="mt-2 bg-gray-100 p-2 text-sm outline-none focus:outline-none"
            />
          </div>
          <button className="mt-4 w-fit bg-blue-900 px-4 py-2 font-light capitalize text-white">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="w-full md:w-4/5 lg:w-3/5">
        <h4 className="mb-2 text-lg font-semibold">Description</h4>
        <p className="flex flex-col gap-2 text-sm text-gray-600">
          {data?.desc.split("\n").map((sentence, idx) => (
            <p key={idx}>{sentence}</p>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
