import React, { useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { Progress } from "rsuite";

export default function Stats() {
  return (
    <>
      <main className="flex flex-col justify-between gap-3 xl:gap-0 h-full xl:w-60 p-3 bg-white">
        <section className="xl:text-right text-center font-bold">إحصائيات</section>
        <section className="flex justify-center items-center">
          <RadialProgress />
        </section>
        <section className="flex justify-around items-center">
          <aside className="flex justify-end items-center relative">
            <article className="flex flex-col items-end">
              <span className="font-bold">108</span>
              <span className="text-xs text-gray-400">الخيار الثاني</span>
            </article>
            <div className="absolute rounded h-full w-1 -right-4 bg-yellow-300"></div>
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
    </>
  );
}

// ===========================================================
function RadialProgress() {
  const style1 = {
    width: 150,
    display: "inline-block",
  };
  const style2 = {
    width: 100,
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
