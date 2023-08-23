import React from "react";
import Search from "./Search";
import Table from "./Table";
import TableComponent from "./TableComponent";

export default function UsersTableContainer() {
  return (
    <>
      <main className="mx-5">
        <header className="flex justify-between mb-5">
          <button className="btn bg-yellow-300 hover:bg-yellow-300">
            إضافة جديد +
          </button>
          {/* <Search /> */}
        </header>
        <aside className="xl:w-[50vw] w-[70vw]">
          {/* <Table /> */}
          <TableComponent />
        </aside>
      </main>
    </>
  );
}
