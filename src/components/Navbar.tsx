import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-20 flex h-[5rem] w-full items-center justify-between bg-white p-5">
      <div className="text-xl font-extrabold">Fashionista</div>
      <div className="flex gap-4">
        <div>User</div>
        <div>Menu</div>
      </div>
    </nav>
  );
};

export default Navbar;
