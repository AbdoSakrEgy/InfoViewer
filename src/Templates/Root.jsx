import React from "react";
import Sidebar from "../Organisms/Sidebar";
import UserDashboard from "../Pages/UserDashboard";

export default function Root() {
  return (
    <>
      <main className="flex justify-end items-start h-screen gap-0">
        <UserDashboard />
        <Sidebar />
      </main>
    </>
  );
}
