import React, { useState } from "react";
import homeIcon from "../assets/home.png";
import VectorToDown from "../assets/VectorToDown.png";
import setting from "../assets/setting-2.png";
import infoIcon from "../assets/info-circle.png";
import { Icon } from "@iconify/react";

export default function SidebarItems() {
  return (
    <main className="flex flex-col justify-end gap-10 text-right text-sm mt-14 py-5 pl-10 border-t">
      <section>
        <h1 className="text-sm mb-5 pr-5 text-gray-400">الرئيسية</h1>
        <SidebarItem name={"الرئيسية"} />
        <SidebarItemWithCollapse name={"منيو رقم 1"} />
        <SidebarItemWithCollapse name={"منيو رقم 1"} />
        <SidebarItemWithCollapse name={"منيو رقم 1"} />
        <SidebarItem name={"منيو رقم 1"} />
      </section>
      <section>
        <h1 className="text-sm mb-5 pr-5 text-gray-400">الحساب</h1>
        <Info />
        <Settinges />
      </section>
    </main>
  );
}

function SidebarItem({ name }) {
  return (
    <div className="flex justify-end items-center gap-5 text-sm font-semibold hover:cursor-pointer">
      <span>{name}</span>
      <img src={homeIcon} alt="homeIcon" className="pr-5" />
    </div>
  );
}

function SidebarItemWithCollapse({ name }) {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  return (
    <main>
      <div className="collapse bg-inherit">
        <input
          type="checkbox"
          onChange={(e) => {
            setIsCollapseOpen(e.target.checked);
          }}
        />
        <div className="collapse-title flex justify-between items-center p-0 text-sm font-semibold">
          <Icon
            icon="ep:arrow-up-bold"
            className={isCollapseOpen ? "" : "hidden"}
          />
          <Icon
            icon="ep:arrow-up-bold"
            rotate={2}
            className={isCollapseOpen ? "hidden" : ""}
          />
          <span className="flex justify-end gap-5 items-center w-2/3">
            <span>{name}</span>
            <img src={homeIcon} alt="homeIcon" className="pr-5" />
          </span>
        </div>
        <div className="collapse-content flex flex-col gap-2">
          <p className="text-center text-xs font-semibold">منيو رقم 2</p>
          <p className="text-center text-xs font-semibold">منيو رقم 2</p>
          <p className="text-center text-xs font-semibold">منيو رقم 2</p>
        </div>
      </div>
    </main>
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
