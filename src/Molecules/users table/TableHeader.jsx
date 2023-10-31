import React, { useState } from "react";
import { Icon } from "@iconify/react";
import AddNewUserButton from "./AddNewUserButton";
import useScreenSize from "../../Atoms/useScreenSize";

export default function TableHeader() {
  const screenSize = useScreenSize();

  return (
    <header
      className={`${
        screenSize.width >= 768
          ? "flex justify-between gap-3"
          : (screenSize.width < 768) & (screenSize.width > 480)
          ? "flex flex-col gap-2"
          : screenSize.width <= 480
          ? "flex flex-col gap-2"
          : ""
      } mb-5`}
    >
      <AddNewUserButton />
      <main
        className={`${
          screenSize.width >= 768
            ? "flex justify-between gap-3"
            : (screenSize.width < 768) & (screenSize.width > 480)
            ? "flex flex-col gap-2"
            : screenSize.width <= 480
            ? "flex flex-col gap-2"
            : ""
        }`}
      >
        <OrderComponent />
        <FilterComponent />
        <SearchComponent />
      </main>
    </header>
  );
}
// ===========================================================
const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main className="">
      <div className="relative h-[36px]">
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
// ===========================================================
function FilterComponent() {
  return (
    <main className="flex justify-center items-center cursor-pointer p-2 relative border rounded-md border-gray-300 text-gray-400 bg-white h-[36px]">
      <Icon icon="mi:filter" width="20" />
    </main>
  );
}
// ===========================================================
function OrderComponent() {
  return (
    <main className="flex justify-center items-center cursor-pointer p-2 relative border rounded-md border-gray-300 text-gray-400 bg-white h-[36px]">
      <Icon icon="fluent:arrow-sort-20-filled" width="20" />
    </main>
  );
}
