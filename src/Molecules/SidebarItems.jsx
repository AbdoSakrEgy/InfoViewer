import React, { useState } from "react";
import homeIcon from "../assets/home.png";
import VectorToDown from "../assets/VectorToDown.png";
import setting from "../assets/setting-2.png";
import infoIcon from "../assets/info-circle.png";
import { Icon } from "@iconify/react";

export default function SidebarItems() {
  // temperory code to handle color change, but its better to handle it with React router dom
  const [linkActive, setLinkActive] = useState(1);

  return (
    <main className="flex flex-col justify-end gap-10 text-right text-sm mt-14 py-5 pl-10 border-t">
      <section>
        <h1 className="text-sm mb-5 pr-5 text-gray-400">الرئيسية</h1>
        <SidebarItem
          name={"الرئيسية"}
          linkID={1}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
        />
        <SidebarItemWithCollapse
          name={"منيو رقم 1"}
          linkID={2}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
        />
        <SidebarItemWithCollapse
          name={"منيو رقم 1"}
          linkID={3}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
        />
        <SidebarItemWithCollapse
          name={"منيو رقم 1"}
          linkID={4}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
        />
        <SidebarItem
          name={"منيو رقم 1"}
          linkID={5}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
        />
      </section>
      <section className="flex flex-col gap-5">
        <h1 className="text-sm mb-5 pr-5 text-gray-400">الحساب</h1>
        <Info
          linkID={6}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
        />
        <Settinges
          linkID={7}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
        />
      </section>
    </main>
  );
}

function SidebarItem({ name, linkID, linkActive, setLinkActive }) {
  return (
    <main
      onClick={() => setLinkActive(linkID)}
      className="flex justify-end items-center gap-2 text-sm font-semibold hover:cursor-pointer"
    >
      <span>{name}</span>
      <span
        className={
          linkActive === linkID
            ? "py-2 pl-5 rounded-l-full bg-yellow-300"
            : "py-2 pl-5 rounded-l-full"
        }
      >
        <img src={homeIcon} alt="homeIcon" className="pr-5" />
      </span>
    </main>
  );
}

function SidebarItemWithCollapse({ name, linkID, linkActive, setLinkActive }) {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  return (
    <main onClick={() => setLinkActive(linkID)}>
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
          <span className="flex justify-end gap-2 items-center w-2/3">
            <span>{name}</span>
            <span
              className={
                linkActive === linkID
                  ? "py-2 pl-5 rounded-l-full bg-yellow-300"
                  : "py-2 pl-5 rounded-l-full"
              }
            >
              <img src={homeIcon} alt="homeIcon" className="pr-5" />
            </span>
          </span>
        </div>
        <div className="collapse-content flex flex-col gap-5">
          <p className="text-center text-xs font-semibold hover:cursor-pointer">
            منيو ميني
          </p>
          <p className="text-center text-xs font-semibold hover:cursor-pointer">
            منيو ميني
          </p>
          <p className="text-center text-xs font-semibold hover:cursor-pointer">
            منيو ميني
          </p>
        </div>
      </div>
    </main>
  );
}

function Info({ linkID, linkActive, setLinkActive }) {
  return (
    <div
      onClick={() => setLinkActive(linkID)}
      className="flex justify-end items-center gap-2 text-sm font-semibold hover:cursor-pointer"
    >
      <span>المساعدة</span>
      <span
        className={
          linkActive === linkID
            ? "py-2 pl-5 rounded-l-full bg-yellow-300"
            : "py-2 pl-5 rounded-l-full"
        }
      >
        <img src={infoIcon} alt="homeIcon" className="pr-5" />
      </span>
    </div>
  );
}

function Settinges({ linkID, linkActive, setLinkActive }) {
  return (
    <div
      onClick={() => setLinkActive(linkID)}
      className="flex justify-end items-center gap-2 text-sm font-semibold hover:cursor-pointer"
    >
      <span>الإعدادات</span>
      <span
        className={
          linkActive === linkID
            ? "py-2 pl-5 rounded-l-full bg-yellow-300"
            : "py-2 pl-5 rounded-l-full"
        }
      >
        <img src={setting} alt="homeIcon" className="pr-5" />
      </span>
    </div>
  );
}
