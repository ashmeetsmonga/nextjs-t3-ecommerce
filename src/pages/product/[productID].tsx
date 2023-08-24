import { useRouter } from "next/router";
import React from "react";
import ProductModule from "~/modules/product";
import { api } from "~/utils/api";

const ProductPage = () => {
  const router = useRouter();
  const { data: productData } = api.product.getProduct.useQuery({
    productID: (router.query.productID as string) ?? "",
  });
  return <ProductModule data={productData} />;
};

export default ProductPage;
