import React, { useState } from "react";
import UserDashboard from "../Pages/UserDashboard";
import SidebarContainer from "../Organisms/SidebarContainer";

export default function Root() {
  return (
    <main className="flex justify-center items-stretch overflow-auto bg-[#f6f6f6] 2xl:bg-white">
      <UserDashboard />
      <SidebarContainer />
    </main>
  );
}
