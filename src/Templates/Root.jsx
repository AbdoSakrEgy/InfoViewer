import React, { useState } from "react";
import UserDashboard from "../Pages/UserDashboard";
import SidebarContainer from "../Organisms/SidebarContainer";

export default function Root() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <main className="flex justify-center items-stretch overflow-auto bg-[#f6f6f6] 2xl:bg-white">
      <UserDashboard />
      <SidebarContainer
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </main>
  );
}
