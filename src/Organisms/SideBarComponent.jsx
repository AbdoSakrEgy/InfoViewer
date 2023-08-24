import React from "react";
import { Icon } from "@iconify/react";
import SidebarItems from "../Molecules/SidebarItems";
import logo from "../assets/logo.png";

export default function SideBarComponent() {
  return (
    <main className="drawer xl:drawer-open drawer-end h-screen w-[5%] xl:w-[20%]">
      <input id="sideBarDrawer" type="checkbox" className="drawer-toggle" />
      <section className="drawer-content bg-[#f6f6f6] xl:hidden">
        <label
          htmlFor="sideBarDrawer"
          className="drawer-button w-full flex justify-center"
        >
          <Icon
            icon="majesticons:arrow-up-circle"
            rotate={2}
            width="50"
            className="hover:cursor-pointer"
            color="#7661e2"
          />
        </label>
        <aside></aside>
      </section>
      <section className="drawer-side z-40">
        <label htmlFor="sideBarDrawer" className="drawer-overlay"></label>
        <aside className="h-full w-2/3 xl:w-full bg-white">
          <DrawerSideContent />
        </aside>
      </section>
    </main>
  );
}

function DrawerSideContent() {
  return (
    <main>
      <section className="flex justify-center w-full py-5">
        <div>
          <img src={logo} alt="logo" />
        </div>
      </section>
      <section>
        <SidebarItems />
      </section>
    </main>
  );
}
