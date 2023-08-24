import React from "react";
import UserData from "./UserData";
import Stats from "./Stats";
import AdditionalStats from "./AdditionalStats";

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
