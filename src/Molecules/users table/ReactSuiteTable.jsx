import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Pagination, Table } from "rsuite";
const { Column, HeaderCell, Cell } = Table;
import { Tooltip, Whisper } from "rsuite";
import { Dropdown } from "rsuite";
import SettingsButton from "./SettingsButton";
import WorkDays from "./WorkDays";
import FileOfRow from "./FileOfRow";
import { usersData, columnsData } from "./TableData";
import useScreenSize from "../../Atoms/useScreenSize";

export default function ReactSuiteTable() {
  const screenSize = useScreenSize();
  // show and hide columns
  const [isIDVisible, setIsIDVisible] = useState(true);
  const [isNameVisible, setIsNameVisible] = useState(true);
  const [isEmailVisible, setIsEmailVisible] = useState(true);
  const [isWorkdaysVisible, setIsWorkdaysVisible] = useState(true);
  const [isFileVisible, setIsFileVisible] = useState(true);

  // rows and columns
  const users = usersData;
  const [defaultColumns, setDefaultColumns] = useState(columnsData);

  // pagination
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
  // sorting
  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const [loading, setLoading] = useState(false);

  const getData = () => {
    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === "string") {
          x = x.charCodeAt();
        }
        if (typeof y === "string") {
          y = y.charCodeAt();
        }
        if (sortType === "asc") {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return data;
  };

  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  // drag and drop columns
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    // console.log(e.target.innerHTML);
  };
  const drop = (e) => {
    const copyListItems = [...defaultColumns];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setDefaultColumns(copyListItems);
  };

  return (
    <main className="overflow-auto">
      <Table
        data={getData()}
        autoHeight
        rowHeight={60}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        loading={loading}
      >
        <Column align="left" flexGrow={0.5}>
          <HeaderCell>
            <SettingsButton
              placement="rightStart"
              isIDVisible={isIDVisible}
              isNameVisible={isNameVisible}
              isEmailVisible={isEmailVisible}
              isWorkdaysVisible={isWorkdaysVisible}
              isFileVisible={isFileVisible}
              setIsIDVisible={setIsIDVisible}
              setIsNameVisible={setIsNameVisible}
              setIsEmailVisible={setIsEmailVisible}
              setIsWorkdaysVisible={setIsWorkdaysVisible}
              setIsFileVisible={setIsFileVisible}
            />
          </HeaderCell>
          <Cell dataKey="settings">
            <button className="btn bg-inherit hover:bg-inherit border-none">
              <Icon icon="simple-line-icons:options-vertical" />
            </button>
          </Cell>
        </Column>
        {/* map columns */}
        {defaultColumns.map((column, index) => {
          switch (column.id) {
            case 1:
              return isIDVisible ? (
                <Column
                  minWidth={60}
                  align="right"
                  flexGrow={column.flexGrow}
                  key={index}
                  draggable="true"
                  onDragStart={(e) => dragStart(e, index)}
                  onDragEnter={(e) => dragEnter(e, index)}
                  onDragEnd={drop}
                  width={200}
                >
                  <HeaderCell className="text-[10px]">
                    {column.label}
                  </HeaderCell>
                  <Cell dataKey={column.dataKey} className="text-[10px]" />
                </Column>
              ) : null;
            case 2:
              return isNameVisible ? (
                <Column
                  minWidth={120}
                  align="right"
                  flexGrow={column.flexGrow}
                  key={index}
                  sortable
                  draggable="true"
                  onDragStart={(e) => dragStart(e, index)}
                  onDragEnter={(e) => dragEnter(e, index)}
                  onDragEnd={drop}
                >
                  <HeaderCell className="text-[10px]">
                    {column.label}
                  </HeaderCell>
                  <Cell dataKey={column.dataKey} className="text-[10px]">
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
              ) : null;
            case 3:
              return isEmailVisible ? (
                <Column
                  minWidth={150}
                  align="right"
                  flexGrow={column.flexGrow}
                  key={index}
                  draggable="true"
                  onDragStart={(e) => dragStart(e, index)}
                  onDragEnter={(e) => dragEnter(e, index)}
                  onDragEnd={drop}
                >
                  <HeaderCell className="text-[10px]">
                    {column.label}
                  </HeaderCell>
                  <Cell dataKey={column.dataKey} className="text-[10px]" />
                </Column>
              ) : null;
            case 4:
              return isWorkdaysVisible ? (
                <Column
                  minWidth={170}
                  align="right"
                  flexGrow={column.flexGrow}
                  key={index}
                  draggable="true"
                  onDragStart={(e) => dragStart(e, index)}
                  onDragEnter={(e) => dragEnter(e, index)}
                  onDragEnd={drop}
                >
                  <HeaderCell className="text-[10px]">
                    {column.label}
                  </HeaderCell>
                  <Cell dataKey={column.dataKey}>
                    {(rowData) => <WorkDays workDays={rowData.workDays} />}
                  </Cell>
                </Column>
              ) : null;
            case 5:
              return isFileVisible ? (
                <Column
                  minWidth={140}
                  align="right"
                  flexGrow={column.flexGrow}
                  key={index}
                  draggable="true"
                  onDragStart={(e) => dragStart(e, index)}
                  onDragEnter={(e) => dragEnter(e, index)}
                  onDragEnd={drop}
                >
                  <HeaderCell className="text-[10px]">
                    {column.label}
                  </HeaderCell>
                  <Cell dataKey={column.dataKey} className="text-[10px]">
                    <FileOfRow />
                  </Cell>
                </Column>
              ) : null;
          }
        })}
        {/* map columns */}
      </Table>
      {/* pagination */}
      <div
        className={`${
          screenSize.width >= 768
            ? "flex justify-between items-center"
            : (screenSize.width < 768) & (screenSize.width > 480)
            ? "flex justify-between items-center"
            : screenSize.width <= 480
            ? "flex flex-col justify-between items-center gap-3"
            : ""
        } `}
        style={{ padding: 20 }}
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
        <section className="flex justify-between items-start gap-2 font-semibold">
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
