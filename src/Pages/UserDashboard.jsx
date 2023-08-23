import React from "react";
import UsersDateContainer from "../Molecules/users date/UsersDateContainer";
import UsersStatsContainer from "../Molecules/users stats/UsersStatsContainer";
import UsersTableContainer from "../Molecules/users table/UsersTableContainer";
import { Icon } from "@iconify/react";

export default function UserDashboard() {
  console.log(window.innerWidth);
  return (
    <>
      <main className="basis-full">
        <header className="xl:h-20 bg-white"></header>
        <section className="flex flex-row justify-between bg-[#F6F6F6]">
            <div className="drawer xl:drawer-open">
              <input
                id="my-UserData-drawer"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-UserData-drawer"
                  className="btn px-3 drawer-button xl:hidden bg-[#7661E2] hover:bg-[#7661E2] text-white "
                >
                  <Icon icon="ep:arrow-right-bold" width="25" />
                </label>
              </div>
              <div className="drawer-side z-50">
                <label
                  htmlFor="my-UserData-drawer"
                  className="drawer-overlay"
                ></label>
                <UsersDateContainer />
              </div>
            </div>
            {/* <UsersDateContainer /> */}
          <div className="flex flex-col basis-2/3">
            <UsersStatsContainer />
            <UsersTableContainer />
          </div>
        </section>
      </main>
    </>
  );
}
