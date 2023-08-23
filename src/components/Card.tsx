import { FC } from "react";

interface CardProps {
  title: string;
  imgSrc: string;
  price: number;
}

export const Card: FC<CardProps> = ({ title, imgSrc, price }) => {
  return (
    <div className="flex aspect-square flex-col items-center gap-2">
      <img src={imgSrc} className="aspect-square w-full object-cover" />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>Rs. {price}</p>
    </div>
  );
};
