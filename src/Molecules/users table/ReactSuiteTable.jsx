import React, { useState } from "react";
import { Icon } from "@iconify/react";
import FileImage1 from "../../assets/FileImage1.png";
import { Pagination, Table } from "rsuite";
const { Column, HeaderCell, Cell } = Table;
import { Tooltip, Whisper, Button } from "rsuite";
import { Dropdown } from "rsuite";

const users = [
  {
    id: "1",
    name: "عبدالرحيم السيد عبدالرحيم صقر",
    email: "abdulrahimsakr01@gmailcom",
    workDays: [1, 3, 5, 6],
    file: "",
    settings: "",
  },
  {
    id: "2",
    name: "حسام أحمد محمد علي",
    email: "abdulrahimsakr01@gmailcom",
    workDays: [1, 2, 3, 5, 6],
    file: "",
    settings: "",
  },
  {
    id: "3",
    name: "محمد علي بيه",
    email: "abdulrahimsakr01@gmailcom",
    workDays: [2, 3, 6],
    file: "",
    settings: "",
  },
  {
    id: "4",
    name: "محمد علي بيه",
    email: "abdulrahimsakr01@gmailcom",
    workDays: [2, 3, 6],
    file: "",
    settings: "",
  },
  {
    id: "5",
    name: "محمد علي بيه",
    email: "abdulrahimsakr01@gmailcom",
    workDays: [2, 3, 6],
    file: "",
    settings: "",
  },
  {
    id: "6",
    name: "محمد علي بيه",
    email: "abdulrahimsakr01@gmailcom",
    workDays: [2, 3, 6],
    file: "",
    settings: "",
  },
];

export default function ReactSuiteTable() {
  const [showID, setShowID] = useState(true);
  const [showName, setShowName] = useState(true);
  const [showEmail, setShowEmail] = useState(true);
  const [showWorkDays, setShowWorkDays] = useState(true);
  const [showFile, setShowFile] = useState(true);

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = users.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  return (
    <main>
      <Table data={data} autoHeight rowHeight={60}>
        <Column align="left" flexGrow={0.5} hidden>
          <HeaderCell>
            <SettingsButton
              placement="rightStart"
              showID={showID}
              showName={showName}
              showEmail={showEmail}
              showWorkDays={showWorkDays}
              showFile={showFile}
              setShowID={setShowID}
              setShowName={setShowName}
              setShowEmail={setShowEmail}
              setShowWorkDays={setShowWorkDays}
              setShowFile={setShowFile}
            />
          </HeaderCell>
          <Cell dataKey="settings">
            <button className="btn bg-inherit hover:bg-inherit border-none">
              <Icon icon="simple-line-icons:options-vertical" />
            </button>
          </Cell>
        </Column>

        {showFile ? (
          <Column align="right" flexGrow={1}>
            <HeaderCell>ملفات</HeaderCell>
            <Cell dataKey="file">
              <File />
            </Cell>
          </Column>
        ) : null}

        {showWorkDays ? (
          <Column align="right" flexGrow={1}>
            <HeaderCell>أيام العمل</HeaderCell>
            <Cell dataKey="workDays">
              {(rowData) => <WorkDays workDays={rowData.workDays} />}
            </Cell>
          </Column>
        ) : null}

        {showEmail ? (
          <Column align="right" flexGrow={1.5}>
            <HeaderCell>البريد الإلكتروني</HeaderCell>
            <Cell dataKey="email" />
          </Column>
        ) : null}

        {showName ? (
          <Column align="right" flexGrow={1}>
            <HeaderCell>الاسم بالكامل</HeaderCell>
            <Cell dataKey="name">
              {(rowData) => {
                if (rowData.name.length > 20) {
                  return (
                    <Whisper
                      placement="top"
                      controlId="control-id-hover"
                      trigger="hover"
                      speaker={<Tooltip>{rowData.name}</Tooltip>}
                    >
                      <span>...{rowData.name.slice(0, 20)}</span>
                    </Whisper>
                  );
                } else {
                  return <span>{rowData.name}</span>;
                }
              }}
            </Cell>
          </Column>
        ) : null}

        {showID ? (
          <Column align="right" flexGrow={0.5}>
            <HeaderCell>id رقم ال</HeaderCell>
            <Cell dataKey="id" />
          </Column>
        ) : null}
      </Table>
      <div
        style={{ padding: 20 }}
        className="flex justify-between items-start"
      >
        <Pagination
          prev
          next
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          // layout={["total", "-", "limit", "|", "pager", "skip"]}
          total={users.length}
          // limitOptions={[10, 30, 50]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
        <section className="flex justify-between items-start gap-2 h-40">
          <span>{users.length}</span>
          <span>من إصل</span>
          <Dropdown
            title={limit}
            size="xs"
            renderToggle={(props, ref) => (
              <div
                {...props}
                ref={ref}
                className="flex justify-between items-center rounded-md border border-[#DDDDDD] gap-3 px-3 py-1 bg-white"
              >
                <span>{limit}</span>
                <Icon icon="ep:arrow-down-bold" />
              </div>
            )}
          >
            <Dropdown.Item onClick={() => setLimit(5)}>5</Dropdown.Item>
            <Dropdown.Item onClick={() => setLimit(10)}>10</Dropdown.Item>
            <Dropdown.Item onClick={() => setLimit(15)}>15</Dropdown.Item>
          </Dropdown>
          <span>عرض</span>
        </section>
      </div>
    </main>
  );
}
// ==========================================================
function SettingsButton({
  placement,
  showID,
  showName,
  showEmail,
  showWorkDays,
  showFile,
  setShowID,
  setShowName,
  setShowEmail,
  setShowWorkDays,
  setShowFile,
}) {
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
          <main className="py-3 w-40">
            <p className="text-xs font-semibold text-right">التحكم في الجدول</p>

            <hr className="my-3" />
            <input
              id="idCheckbox"
              checked={showID}
              type="checkbox"
              onChange={(e) => setShowID(e.target.checked)}
            />
            <label
              htmlFor="idCheckbox"
              className="hover:cursor-pointer  flex justify-between"
            >
              <p>id رقم ال</p>
            </label>

            <hr className="my-3" />
            <input
              id="nameCheckbox"
              checked={showName}
              type="checkbox"
              onChange={(e) => setShowName(e.target.checked)}
            />
            <label
              htmlFor="nameCheckbox"
              className="hover:cursor-pointer  flex justify-between"
            >
              <p>الاسم بالكامل</p>
            </label>

            <hr className="my-3" />
            <input
              id="emailCheckbox"
              checked={showEmail}
              type="checkbox"
              onChange={(e) => setShowEmail(e.target.checked)}
            />
            <label
              htmlFor="emailCheckbox"
              className="hover:cursor-pointer  flex justify-between"
            >
              <p>البريد الإلكتروني</p>
            </label>

            <hr className="my-3" />
            <input
              id="workDaysCheckbox"
              checked={showWorkDays}
              type="checkbox"
              onChange={(e) => setShowWorkDays(e.target.checked)}
            />
            <label
              htmlFor="workDaysCheckbox"
              className="hover:cursor-pointer  flex justify-between"
            >
              <p>أيام العمل</p>
            </label>

            <hr className="my-3" />
            <input
              id="fileCheckbox"
              checked={showFile}
              type="checkbox"
              onChange={(e) => setShowFile(e.target.checked)}
            />
            <label
              htmlFor="fileCheckbox"
              className="hover:cursor-pointer flex justify-between"
            >
              <p>الملفات</p>
            </label>
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
// ==========================================================
function WorkDays({ workDays }) {
  return (
    <>
      <main className="flex justify-between gap-1">
        <span
          className={
            workDays.find((element) => element === 7)
              ? "w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white"
              : "w-5 text-center p-1 rounded-sm text-xs bg-[#F7F7FA] text-[#BBBEC2]"
          }
        >
          ج
        </span>
        <span
          className={
            workDays.find((element) => element === 6)
              ? "w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white"
              : "w-5 text-center p-1 rounded-sm text-xs bg-[#F7F7FA] text-[#BBBEC2]"
          }
        >
          خ
        </span>
        <span
          className={
            workDays.find((element) => element === 5)
              ? "w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white"
              : "w-5 text-center p-1 rounded-sm text-xs bg-[#F7F7FA] text-[#BBBEC2]"
          }
        >
          ا
        </span>
        <span
          className={
            workDays.find((element) => element === 4)
              ? "w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white"
              : "w-5 text-center p-1 rounded-sm text-xs bg-[#F7F7FA] text-[#BBBEC2]"
          }
        >
          ث
        </span>
        <span
          className={
            workDays.find((element) => element === 3)
              ? "w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white"
              : "w-5 text-center p-1 rounded-sm text-xs bg-[#F7F7FA] text-[#BBBEC2]"
          }
        >
          ن
        </span>
        <span
          className={
            workDays.find((element) => element === 2)
              ? "w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white"
              : "w-5 text-center p-1 rounded-sm text-xs bg-[#F7F7FA] text-[#BBBEC2]"
          }
        >
          ح
        </span>
        <span
          className={
            workDays.find((element) => element === 1)
              ? "w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white"
              : "w-5 text-center p-1 rounded-sm text-xs bg-[#F7F7FA] text-[#BBBEC2]"
          }
        >
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
