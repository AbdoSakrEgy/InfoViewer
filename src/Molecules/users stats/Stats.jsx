import React from "react";

export default function Stats() {
  return (
    <>
      <main className="flex flex-col justify-between h-full w-60 p-3 bg-white">
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

function RadialProgress() {
  return (
    <>
      <main>
        <div
          className="radial-progress text-[#0771DE]"
          style={{ "--value": 70, "--size": "7rem", "--thickness": "8px" }}
        >
          <div
            className="radial-progress text-[#FDB841]"
            style={{ "--value": 40, "--size": "4rem", "--thickness": "8px" }}
          >
            <aside className="flex flex-col">
              <span className="font-bold text-black">158</span>
              <span className="text-xs text-gray-400">جهاز</span>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
