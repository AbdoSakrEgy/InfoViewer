import React, { useState } from "react";
import { Icon } from "@iconify/react";

export default function Search() {
  return (
    <>
      <main className="flex flex-col gap-2 xl:flex-row xl:justify-between">
        <OrderComponent />
        <FilterComponent />
        <SearchComponent />
      </main>
    </>
  );
}

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main className="">
      <div className="relative h-full">
        <input
          type="text"
          className="border border-gray-300 rounded-md h-full px-4 py-2 pr-10 w-full focus:outline-none text-right"
          placeholder="...بحث عن"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <Icon icon="carbon:search" />
        </div>
      </div>
    </main>
  );
};

function FilterComponent() {
  return (
    <>
      <main className="flex justify-center items-center cursor-pointer p-2 relative border rounded-md border-gray-300 text-gray-400 bg-white">
        <Icon icon="mi:filter" width="25" />
      </main>
    </>
  );
}
function OrderComponent() {
  return (
    <>
      <main className="flex justify-center items-center cursor-pointer p-2 relative border rounded-md border-gray-300 text-gray-400 bg-white">
        <Icon icon="fluent:arrow-sort-20-filled" width="25" />
      </main>
    </>
  );
}
