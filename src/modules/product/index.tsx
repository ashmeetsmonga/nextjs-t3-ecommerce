import { Product } from "@prisma/client";
import React, { FC } from "react";

interface ProductModuleProps {
  data: Product | undefined | null;
}

const ProductModule: FC<ProductModuleProps> = ({ data }) => {
  return <div>ProductModule</div>;
};

export default ProductModule;
