import React from "react";
import Dates from "../Molecules/users date/Dates";
import Comments from "../Molecules/users date/Comments";
import useScreenSize from "../Atoms/useScreenSize";
import "./usersDateContainer.css";

export default function UsersDateContainer() {
  const screenSize = useScreenSize();

  return (
    <main
      className={`${
        screenSize.width >= 768
          ? "usersDateContainer-lg"
          : (screenSize.width < 768) & (screenSize.width > 480)
          ? "usersDateContainer-md"
          : screenSize.width <= 480
          ? "usersDateContainer-sm"
          : ""
      } p-5  rounded-lg bg-white border-t-4 border-t-[#F6F6F6]`}
    >
      <Dates />
      <Comments />
    </main>
  );
}
