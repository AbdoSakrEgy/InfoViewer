import React from "react";
import UsersDateContainer from "../Organisms/UsersDateContainer";
import UsersStatsContainer from "../Organisms/UsersStatsContainer";
import UsersTableContainer from "../Organisms/UsersTableContainer";
import { Icon } from "@iconify/react";

export default function UserDashboard() {
  return (
    <main className="overflow-auto w-full">
      <header className="2xl:h-20 bg-white"></header>
      <section className="flex flex-row justify-between gap-0 w-full bg-[#F6F6F6]">
        <div className="drawer xl:drawer-open flex justify-end xl:w-[30%] w-auto">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex justify-end w-full xl:hidden">
            {/* Page content here */}
            <label htmlFor="my-drawer-2">
              <div className="flex items-center h-screen w-10 fixed top-0 z-40 shadow-xl hover:cursor-pointer bg-white">
                <Icon
                  icon="material-symbols:keyboard-arrow-up-rounded"
                  rotate={1}
                  width={40}
                  className="rounded-full fixed top-1/2 left-3 border-4 border-white bg-yellow-300"
                />
              </div>
            </label>
          </div>
          <div className="drawer-side z-50">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <UsersDateContainer />
          </div>
        </div>
        <div className="flex flex-col xl:w-[70%] w-full bg-[#F6F6F6]">
          <UsersStatsContainer />
          <UsersTableContainer />
        </div>
      </section>
    </main>
  );
}
