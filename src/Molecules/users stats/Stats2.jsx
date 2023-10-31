import React, { useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { Progress } from "rsuite";
import useScreenSize from "../../Atoms/useScreenSize";

export default function Stats2() {
  const screenSize = useScreenSize();

  return (
    <main
      className={`${
        screenSize.width >= 768
          ? "flex flex-col justify-between gap-3 w-[279px] h-[254.63px]"
          : (screenSize.width < 768) & (screenSize.width > 480)
          ? "flex flex-col justify-between gap-3 w-full h-[254.63px]"
          : screenSize.width <= 480
          ? "flex flex-col justify-between gap-3 w-full h-[254.63px]"
          : ""
      } py-4 bg-white px-[20px]`}
    >
      <section className="text-right font-bold">إحصائيات</section>
      <section className="flex justify-center items-center">
        <RadialProgress />
      </section>
      <section className="flex justify-around items-center">
        <aside className="flex justify-end items-center relative">
          <article className="flex flex-col items-end">
            <span className="font-bold">108</span>
            <span className="text-xs text-gray-400">الخيار الثاني</span>
          </article>
          <div className="absolute rounded h-full w-1 -right-4 bg-[#FEEE00]"></div>
        </aside>
        <aside className="flex justify-end items-center relative">
          <article className="flex flex-col items-end">
            <span className="font-bold">108</span>
            <span className="text-xs text-gray-400">الخيار الأول</span>
          </article>
          <div className="absolute rounded h-full w-1 -right-4 bg-[#0771DE]"></div>
        </aside>
      </section>
    </main>
  );
}

// ===========================================================
function RadialProgress() {
  const style1 = {
    width: 130,
    display: "inline-block",
  };
  const style2 = {
    width: 90,
    display: "inline-block",
  };

  return (
    <main>
      <div style={style1} className="relative">
        <Progress.Circle percent={70} strokeColor="#0771DE" showInfo={false} />
        <div style={style2} className="absolute RadialProgressChild">
          <Progress.Circle
            percent={30}
            strokeColor="#FDB841"
            showInfo={false}
            gapPosition={"right"}
          />
        </div>
        <section className="flex flex-col items-center absolute RadialProgressChild">
          <span className="text-lg font-bold">158</span>
          <span className="text-xs text-[#6B7181]">جهاز</span>
        </section>
      </div>
    </main>
  );
}
