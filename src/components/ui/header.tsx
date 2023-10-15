"use client";

import { Hand, Menu, X } from "lucide-react";
import React, { useState } from "react";
import Search from "./search/search";
import Sidebar from "./sidebar/sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="flex items-center h-20 justify-between w-full">
      <div className="hidden lg:flex gap-x-2 items-center ">
        <h1 className="font-bold text-xl ">Hello Pradeep</h1>
        <Hand />
        {","}
      </div>
      <div className="md:hidden">
        <Menu onClick={() => setIsOpen((prev) => !prev)} />
      </div>
      {isOpen && (
        <div className="flex flex-col fixed w-72 inset-y-0 left-0 z-50 bg-primary text-white transition-all duration-500">
          <X onClick={() => setIsOpen(false)} />
          <Sidebar />
        </div>
      )}

      <Search />
    </header>
  );
};

export default Header;
