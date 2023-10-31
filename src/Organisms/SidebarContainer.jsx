import React, { useState } from "react";
import { Icon } from "@iconify/react";
import logo from "../assets/logo.png";
import miniLogo from "../assets/miniLogo.png";
import SidebarBody from "../Molecules/sidebar/SidebarBody";
import useScreenSize from "../Atoms/useScreenSize";
import "./sidebarContainer.css";

export default function SidebarContainer() {
  const screenSize = useScreenSize();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main
      className={`${
        isSidebarOpen
          ? screenSize.width >= 768
            ? "sidebar-open-lg"
            : (screenSize.width < 768) & (screenSize.width > 480)
            ? "sidebar-open-md"
            : screenSize.width <= 480
            ? "sidebar-open-sm"
            : ""
          : screenSize.width >= 768
          ? "sidebar-close-lg"
          : (screenSize.width < 768) & (screenSize.width > 480)
          ? "sidebar-close-md"
          : screenSize.width <= 480
          ? "sidebar-close-sm"
          : ""
      } duration-300 z-40 bg-white text-white border-l-[1px] border-[#F6F6F6]`}
    >
      <Icon
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        icon="material-symbols:keyboard-arrow-up-rounded"
        rotate={1}
        className={`absolute top-16 p-0 m-0 rounded-full hover:cursor-pointer text-black bg-[#FEEE00] ${
          isSidebarOpen ? "left-0" : "rotate-180 -left-3"
        }`}
        width={20}
      />
      <nav>
        <header className="flex justify-center items-center h-24">
          {isSidebarOpen ? (
            <img src={logo} alt="logo" />
          ) : (
            <img src={miniLogo} alt="miniLogo" />
          )}
        </header>
        <SidebarBody
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </nav>
    </main>
  );
}
