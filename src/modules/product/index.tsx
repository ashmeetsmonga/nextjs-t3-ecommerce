import { Product } from "@prisma/client";
import React, { FC } from "react";
import ProductDetails from "./ProductDetails";

interface ProductModuleProps {
  data: Product | undefined | null;
}

const ProductModule: FC<ProductModuleProps> = ({ data }) => {
  return (
    <div className="min-h-screen w-full px-16 outline">
      <ProductDetails data={data} />
    </div>
  );
};

export default ProductModule;
