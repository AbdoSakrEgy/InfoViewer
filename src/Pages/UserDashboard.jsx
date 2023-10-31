import React, { useEffect, useLayoutEffect, useState } from "react";
import UsersDateContainer from "../Organisms/UsersDateContainer";
import UsersStatsContainer from "../Organisms/UsersStatsContainer";
import UsersTableContainer from "../Organisms/UsersTableContainer";
import { Icon } from "@iconify/react";
import useScreenSize from "../Atoms/useScreenSize";

export default function UserDashboard() {
  const screenSize = useScreenSize();

  return (
    <main
      className={`${
        screenSize.width >= 768
          ? "flex justify-between items-start w-fit bg-[#F6F6F6]"
          : (screenSize.width < 768) & (screenSize.width > 480)
          ? "flex flex-col-reverse w-full bg-[#F6F6F6]"
          : screenSize.width <= 480
          ? "flex flex-col-reverse w-full bg-[#F6F6F6]"
          : ""
      }`}
    >
      <UsersDateContainer />
      <div className="flex flex-col items-end w-full bg-[#F6F6F6]">
        <UsersStatsContainer />
        <UsersTableContainer />
      </div>
    </main>
  );
}
