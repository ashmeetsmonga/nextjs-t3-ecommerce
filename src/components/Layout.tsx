import React from "react";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`relative min-h-screen overflow-x-hidden ${poppins.className}`}
    >
      <Toaster />
      <Navbar />
      <div className="mt-[5rem] w-full">{children}</div>
    </div>
  );
};

export default Layout;
