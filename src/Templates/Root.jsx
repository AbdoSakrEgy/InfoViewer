import React from "react";
import UserDashboard from "../Pages/UserDashboard";
import SideBarComponent from "../Organisms/SideBarComponent";

export default function Root() {
  return (
    <>
      <main className="flex justify-between items-start overflow-auto bg-[#f6f6f6] xl:bg-white">
        <UserDashboard />
        <SideBarComponent />
      </main>
    </>
  );
}
