import React from "react";
import { Table, Button } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

export default function ReactSuiteTable() {
  return (
    <main>
      <Table
        height={400}
        data={data}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
      ></Table>
    </main>
  );
}
