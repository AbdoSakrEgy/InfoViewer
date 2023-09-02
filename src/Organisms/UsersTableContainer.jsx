import React, { useState } from "react";
import TableHeader from "../Molecules/users table/TableHeader";
import ReactSuiteTable from "../Molecules/users table/ReactSuiteTable";

export default function UsersTableContainer() {
  return (
    <>
      <main className="xl:mx-3 p-5 xl:p-0 overflow-hidden w-full xl:w-auto">
        <TableHeader />
        <ReactSuiteTable />
      </main>
    </>
  );
}
