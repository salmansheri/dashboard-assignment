import { Hand } from "lucide-react";
import React from "react";
import Search from "./search/search";

const Header = () => {
  return (
    <header className="flex items-center h-20 justify-between w-full">
      <div className="flex gap-x-2 items-center ">
        <h1 className="font-bold text-xl">Hello Pradeep</h1>
        <Hand />
        {","}
      </div>

      <Search />
    </header>
  );
};

export default Header;
