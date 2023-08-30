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
      className={`flex flex-col justify-end gap-10 text-right text-sm mt-14 py-5 border-t ${
        isSidebarOpen && "pl-10 "
      } text-black`}
    >
      <section>
        <h1 className="text-sm mb-5 pr-5 text-gray-400">الرئيسية</h1>
        <Menu
          name={"الرئيسية"}
          linkID={1}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <MenuWithCollapse
          name={"منيو رقم 1"}
          linkID={2}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <MenuWithCollapse
          name={"منيو رقم 1"}
          linkID={3}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <MenuWithCollapse
          name={"منيو رقم 1"}
          linkID={4}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Menu
          name={"منيو رقم 1"}
          linkID={5}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </section>
      <section className="flex flex-col gap-5">
        <h1 className="text-sm mb-5 pr-5 text-gray-400">الحساب</h1>
        <Info
          linkID={6}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Settinges
          linkID={7}
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
  linkID,
  linkActive,
  setLinkActive,
  isSidebarOpen,
  setIsSidebarOpen,
}) {
  return (
    <main
      onClick={() => setLinkActive(linkID)}
      className="flex justify-end items-center gap-2 mt-7 text-sm font-semibold hover:cursor-pointer"
    >
      <span className={`${!isSidebarOpen && "hidden"}`}>{name}</span>
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
// ====================================================================
function MenuWithCollapse({
  name,
  linkID,
  linkActive,
  setLinkActive,
  isSidebarOpen,
  setIsSidebarOpen,
}) {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  return (
    <main
      onClick={() => {
        setLinkActive(linkID);
      }}
      className="mt-7 hover:cursor-pointer"
    >
      <section
        onClick={() => {
          setIsCollapseOpen(!isCollapseOpen);
        }}
        className={`${
          isSidebarOpen && "flex justify-between items-center"
        } p-0 text-sm font-semibold`}
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
            className={`py-2 pl-5 rounded-l-full ${
              linkActive === linkID && "bg-yellow-300"
            }`}
          >
            <img src={homeIcon} alt="homeIcon" className="pr-5" />
          </span>
        </span>
      </section>

      <section
        className={`flex flex-col gap-3 mt-2 ${
          isSidebarOpen ? !isCollapseOpen && "hidden" : "hidden"
        }`}
      >
        <p className="text-right text-sm pr-20 hover:cursor-pointer">
          منيو ميني
        </p>
        <p className="text-right text-sm pr-20 hover:cursor-pointer">
          منيو ميني
        </p>
        <p className="text-right text-sm pr-20 hover:cursor-pointer">
          منيو ميني
        </p>
      </section>
    </main>
  );
}
// ====================================================================
function Info({
  linkID,
  linkActive,
  setLinkActive,
  isSidebarOpen,
  setIsSidebarOpen,
}) {
  return (
    <div
      onClick={() => setLinkActive(linkID)}
      className="flex justify-end items-center gap-2 text-sm font-semibold hover:cursor-pointer"
    >
      <span className={`${!isSidebarOpen && "hidden"}`}>المساعدة</span>
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
// ====================================================================
function Settinges({
  linkID,
  linkActive,
  setLinkActive,
  isSidebarOpen,
  setIsSidebarOpen,
}) {
  return (
    <div
      onClick={() => setLinkActive(linkID)}
      className="flex justify-end items-center gap-2 text-sm font-semibold hover:cursor-pointer"
    >
      <span className={`${!isSidebarOpen && "hidden"}`}>الإعدادات</span>
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
