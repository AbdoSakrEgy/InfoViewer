import React from "react";
import Dates from "./Dates";
import Comments from "./Comments";

export default function UsersDateContainer() {
  return (
    <>
      <main className="flex flex-col gap-5 p-5 xl:mt-3 xl:mr-3 w-2/3 xl:w-auto rounded-lg bg-white">
        <Dates />
        <Comments />
      </main>
    </>
  );
}
