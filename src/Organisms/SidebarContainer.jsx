import React from "react";
import { Icon } from "@iconify/react";
import logo from "../assets/logo.png";
import miniLogo from "../assets/miniLogo.png";
import SidebarBody from "../Molecules/sidebar/SidebarBody";

export default function SidebarContainer({ isSidebarOpen, setIsSidebarOpen }) {
  const styleSmallScreen = {};
  const styleLargScreen = {};

  return (
    <main
      className={`${
        isSidebarOpen
          ? "xl:w-1/4 xl:relative w-full absolute top-0 bottom-0 right-0"
          : "w-20 relative"
      } duration-300 z-40 bg-white text-white`}
    >
      <Icon
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        icon="material-symbols:keyboard-arrow-up-rounded"
        rotate={1}
        className={`absolute top-16 p-0 m-0 rounded-full hover:cursor-pointer text-black bg-yellow-300 ${
          isSidebarOpen ? "left-0 xl:-left-3" : "rotate-180 -left-3"
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
