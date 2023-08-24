import { Product } from "@prisma/client";
import React, { FC, useState } from "react";

interface ProductDetailsProps {
  data: Product | undefined | null;
}

const ProductDetails: FC<ProductDetailsProps> = ({ data }) => {
  const [size, setSize] = useState("XS");

  return (
    <div className="mt-10 flex w-full justify-center gap-10">
      <div className="w-[500px] flex-shrink-0">
        <img
          src={`/images/product-${data?.img}.jpg`}
          alt="product"
          className="aspect-square w-full object-cover"
        />
      </div>
      <div className="flex w-[750px] flex-shrink-0 flex-col justify-center gap-4">
        <h1 className="text-4xl font-semibold">{data?.title}</h1>
        <p className="text-gray-600">{data?.desc}</p>
        <h2 className="text-4xl font-light text-blue-900">Rs. {data?.price}</h2>
        <div>
          <p>Select Size</p>
          <div className="mt-2 flex gap-3">
            <button
              onClick={() => setSize("XS")}
              className={`rounded bg-gray-200 px-4 py-2 ${
                size === "XS" ? "bg-blue-900 text-white" : ""
              }`}
            >
              XS
            </button>
            <button
              onClick={() => setSize("S")}
              className={`rounded bg-gray-200 px-4 py-2 ${
                size === "S" ? "bg-blue-900 text-white" : ""
              }`}
            >
              S
            </button>
            <button
              onClick={() => setSize("M")}
              className={`rounded bg-gray-200 px-4 py-2 ${
                size === "M" ? "bg-blue-900 text-white" : ""
              }`}
            >
              M
            </button>
            <button
              onClick={() => setSize("L")}
              className={`rounded bg-gray-200 px-4 py-2 ${
                size === "L" ? "bg-blue-900 text-white" : ""
              }`}
            >
              L
            </button>
            <button
              onClick={() => setSize("XL")}
              className={`rounded bg-gray-200 px-4 py-2 ${
                size === "XL" ? "bg-blue-900 text-white" : ""
              }`}
            >
              XL
            </button>
            <button
              onClick={() => setSize("XXL")}
              className={`rounded bg-gray-200 px-4 py-2 ${
                size === "XXL" ? "bg-blue-900 text-white" : ""
              }`}
            >
              XXL
            </button>
          </div>
        </div>
        <button className="mt-4 w-fit rounded bg-blue-900 px-4 py-2 font-light capitalize text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
