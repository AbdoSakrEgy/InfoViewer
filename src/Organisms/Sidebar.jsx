import React from "react";
import logo from "../assets/logo.png";
import SidebarItems from "../Molecules/SidebarItems";
import { Icon } from "@iconify/react";

export default function Sidebar() {
  return (
    <>
      <div className="drawer xl:drawer-open drawer-end w-14 xl:w-full h-full bg-[#f6f6f6]">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4">
            <div className="btn w-full bg-[#7661e2] text-white hover:bg-[#7661e2]">
              <Icon icon="ep:arrow-left-bold" />
            </div>
          </label>
        </div>
        <div className="drawer-side z-40">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <main className="flex flex-col justify-start h-screen bg-white">
            <section className="flex justify-center w-full py-5">
              <div>
                <img src={logo} alt="logo" />
              </div>
            </section>

            <section>
              <SidebarItems />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
