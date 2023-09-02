import React from "react";
import Stats1 from "../Molecules/users stats/Stats1";
import Stats2 from "../Molecules/users stats/Stats2";
import Stats3 from "../Molecules/users stats/Stats3";

export default function UsersStatsContainer() {
  return (
    <main className="flex flex-col 2xl:flex-row gap-3 justify-between items-center p-3 bg-inherit">
      <Stats3 />
      <Stats2 />
      <Stats1 />
    </main>
  );
}
