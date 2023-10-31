import React from "react";
import Dates from "../Molecules/users date/Dates";
import Comments from "../Molecules/users date/Comments";
import useScreenSize from "../Atoms/useScreenSize";

export default function UsersDateContainer() {
  const screenSize = useScreenSize();

  return (
    <main
      className={`${
        screenSize.width >= 768
          ? "flex flex-col gap-5 w-[386px]"
          : (screenSize.width < 768) & (screenSize.width > 480)
          ? "flex flex-col gap-5 w-full"
          : screenSize.width <= 480
          ? "flex flex-col gap-5 w-full"
          : ""
      } p-5  rounded-lg bg-white border-t-4 border-t-[#F6F6F6]`}
    >
      <Dates />
      <Comments />
    </main>
  );
}
