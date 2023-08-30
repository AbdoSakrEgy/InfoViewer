import React from "react";
import userImage from "../../assets/Image-79.png";
import Ellipse1 from "../../assets/Ellipse1.png";
import Ellipse2 from "../../assets/Ellipse2.png";
import Ellipse3 from "../../assets/Ellipse3.png";

export default function UserData() {
  return (
    <>
      <main className="flex flex-col gap-5 p-3 h-full rounded-md w-40 xl:w-80 bg-white">
        <section className="flex flex-col xl:flex-row xl:justify-between xl:gap-24 gap-10 items-center">
          <span className="flex justify-center text-xs text-gray-400">
            <span>يونيو</span>
            <span>10</span>
            <span>-</span>
            <span>مايو</span>
            <span>10</span>
          </span>
          <span className="font-bold">الشخص الأول</span>
        </section>

        <section className="flex flex-col xl:flex-row xl:justify-between xl:items-center xl:gap-0 gap-5">
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
                  <img src={userImage} alt="userImage" className="w-10"/>
                  <p className="text-xs font-bold">الموظف الأول</p>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col basis-1/3">
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
    </>
  );
}
// ===================================================================
function InfoViewer({ infoTitle, infoData, infoColor }) {
  return (
    <>
      <main className="flex flex-col gap-0 items-end mb-5">
        <div className="flex text-[13px] items-center text-gray-400">
          <span>{infoTitle}</span>
          <div
            className="badge badge-xs ml-1"
            style={{ backgroundColor: infoColor }}
          ></div>
        </div>
        <div>{infoData}</div>
      </main>
    </>
  );
}
