import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

function daysInMonth(month, year) {
  // console.log(new Date(year, month, 0).getDate());
  return new Date(year, month, 0).getDate();
}

function getDayName(date = new Date(), locale = "en-US") {
  return date.toLocaleDateString(locale, { weekday: "long" });
}
// console.log(getDayName(new Date('2023-08-23')));

export default function Dates() {
  const [selectedDate, setSelectedDate] = useState("2023-08-23");
  const [yearNumber, setYearNumber] = useState("2023");
  const [monthNumber, setMonthNumber] = useState("08");
  const [dayNumber, setDayNumber] = useState("23");
  useEffect(() => {
    setYearNumber(selectedDate.slice(0, 4));
    setMonthNumber(selectedDate.slice(5, 7));
    setDayNumber(selectedDate.slice(8, 10));
  }, [selectedDate]);

  return (
    <>
      <main className="flex flex-col gap-5">
        <Section1
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          monthNumber={monthNumber}
          yearNumber={yearNumber}
          dayNumber={dayNumber}
        />
        <Section2
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          monthNumber={monthNumber}
          yearNumber={yearNumber}
          dayNumber={dayNumber}
        />
      </main>
    </>
  );
}
// ====================================================================
function Section1({
  selectedDate,
  setSelectedDate,
  monthNumber,
  yearNumber,
  dayNumber,
}) {
  const handleDateChange = (e) => {
    // console.log(e.target.value); 2023-08-23
    setSelectedDate(e.target.value);
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
        <aside className="flex gap-3">
          <button className="btn btn-sm bg-inherit hover:bg-inherit">
            <Icon icon="fluent:ios-arrow-24-filled" rotate={2} />
          </button>
          <button className="btn btn-sm bg-inherit hover:bg-inherit">
            <Icon icon="fluent:ios-arrow-24-filled" />
          </button>
          <div className="font-semibold">تقويم المواعيد</div>
        </aside>
      </section>
    </>
  );
}
// ====================================================================
function Section2({
  selectedDate,
  setSelectedDate,
  monthNumber,
  yearNumber,
  dayNumber,
}) {
  const [activeDay, setActiveDay] = useState(7);

  return (
    <>
      <section className="flex justify-center items-center w-auto overflow-auto">
        <DayGenerator
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          monthNumber={monthNumber}
          yearNumber={yearNumber}
          dayNumber={dayNumber}
        />
      </section>
    </>
  );
}
// ====================================================================
function DayGenerator({
  selectedDate,
  setSelectedDate,
  monthNumber,
  yearNumber,
  dayNumber,
}) {
  return (
    <>
      <main
        className={
          true
            ? "flex flex-col items-center gap-5 px-3 py-3 rounded-md hover:cursor-pointer bg-yellow-300"
            : "flex flex-col items-center gap-5 px-3 py-3 rounded-md hover:cursor-pointer"
        }
        // onClick={() => setActiveDay(dayID)}
      >
        <h1
          className={
            true
              ? "text-xs font-bold text-black"
              : "text-xs font-bold text-[#B4B4B4]"
          }
        >
          {getDayName(new Date(`${selectedDate}`))}
        </h1>
        <p
          className={
            true
              ? "flex justify-center items-center w-10 h-10 rounded-full bg-black text-white"
              : "flex justify-center items-center w-10 h-10 rounded-full"
          }
        >
          {dayNumber}
        </p>
        <span className="flex justify-center gap-3">
          <div className="badge badge-xs bg-[#FC9A00] border-[#FC9A00]"></div>
          <div className="badge badge-xs bg-[#FF4B55] border-[#FF4B55]"></div>
        </span>
      </main>
    </>
  );
}
