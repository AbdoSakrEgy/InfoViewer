import React from "react";
import Search from "./Search";
import Table from "./Table";
import TableComponent from "./TableComponent";

export default function UsersTableContainer() {
  return (
    <>
      <main className="mx-5 overflow-hidden">
        <header className="flex justify-between mb-5">
          <button className="btn bg-yellow-300 hover:bg-yellow-300">
            إضافة جديد +
          </button>
          {/* <Search /> */}
        </header>
        <aside className="flex justify-center">
          {/* <Table /> */}
          <TableComponent />
        </aside>
      </main>
    </>
  );
}
