import React from "react";
import Dates from "./Dates";
import Comments from "./Comments";

export default function UsersDateContainer() {
  return (
    <>
      <main className="flex flex-col gap-5 p-5 mt-3 mr-3 rounded-lg bg-white">
        <Dates />
        <Comments />
      </main>
    </>
  );
}
