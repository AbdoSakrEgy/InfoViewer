import React from "react";
import "./pageHeader.css";

export default function PageHeader() {
  return (
    <main className="w-full">
      {/* free palestine */}
      <div className="relative w-full h-[60px] flex flex-col">
        <span className="h-[20px] w-full bg-black"></span>
        <span className="h-[20px] w-full bg-white"></span>
        <span className="h-[20px] w-full bg-[#027c3f]"></span>
        <div className="absolute triangle-right top-0 left-0"></div>
      </div>
      {/* <div className="w-full h-[60px] flex justify-center items-center">
        <span className="relative w-[98%] h-[52px] flex flex-col justify-center rounded-lg overflow-hidden">
          <span className="h-[18px] w-full bg-black"></span>
          <span className="h-[18px] w-full bg-white"></span>
          <span className="h-[18px] w-full bg-[#027c3f]"></span>
          <div className="absolute triangle-right top-0 left-0"></div>
        </span>
      </div> */}
      {/* free palestine */}
    </main>
  );
}
