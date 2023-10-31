import React, { useState } from "react";
import UserDashboard from "../Pages/UserDashboard";
import SidebarContainer from "../Organisms/SidebarContainer";
// import PageHeader from "../Molecules/header/pageHeader";

export default function Root() {
  return (
    <main className="flex justify-end bg-white">
      <div className="flex flex-col w-full overflow-auto">
        {/* <PageHeader /> */}
        <span className="overflow-auto bg-[#F6F6F6]">
          <UserDashboard />
        </span>
      </div>
      <SidebarContainer />
    </main>
  );
}
