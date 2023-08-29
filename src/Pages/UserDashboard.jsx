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
        <div className="drawer xl:drawer-open flex justify-end w-[30%]">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex justify-end w-full xl:hidden">
            {/* Page content here */}
            <label htmlFor="my-drawer-2">
              <Icon
                icon="majesticons:arrow-up-circle"
                width="50"
                className="hover:cursor-pointer"
                color="#7661e2"
              />
            </label>
          </div>
          <div className="drawer-side z-40">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <UsersDateContainer />
          </div>
        </div>
        <div className="flex flex-col w-[70%] bg-[#F6F6F6]">
          <UsersStatsContainer />
          <UsersTableContainer />
        </div>
      </section>
    </main>
  );
}
