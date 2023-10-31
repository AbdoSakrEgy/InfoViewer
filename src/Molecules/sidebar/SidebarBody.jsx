import React, { useState } from "react";
import homeIcon from "../../assets/home.png";
import setting from "../../assets/setting-2.png";
import infoIcon from "../../assets/info-circle.png";
import { Icon } from "@iconify/react";

export default function SidebarBody({ isSidebarOpen, setIsSidebarOpen }) {
  // temperory code to handle color change, but its better to handle it with React router dom
  const [linkActive, setLinkActive] = useState(1);

  return (
    <main
      className={`flex flex-col justify-end gap-5 text-right text-sm mt-14 border-t bg-white ${
        isSidebarOpen && "pl-5"
      } text-black`}
    >
      <section>
        <h1 className="text-[10px] pr-5 text-gray-400">الرئيسية</h1>
        <Menu
          name={"الرئيسية"}
          menuID={1}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <MenuWithCollapse
          name={"منيو رقم 1"}
          menuID={2}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <MenuWithCollapse
          name={"منيو رقم 1"}
          menuID={3}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <MenuWithCollapse
          name={"منيو رقم 1"}
          menuID={4}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Menu
          name={"منيو رقم 1"}
          menuID={5}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </section>
      <section className="flex flex-col gap-5">
        <h1 className="text-[10px] pr-5 text-gray-400">الحساب</h1>
        <Info
          menuID={6}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Settinges
          menuID={7}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </section>
    </main>
  );
}
// ====================================================================
function Menu({
  name,
  menuID,
  linkActive,
  setLinkActive,
  isSidebarOpen,
  setIsSidebarOpen,
}) {
  return (
    <main
      onClick={() => setLinkActive(menuID)}
      className="flex justify-end items-center gap-2 mt-7 text-[10px] font-semibold hover:cursor-pointer"
    >
      <span className={`${!isSidebarOpen && "hidden"}`}>{name}</span>
      <span
        className={
          linkActive === menuID
            ? "py-2 pl-3 rounded-l-full bg-[#FEEE00]"
            : "py-2 pl-3 rounded-l-full"
        }
      >
        <img src={homeIcon} alt="homeIcon" className="pr-3" />
      </span>
    </main>
  );
}
// ====================================================================
function MenuWithCollapse({
  name,
  menuID,
  linkActive,
  setLinkActive,
  isSidebarOpen,
  setIsSidebarOpen,
}) {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  return (
    <main
      onClick={() => {
        setLinkActive(menuID);
      }}
      className="mt-7 hover:cursor-pointer"
    >
      <section
        onClick={() => {
          setIsCollapseOpen(!isCollapseOpen);
        }}
        className={`${
          isSidebarOpen && "flex justify-between items-center"
        } p-0 text-[10px] font-semibold`}
      >
        <Icon
          icon="ep:arrow-up-bold"
          className={`${!isCollapseOpen && "rotate-180"} ${
            !isSidebarOpen && "hidden"
          }`}
        />
        <span className={`flex justify-end gap-2 items-center`}>
          <span className={`${!isSidebarOpen && "hidden"}`}>{name}</span>
          <span
            className={`py-2 pl-3 rounded-l-full ${
              linkActive === menuID && "bg-[#FEEE00]"
            }`}
          >
            <img src={homeIcon} alt="homeIcon" className="pr-3" />
          </span>
        </span>
      </section>

      <section
        className={`flex flex-col gap-3 mt-2 ${
          isSidebarOpen ? !isCollapseOpen && "hidden" : "hidden"
        }`}
      >
        <p className="text-right text-[10px] pr-16 hover:cursor-pointer">
          منيو ميني
        </p>
        <p className="text-right text-[10px] pr-16 hover:cursor-pointer">
          منيو ميني
        </p>
        <p className="text-right text-[10px] pr-16 hover:cursor-pointer">
          منيو ميني
        </p>
      </section>
    </main>
  );
}
// ====================================================================
function Info({
  menuID,
  linkActive,
  setLinkActive,
  isSidebarOpen,
  setIsSidebarOpen,
}) {
  return (
    <div
      onClick={() => setLinkActive(menuID)}
      className="flex justify-end items-center gap-2 text-[10px] font-semibold hover:cursor-pointer"
    >
      <span className={`${!isSidebarOpen && "hidden"}`}>المساعدة</span>
      <span
        className={
          linkActive === menuID
            ? "py-2 pl-3 rounded-l-full bg-[#FEEE00]"
            : "py-2 pl-3 rounded-l-full"
        }
      >
        <img src={infoIcon} alt="homeIcon" className="pr-3" />
      </span>
    </div>
  );
}
// ====================================================================
function Settinges({
  menuID,
  linkActive,
  setLinkActive,
  isSidebarOpen,
  setIsSidebarOpen,
}) {
  return (
    <div
      onClick={() => setLinkActive(menuID)}
      className="flex justify-end items-center gap-2 text-[10px] font-semibold hover:cursor-pointer"
    >
      <span className={`${!isSidebarOpen && "hidden"}`}>الإعدادات</span>
      <span
        className={
          linkActive === menuID
            ? "py-2 pl-3 rounded-l-full bg-[#FEEE00]"
            : "py-2 pl-3 rounded-l-full"
        }
      >
        <img src={setting} alt="homeIcon" className="pr-3" />
      </span>
    </div>
  );
}
