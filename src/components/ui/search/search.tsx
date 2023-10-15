import { SearchCheck, SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className="flex relative items-center">
      <SearchIcon className="absolute text-gray-400 h-5 w-5 left-1.5" />
      <input
        className="placeholder:text-gray-400 h-full w-full p-1 rounded-md pl-7 placeholder:text-sm focus:ring-2 focus:outline-none ring-primary "
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
