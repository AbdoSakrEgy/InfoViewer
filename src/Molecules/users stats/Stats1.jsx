import React, { useState } from "react";
import userImage from "../../assets/Image-79.png";
import Datepicker from "react-tailwindcss-datepicker";
import { Icon } from "@iconify/react";
import GetMonthName from "../users date/GetMonthName";
import useScreenSize from "../../Atoms/useScreenSize";

export default function Stats1() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  const screenSize = useScreenSize();

  return (
    <main
      className={`${
        screenSize.width >= 768
          ? "flex flex-col gap-5 w-[279px] h-[254.63px]"
          : (screenSize.width < 768) & (screenSize.width > 480)
          ? "flex flex-col gap-5 w-full h-[254.63px]"
          : screenSize.width <= 480
          ? "flex flex-col gap-5 w-full h-[254.63px]"
          : ""
      } bg-white rounded-md px-[20px] py-4`}
    >
      <section className="flex justify-between items-center gap-10">
        <span className="flex items-center">
          <Icon icon="ep:arrow-down" className="mr-1 w-2" />
          <Datepicker
            // useRange={false}
            value={value}
            onChange={handleValueChange}
            displayFormat="MM-DD"
            placeholder={"حدد الفترة"}
            inputClassName="focus:ring-0 text-[9px]"
            containerClassName="relative"
            toggleClassName="hidden"
          />
        </span>
        <span className="font-bold text-xs">الشخص الأول</span>
      </section>

      <section className="flex justify-between items-center gap-5 h-full">
        <div
          className="radial-progress text-[#3DD598]"
          style={{ "--value": "90", "--size": "9rem", "--thickness": "3px" }}
        >
          <div
            className="radial-progress text-[#7661E2]"
            style={{
              "--value": "70",
              "--size": "7rem",
              "--thickness": "3px",
            }}
          >
            <div
              className="radial-progress text-[#F8C07F]"
              style={{
                "--value": "25",
                "--size": "5rem",
                "--thickness": "3px",
              }}
            >
              <span className="flex flex-col justify-center items-center w-full h-full overflow-hidden text-black">
                <img src={userImage} alt="userImage" className="w-10" />
                <p className="text-[11px] font-bold">الموظف الأول</p>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full justify-between">
          <InfoViewer
            infoTitle={"قراءة رقم 1"}
            infoData={254}
            infoColor={"#3DD598"}
          />
          <InfoViewer
            infoTitle={"قراءة رقم 2"}
            infoData={120}
            infoColor={"#7661E2"}
          />
          <InfoViewer
            infoTitle={"قراءة رقم 3"}
            infoData={25}
            infoColor={"#F8C07F"}
          />
        </div>
      </section>
    </main>
  );
}
// ===================================================================
function InfoViewer({ infoTitle, infoData, infoColor }) {
  return (
    <>
      <main className="flex flex-col gap-0 items-end">
        <div className="flex text-[9px] items-center text-gray-400">
          <span>{infoTitle}</span>
          <div
            className="badge badge-xs ml-1"
            style={{ backgroundColor: infoColor }}
          ></div>
        </div>
        <div className="text-sm font-bold pt-2">{infoData}</div>
      </main>
    </>
  );
}
