import { Metadata } from "next";
import HeroSection from "~/modules/home/HeroSection";
import NewArrivals from "~/modules/home/NewArrivals";
import { api } from "~/utils/api";

export const metadata: Metadata = {
  title: "Fashionista",
  description: "Created by Ashmeet Singh Monga",
};

export default function Home() {
  const { data: products } = api.product.getProducts.useQuery();

  return (
    <div className="flex w-full flex-col items-center">
      <HeroSection />
      <NewArrivals />
    </div>
  );
}
