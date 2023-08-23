"use client";

import React from "react";
import { Card } from "~/components/Card";

const NewArrivals = () => {
  return (
    <div className="mt-10 flex w-5/6 flex-col items-center gap-1 p-5">
      <h2 className="text-3xl font-semibold">Discover New Arrivals</h2>
      <p className="font-light">Recently added clothes!</p>
      <div className="mt-10 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Card title={"Title"} price={500} imgSrc={`/images/product-${1}.jpg`} />
        <Card title={"Title"} price={500} imgSrc={`/images/product-${1}.jpg`} />
        <Card title={"Title"} price={500} imgSrc={`/images/product-${1}.jpg`} />
        <Card title={"Title"} price={500} imgSrc={`/images/product-${1}.jpg`} />
        <Card title={"Title"} price={500} imgSrc={`/images/product-${1}.jpg`} />
        <Card title={"Title"} price={500} imgSrc={`/images/product-${1}.jpg`} />

        {/* {products.map((product) => (
          <Card
            key={product._id}
            title={product.title}
            price={500}
            imgSrc={`/images/product-${product.imgUrl}.jpg`}
          />
        ))} */}
      </div>
    </div>
  );
};

export default NewArrivals;
