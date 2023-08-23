import React from "react";
import homeIcon from "../assets/home.png";
import VectorToDown from "../assets/VectorToDown.png";
import setting from "../assets/setting-2.png";
import infoIcon from "../assets/info-circle.png";

export default function SidebarItems() {
  return (
    <>
      <main className="flex flex-col justify-end gap-10 text-right text-sm mt-14 py-5 pl-10 border-t">
        <section>
          <h1 className="text-sm mb-5 pr-5 text-gray-400">الرئيسية</h1>
          <Item1 />
          <Item2 />
          <Item3 />
          <Item4 />
          <Item5 />
        </section>
        <section>
          <h1 className="text-sm mb-5 pr-5 text-gray-400">الحساب</h1>
          <Info />
          <Settinges />
        </section>
      </main>
    </>
  );
}

function Item1() {
  return (
    <div className="flex justify-end items-center gap-5 mb-3 hover:cursor-pointer">
      <span>الرئيسية</span>
      <span className="py-3 pl-2 rounded-l-full">
        <img src={homeIcon} alt="homeIcon" className="pr-5" />
      </span>
    </div>
  );
}

function Item2() {
  return (
    <div className="collapse bg-base-200">
      <input type="checkbox" className="peer" />
      <div className="collapse-title p-0 bg-white">
        <div className="flex justify-between items-center mb-3 hover:cursor-pointer">
          <span className="">
            <img src={VectorToDown} alt="vector" />
          </span>
          <span className="flex items-center gap-5">
            <span>منيو رقم 1</span>
            <span className="py-3 pl-2 rounded-l-full">
              <img src={homeIcon} alt="homeIcon" className="pr-5" />
            </span>
          </span>
        </div>
      </div>
      <div className="collapse-content text-center bg-white">
        <p className="text-sm mb-3">منيو ميني</p>
        <p className="text-sm mb-3">منيو ميني</p>
        <p className="text-sm mb-3">منيو ميني</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="collapse bg-base-200">
      <input type="checkbox" className="peer" />
      <div className="collapse-title p-0 bg-white">
        <div className="flex justify-between items-center mb-3 hover:cursor-pointer">
          <span className="">
            <img src={VectorToDown} alt="vector" />
          </span>
          <span className="flex items-center gap-5">
            <span>منيو رقم 1</span>
            <span className="py-3 pl-2 rounded-l-full">
              <img src={homeIcon} alt="homeIcon" className="pr-5" />
            </span>
          </span>
        </div>
      </div>
      <div className="collapse-content text-center bg-white">
        <p className="text-sm mb-3">منيو ميني</p>
        <p className="text-sm mb-3">منيو ميني</p>
        <p className="text-sm mb-3">منيو ميني</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="flex justify-end items-center gap-5 mb-3 hover:cursor-pointer">
      <span>منيو رقم 1</span>
      <span className="py-3 pl-2 rounded-l-full bg-white">
        <img src={homeIcon} alt="homeIcon" className="pr-5" />
      </span>
    </div>
  );
}

function Item5() {
  return (
    <div className="flex justify-end items-center gap-5 mb-3 hover:cursor-pointer">
      <span>منيو رقم 1</span>
      <span className="py-3 pl-2 rounded-l-full bg-white">
        <img src={homeIcon} alt="homeIcon" className="pr-5" />
      </span>
    </div>
  );
}

function Info() {
  return (
    <div className="flex justify-end items-center gap-5">
      <span>المساعدة</span>
      <span className="py-3 pl-2 rounded-l-full">
        <img src={infoIcon} alt="homeIcon" className="pr-5" />
      </span>
    </div>
  );
}

function Settinges() {
  return (
    <div className="flex justify-end items-center gap-5">
      <span>الإعدادات</span>
      <span className="py-3 pl-2 rounded-l-full">
        <img src={setting} alt="homeIcon" className="pr-5" />
      </span>
    </div>
  );
}
