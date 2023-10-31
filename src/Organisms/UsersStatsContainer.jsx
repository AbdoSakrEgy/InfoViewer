import React from "react";
import Stats1 from "../Molecules/users stats/Stats1";
import Stats2 from "../Molecules/users stats/Stats2";
import Stats3 from "../Molecules/users stats/Stats3";
import useScreenSize from "../Atoms/useScreenSize";

export default function UsersStatsContainer() {
  const screenSize = useScreenSize();

  return (
    <main
      className={`${
        screenSize.width >= 768
          ? "flex justify-between items-center gap-3 p-3 bg-inherit"
          : (screenSize.width < 768) & (screenSize.width > 480)
          ? "flex flex-col gap-3 p-3 bg-inherit w-full"
          : screenSize.width <= 480
          ? "flex flex-col gap-3 p-3 bg-inherit w-full"
          : ""
      }`}
    >
      <Stats3 />
      <Stats2 />
      <Stats1 />
    </main>
  );
}
