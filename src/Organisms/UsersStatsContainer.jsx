import React from "react";
import UserData from "../Molecules/users stats/UserData";
import Stats from "../Molecules/users stats/Stats";
import AdditionalStats from "../Molecules/users stats/AdditionalStats";

export default function UsersStatsContainer() {
  return (
    <>
      <main className="flex flex-col 2xl:flex-row gap-3 justify-between items-center p-3 bg-inherit">
        <AdditionalStats />
        <Stats />
        <UserData />
      </main>
    </>
  );
}
