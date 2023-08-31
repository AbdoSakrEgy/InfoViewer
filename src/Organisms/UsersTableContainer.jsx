import React, { useState } from "react";
import Search from "../Molecules/users table/Search";
import ReactSuiteTable from "../Molecules/users table/ReactSuiteTable";
import AddNewUserButton from "../Molecules/users table/AddNewUserButton";

export default function UsersTableContainer() {
  return (
    <>
      <main className="xl:mx-3 p-5 xl:p-0 overflow-hidden w-full xl:w-auto">
        <header className="flex flex-col gap-3 xl:flex-row xl:justify-between mb-5">
          <AddNewUserButton />
          <Search />
        </header>
        <aside>
          <ReactSuiteTable />
        </aside>
      </main>
    </>
  );
}
