import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

function SearchProducts() {
  return (
    <div className="flex-1">
      <form className="flex lg:w-[600px] items-center space-x-2 space-x-reverse rounded-lg py-3 px-2 bg-gray-100">
        <button hidden>Search</button>
        <HiMagnifyingGlass className="w-5 h-5 text-gray-500 cursor-pointer" />
        <input
          type="text"
          placeholder="جستجو"
          className="flex-1 outline-none bg-transparent
   text-gray-400 placeholder:text-gray-500 text-xs"
        />
      </form>
    </div>
  );
}

export default SearchProducts;
