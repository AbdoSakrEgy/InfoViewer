import React, { useState } from "react";
import { Icon } from "@iconify/react";
import FileImage1 from "../../assets/FileImage1.png";
import FileImage2 from "../../assets/FileImage2.png";
import { Dropdown } from "rsuite";
import { Pagination } from "rsuite";
import { Tooltip, Whisper, Button } from "rsuite";
import { Checkbox } from "rsuite";

export default function Table() {
  const name = "عبدالرحيم السيد عبدالرحيم صقر";
  const columns = [
    "",
    "ملفات",
    "أيام العمل",
    "البريد الإلكتروني",
    "الاسم بالكامل",
    "id رقم ال",
  ];
  const rows = [
    {
      email: "abdulrahimsakr01@gmail.com",
      name: "عبدالرحيم السيد",
      id: "567",
    },
    {
      email: "anotherAbdoEmail@gmail.com",
      name: "عبدالرحيم السيد عبدالرحيم صقر",
      id: "341",
    },
    {
      email: "abdulrahimsakr01@gmail.com",
      name: "عبدالرحيم السيد",
      id: "5637",
    },
    {
      email: "anotherAbdoEmail@gmail.com",
      name: "عبدالرحيم السيد عبدالرحيم صقر",
      id: "3241",
    },
    {
      email: "abdulrahimsakr01@gmail.com",
      name: "عبدالرحيم السيد",
      id: "5657",
    },
    {
      email: "anotherAbdoEmail@gmail.com",
      name: "عبدالرحيم السيد عبدالرحيم صقر",
      id: "371",
    },
  ];

  return (
    <>
      <main>
        <div className="overflow-x-auto p-3 bg-white">
          <table className="table table-xs table-pin-rows table-pin-cols text-right">
            <thead>
              <tr>
                <th className="text-opacity-70 bg-[#F6F6F6] text-[#5A5A67]">
                  {/* <button className="btn btn-xs bg-[#2385EA] text-white hover:bg-[#2385EA]">
                    <Icon icon="ep:setting" />
                  </button> */}
                  <CustomTooltip placement="rightStart" />
                </th>
                <th className="text-opacity-70 bg-[#F6F6F6] text-[#5A5A67]">
                  ملفات
                </th>
                <th className="text-opacity-70 bg-[#F6F6F6] text-[#5A5A67]">
                  أيام العمل
                </th>
                <th className="text-opacity-70 bg-[#F6F6F6] text-[#5A5A67]">
                  البريد الإلكتروني
                </th>
                <th className="text-opacity-70 bg-[#F6F6F6] text-[#5A5A67]">
                  الاسم بالكامل
                </th>
                <th className="text-opacity-70 bg-[#F6F6F6] text-[#5A5A67]">
                  id رقم ال
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item) => (
                <tr key={item.id}>
                  <td>
                    <button className="btn bg-inherit hover:bg-inherit border-none">
                      <Icon icon="simple-line-icons:options-vertical" />
                    </button>
                  </td>
                  <td>
                    <File />
                  </td>
                  <td>
                    <WorkDays />
                  </td>
                  <td>{item.email}</td>
                  <td>
                    {item.name.length > 20 ? (
                      <div
                        className="tooltip hover:cursor-pointer"
                        data-tip={item.name}
                      >
                        <span>...{item.name.slice(0, 20)}</span>
                      </div>
                    ) : (
                      <span>{item.name}</span>
                    )}
                  </td>
                  <td>{item.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <FooterTable />
      </main>
    </>
  );
}
// ==========================================================
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
// ==========================================================
function File() {
  return (
    <>
      <main className="flex justify-end gap-1">
        <section className="flex flex-col justify-end font-semibold">
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
// ==========================================================
function FooterTable() {
  const [activePage, setActivePage] = useState(1);

  return (
    <main className="flex justify-between items-start mt-5 h-60">
      <section>
        <Pagination
          next
          prev
          maxButtons={5}
          total={100}
          limit={10}
          activePage={activePage}
          onChangePage={setActivePage}
        />
      </section>
      <section className="flex justify-end items-center gap-2 text-xs">
        <span>250</span>
        <span>من أصل</span>
        <Dropdown title="20" size="xs">
          <Dropdown.Item>30</Dropdown.Item>
          <Dropdown.Item>40</Dropdown.Item>
          <Dropdown.Item>50</Dropdown.Item>
        </Dropdown>
        <span>عرض</span>
      </section>
    </main>
  );
}
// ==========================================================
function CustomTooltip({ placement }) {
  const myStyle = {
    color: "black",
    backgroundColor: "white",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };

  return (
    <Whisper
      trigger="click"
      placement={placement}
      controlId={`control-id-${placement}`}
      speaker={
        <Tooltip style={myStyle}>
          <main className="">
            <p className="text-xs font-semibold text-right py-3">
              التحكم في الجدول
            </p>
            <hr className="my-0" />
            <span className="flex justify-between items-center w-40">
              <Checkbox defaultChecked />
              <p className="text-[#6C6C6C]">id رقم ال</p>
            </span>
            <hr className="my-0" />
            <span className="flex justify-between items-center w-40">
              <Checkbox defaultChecked />
              <p className="text-[#6C6C6C]">الاسم الاول</p>
            </span>
            <hr className="my-0" />
            <span className="flex justify-between items-center w-40">
              <Checkbox defaultChecked />
              <p className="text-[#6C6C6C]">البريد الإلكتروني</p>
            </span>
            <hr className="my-0" />
            <span className="flex justify-between items-center w-40">
              <Checkbox defaultChecked />
              <p className="text-[#6C6C6C]">أيام العمل</p>
            </span>
            <hr className="my-0" />
            <span className="flex justify-between items-center w-40">
              <Checkbox defaultChecked />
              <p className="text-[#6C6C6C]">الملفات</p>
            </span>
          </main>
        </Tooltip>
      }
    >
      <button className="btn btn-xs bg-[#2385EA] text-white hover:bg-[#2385EA]">
        <Icon icon="ep:setting" />
      </button>
    </Whisper>
  );
}
