"use client";

import React from "react";
import { Card } from "~/components/Card";
import { api } from "~/utils/api";

const NewArrivals = () => {
  const { data: products } = api.product.getProducts.useQuery();

  return (
    <div className="mt-10 flex w-5/6 flex-col items-center gap-1 p-5">
      <h2 className="text-3xl font-semibold">Discover New Arrivals</h2>
      <p className="font-light">Recently added clothes!</p>
      <div className="mt-10 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {products?.map((product) => (
          <Card data={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
