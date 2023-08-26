import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { v4 as uuidv4 } from "uuid";

// ====================================================================
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
// daysInMonth(7, 2009); // 31
// ====================================================================
function getDayName(date = new Date(), locale = "en-US") {
  switch (date.toLocaleDateString(locale, { weekday: "long" })) {
    case "Saturday":
      return "السبت";
    case "Sunday":
      return "الأحد";
    case "Monday":
      return "الإثنين";
    case "Tuesday":
      return "الثلاثاء";
    case "Wednesday":
      return "الأربعاء";
    case "Thursday":
      return "الخميس";
    case "Friday":
      return "الجمعة";
  }
  // return date.toLocaleDateString(locale, { weekday: "long" });
}
// console.log(getDayName(new Date('2023-08-23')));
// ====================================================================

function formatDate(date = new Date()) {
  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", {
    month: "2-digit",
  });
  const day = date.toLocaleString("default", { day: "2-digit" });

  return [year, month, day].join("-");
}
// 👇️ 2023-07-26 (YYYY-MM-DD)
// console.log(formatDate(new Date()));
// ====================================================================

export default function Dates() {
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));
  const [selectedYearNumber, setSelectedYearNumber] = useState();
  const [selectedMonthNumber, setSelectedMonthNumber] = useState();
  const [selectedDayNumber, setSelectedDayNumber] = useState();
  useEffect(() => {
    setSelectedYearNumber(selectedDate.slice(0, 4));
    setSelectedMonthNumber(selectedDate.slice(5, 7));
    setSelectedDayNumber(selectedDate.slice(8, 10));
  }, [selectedDate]);

  return (
    <>
      <main className="flex flex-col gap-5">
        <Section1
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedMonthNumber={selectedMonthNumber}
          selectedYearNumber={selectedYearNumber}
          selectedDayNumber={selectedDayNumber}
        />
        <Section2
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedMonthNumber={selectedMonthNumber}
          selectedYearNumber={selectedYearNumber}
          selectedDayNumber={selectedDayNumber}
        />
      </main>
    </>
  );
}
// ====================================================================
function Section1({
  selectedDate,
  setSelectedDate,
  selectedMonthNumber,
  selectedYearNumber,
  selectedDayNumber,
}) {
  const handleDateChange = (e) => {
    // console.log(e.target.value); 2023-08-23
    setSelectedDate(e.target.value);
  };

  const handleIncDate = (e) => {
    let day = selectedDayNumber;
    if (day < daysInMonth(selectedMonthNumber, selectedYearNumber)) {
      day = Number(selectedDayNumber) + 1;
      if (day.toString().length == 1) {
        day = "0" + day;
      } else {
        day.toString();
      }
      setSelectedDate(`${selectedYearNumber}-${selectedMonthNumber}-${day}`);
    }
  };

  const handleDecDate = (e) => {
    let day = selectedDayNumber;
    if (day > 1) {
      day = Number(selectedDayNumber) - 1;
      if (day.toString().length == 1) {
        day = "0" + day;
      } else {
        day.toString();
      }
      setSelectedDate(`${selectedYearNumber}-${selectedMonthNumber}-${day}`);
    }
  };

  return (
    <>
      <section className="flex flex-col xl:flex-row justify-between items-center gap-3 pb-3 border-b-2 border-dashed">
        <div>
          <input
            type="date"
            value={selectedDate}
            className="bg-[#F7F6FD] p-3 rounded-md w-40"
            onChange={handleDateChange}
          />
        </div>
        <aside className="flex">
          <button
            onClick={handleIncDate}
            className="btn btn-sm bg-inherit hover:bg-inherit border-none p-0"
          >
            <Icon icon="fluent:ios-arrow-24-filled" width="20" rotate={2} />
          </button>
          <button
            onClick={handleDecDate}
            className="btn btn-sm bg-inherit hover:bg-inherit border-none p-0"
          >
            <Icon icon="fluent:ios-arrow-24-filled" width="20" />
          </button>
          <div className="font-semibold ml-2">تقويم المواعيد</div>
        </aside>
      </section>
    </>
  );
}
// ====================================================================
function Section2({
  selectedDate,
  setSelectedDate,
  selectedMonthNumber,
  selectedYearNumber,
  selectedDayNumber,
}) {
  const daysInMon = daysInMonth(selectedMonthNumber, selectedYearNumber);
  let allMonthDays = [];

  // let i = formatDate(new Date()).slice(8, 10);
  let i = 0;
  for (i; i < daysInMon; i++) {
    // let privateDayNum = i;
    let privateDayNum = i + 1;
    if (privateDayNum.toString().length === 1) {
      privateDayNum = "0" + privateDayNum;
    }

    allMonthDays.push(
      <DayGenerator
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedMonthNumber={selectedMonthNumber}
        selectedYearNumber={selectedYearNumber}
        selectedDayNumber={selectedDayNumber}
        privateDayNumber={privateDayNum.toString()}
      />
    );
  }

  return (
    <>
      <section
        id="DayContainer"
        className="flex justify-between items-center gap-1 overflow-auto border-b-2 border-dashed pb-3 DirectionRTL"
      >
        {allMonthDays.map((item) => (
          <span key={uuidv4()}>{item}</span>
        ))}
      </section>
    </>
  );
}
// ====================================================================
function DayGenerator({
  selectedDate,
  setSelectedDate,
  selectedMonthNumber,
  selectedYearNumber,
  selectedDayNumber,
  privateDayNumber,
}) {
  return (
    <>
      <main
        onClick={() => {
          setSelectedDate(
            `${selectedYearNumber}-${selectedMonthNumber}-${privateDayNumber}`
          );
        }}
        className={
          privateDayNumber == selectedDayNumber
            ? "flex flex-col items-center gap-3 px-1 py-3 rounded-md hover:cursor-pointer bg-[#FEEE00]"
            : "flex flex-col items-center gap-3 px-1 py-3 rounded-md hover:cursor-pointer"
        }
        // onClick={() => setActiveDay(dayID)}
      >
        <h1
          className={
            privateDayNumber == selectedDayNumber
              ? "flex justify-center items-center h-3 text-[10px] font-bold text-black"
              : "flex justify-center items-center h-3 text-[10px] font-bold text-[#B4B4B4]"
          }
        >
          {getDayName(
            new Date(
              `${selectedYearNumber}-${selectedMonthNumber}-${privateDayNumber}`
            )
          )}
        </h1>
        <p
          className={
            privateDayNumber == selectedDayNumber
              ? "flex justify-center items-center w-8 h-8 rounded-full text-[15px] bg-black text-white"
              : "flex justify-center items-center w-8 h-8 rounded-full text-[15px]"
          }
        >
          {privateDayNumber}
        </p>
        <span className="flex justify-center gap-1">
          <div className="w-[5px] h-[5px] rounded-full bg-[#FC9A00]"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-[#FF4B55]"></div>
        </span>
      </main>
    </>
  );
}
