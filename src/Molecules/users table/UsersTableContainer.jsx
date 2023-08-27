import React, { useState } from "react";
import Search from "./Search";
import Table from "./Table";
import TableComponent from "./TableComponent";
import TanStackTable from "./TanStackTable";
import ReactSuiteTable from "./ReactSuiteTable";

export default function UsersTableContainer() {
  return (
    <>
      <main className="mx-5 overflow-hidden w-full xl:w-auto">
        <header className="flex flex-col gap-3 xl:flex-row xl:justify-between mb-5">
          <button className="btn bg-yellow-300 hover:bg-yellow-300">
            إضافة جديد +
          </button>
          <Search />
        </header>
        <aside className="">
          {/* <ReactSuiteTable /> */}
          {/* <TanStackTable /> */}
          <Table />
          {/* <TableComponent /> */}
          {/* <Table1 /> */}
        </aside>
      </main>
    </>
  );
}
// ==========================================================
const Table1 = () => {
  const [columns, setColumns] = useState(["Column 1", "Column 2", "Column 3"]);
  const [draggedColumn, setDraggedColumn] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedColumn(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    const updatedColumns = [...columns];
    const removedColumn = updatedColumns.splice(draggedColumn, 1)[0];
    updatedColumns.splice(targetIndex, 0, removedColumn);
    setColumns(updatedColumns);
    setDraggedColumn(null);
  };

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => handleDrop(e, index)}
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{/* Render table rows here */}</tbody>
    </table>
  );
};
