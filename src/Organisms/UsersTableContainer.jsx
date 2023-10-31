import React, { useState } from "react";
import TableHeader from "../Molecules/users table/TableHeader";
import ReactSuiteTable from "../Molecules/users table/ReactSuiteTable";
import useScreenSize from "../Atoms/useScreenSize";

export default function UsersTableContainer() {
  const screenSize = useScreenSize();

  return (
    <main className="w-full flex flex-col p-3 overflow-auto">
      <TableHeader />
      <ReactSuiteTable />
    </main>
  );
}
