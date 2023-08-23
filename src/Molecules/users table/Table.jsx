import React from "react";
import { Icon } from "@iconify/react";
import FileImage1 from "../../assets/FileImage1.png";
import FileImage2 from "../../assets/FileImage2.png";

export default function Table() {
  const name = "عبدالرحيم السيد عبدالرحيم صقر";
  return (
    <>
      <main>
        <div className="overflow-x-auto p-3 bg-white">
          <table className="table table-xs table-pin-rows table-pin-cols text-right">
            <thead>
              <tr>
                <th className="text-opacity-70 bg-[#F6F6F6] text-[#5A5A67]">
                  <button className="btn btn-xs bg-[#2385EA] text-white hover:bg-[#2385EA]">
                    <Icon icon="ep:setting" />
                  </button>
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
              <tr>
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
                <td>abdulrahimsakr01@gmail.com</td>
                <td>
                  <div className="tooltip hover:cursor-pointer" data-tip={name}>
                    {name.length > 20 ? (
                      <span>...{name.slice(0, 20)}</span>
                    ) : (
                      { name }
                    )}
                  </div>
                </td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

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
