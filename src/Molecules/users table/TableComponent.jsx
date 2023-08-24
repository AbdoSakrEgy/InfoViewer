import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import FileImage1 from "../../assets/FileImage1.png";
import FileImage2 from "../../assets/FileImage2.png";

function TooltipName({ name }) {
  if (name.length > 20) {
    return (
      <div
        className="tooltip hover:cursor-pointer w-full text-right"
        data-tip={name}
      >
        <span>...</span>
        {name.slice(0, 20)}
      </div>
    );
  } else {
    return <div className="text-right">{name}</div>;
  }
}
//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    id: "11004",
    name: <TooltipName name={"عبدالرحيم السيد"} />,
    email: "abdulrahimsakr01@gmail.com",
    workDays: <WorkDays />,
    files: <File />,
  },
  {
    id: "11004",
    name: <TooltipName name={"عبدالرحيم السيد عبدالرحيم"} />,
    email: "abdulrahimsakr01@gmail.com",
    workDays: <WorkDays />,
    files: <File />,
  },
  {
    id: "11004",
    name: <TooltipName name={"عبدالرحيم السيد"} />,
    email: "abdulrahimsakr01@gmail.com",
    workDays: <WorkDays />,
    files: <File />,
  },
  {
    id: "11004",
    name: <TooltipName name={"عبدالرحيم السيد عبدالرحيم"} />,
    email: "abdulrahimsakr01@gmail.com",
    workDays: <WorkDays />,
    files: <File />,
  },
  {
    id: "11004",
    name: <TooltipName name={"عبدالرحيم السيد عبدالرحيم"} />,
    email: "abdulrahimsakr01@gmail.com",
    workDays: <WorkDays />,
    files: <File />,
  },
  {
    id: "11004",
    name: <TooltipName name={"عبدالرحيم السيد عبدالرحيم"} />,
    email: "abdulrahimsakr01@gmail.com",
    workDays: <WorkDays />,
    files: <File />,
  },
  {
    id: "11004",
    name: <TooltipName name={"عبدالرحيم السيد عبدالرحيم"} />,
    email: "abdulrahimsakr01@gmail.com",
    workDays: <WorkDays />,
    files: <File />,
  },
  {
    id: "11004",
    name: <TooltipName name={"عبدالرحيم السيد عبدالرحيم"} />,
    email: "abdulrahimsakr01@gmail.com",
    workDays: <WorkDays />,
    files: <File />,
  },
];

const TableComponent = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "files",
        header: "ملفات",
        size: 150,
        muiTableHeadCellProps: {
          align: "right",
        },
        muiTableBodyCellProps: {
          align: "right",
        },
      },
      {
        accessorKey: "workDays", //normal accessorKey
        header: "أيام العمل",
        size: 200,
        muiTableHeadCellProps: {
          align: "right",
        },
        muiTableBodyCellProps: {
          align: "right",
        },
      },
      {
        accessorKey: "email",
        header: "البريد الإلكتروني",
        size: 150,
        muiTableHeadCellProps: {
          align: "right",
        },
        muiTableBodyCellProps: {
          align: "right",
        },
      },
      {
        accessorKey: "name",
        header: "الاسم بالكامل",
        size: 150,
        muiTableHeadCellProps: {
          align: "right",
        },
        muiTableBodyCellProps: {
          align: "right",
        },
      },
      {
        accessorKey: "id",
        header: "id رقم ال",
        size: 10,
        muiTableHeadCellProps: {
          align: "right",
        },
        muiTableBodyCellProps: {
          align: "right",
        },
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableColumnOrdering />;
};

export default TableComponent;

// ==============================
function WorkDays({ days }) {
  return (
    <>
      <main className="flex justify-between gap-1">
        <span className="w-5 text-center p-1 rounded-sm text-xs bg-[#F7F7FA] text-[#BBBEC2]">
          ج
        </span>
        <span className="w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white">
          خ
        </span>
        <span className="w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white">
          ا
        </span>
        <span className="w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white">
          ث
        </span>
        <span className="w-5 text-center p-1 rounded-sm text-xs bg-[#F7F7FA] text-[#BBBEC2]">
          ن
        </span>
        <span className="w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white">
          ح
        </span>
        <span className="w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white">
          س
        </span>
      </main>
    </>
  );
}

function File() {
  return (
    <>
      <main className="flex justify-end gap-1">
        <section className="flex flex-col items-end font-semibold">
          <p>png.اسم الملف</p>
          <span className="text-xs text-[#BBBEC2]">9mb</span>
        </section>
        <section className="rounded-md">
          <img src={FileImage1} alt="FileImage1" />
        </section>
      </main>
    </>
  );
}
