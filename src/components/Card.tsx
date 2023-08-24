import { Product } from "@prisma/client";
import Link from "next/link";
import { FC } from "react";

interface CardProps {
  data: Product;
}

export const Card: FC<CardProps> = ({ data }) => {
  return (
    <Link href={`/product/${data.id}`}>
      <div className="flex aspect-square flex-col items-center gap-2">
        <img
          src={`/images/product-${data.img}.jpg`}
          className="aspect-square w-full object-cover"
        />
        <h2 className="text-lg font-semibold">{data.title}</h2>
        <p>Rs. {data.price}</p>
      </div>
    </Link>
  );
};
