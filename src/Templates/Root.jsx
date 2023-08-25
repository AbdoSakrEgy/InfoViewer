import React from "react";
import UserDashboard from "../Pages/UserDashboard";
import SideBarComponent from "../Organisms/SideBarComponent";

export default function Root() {
  return (
    <main className="flex justify-center items-start overflow-auto bg-[#f6f6f6] 2xl:bg-white">
      <UserDashboard />
      <SideBarComponent />
    </main>
  );
}
