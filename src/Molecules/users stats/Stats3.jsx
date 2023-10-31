import React from "react";
import { Icon } from "@iconify/react";
import "./stats3.css";
import useScreenSize from "../../Atoms/useScreenSize";

export default function Stats3() {
  const screenSize = useScreenSize();

  return (
    <main
      className={`${
        screenSize.width >= 768
          ? "flex flex-col gap-3 w-[195px] h-[254.63px]"
          : (screenSize.width < 768) & (screenSize.width > 480)
          ? "flex flex-col gap-3 w-full h-[254.63px]"
          : screenSize.width <= 480
          ? "flex flex-col gap-3 w-full h-[254.63px]"
          : ""
      }`}
    >
      {/* 1 */}
      <header
        className={`${
          screenSize.width >= 768
            ? "flex justify-end w-[195px] h-[75px]"
            : (screenSize.width < 768) & (screenSize.width > 480)
            ? "flex justify-end w-full h-[75px]"
            : screenSize.width <= 480
            ? "flex justify-end w-full h-[75px]"
            : ""
        } stats3-1 rounded-xl pr-3 bg-[#FF9A3E] text-white`}
      >
        <section className="flex flex-col justify-between items-end my-3">
          <aside className="text-right text-xs">قراءات ثانية</aside>
          <aside className="flex justify-end items-center gap-1 text-2xl font-bold">
            <Icon icon="mdi:timer-start-outline" className="w-4" />
            <span className="text-lg">35</span>
          </aside>
        </section>
      </header>
      {/* 2 */}
      <header
        className={`${
          screenSize.width >= 768
            ? "flex justify-end w-[195px] h-[75px]"
            : (screenSize.width < 768) & (screenSize.width > 480)
            ? "flex justify-end w-full h-[75px]"
            : screenSize.width <= 480
            ? "flex justify-end w-full h-[75px]"
            : ""
        } stats3-2 rounded-xl pr-3 bg-[#7661E2] text-white`}
      >
        <section className="flex flex-col justify-between items-end my-3">
          <aside className="text-right text-xs">قراءات ثانية</aside>
          <aside className="flex justify-end items-center gap-1 text-2xl font-bold">
            <Icon icon="fluent:calendar-16-regular" className="w-4" />
            <span className="text-lg">256</span>
          </aside>
        </section>
      </header>
      {/* 3 */}
      <header
        className={`${
          screenSize.width >= 768
            ? "flex justify-end w-[195px] h-[75px]"
            : (screenSize.width < 768) & (screenSize.width > 480)
            ? "flex justify-end w-full h-[75px]"
            : screenSize.width <= 480
            ? "flex justify-end w-full h-[75px]"
            : ""
        } stats3-3 rounded-xl pr-3 bg-[#3DD598] text-white`}
      >
        <section className="flex flex-col justify-between items-end my-3">
          <aside className="text-right text-xs">قراءات ثانية</aside>
          <aside className="flex justify-end items-center gap-1 text-2xl font-bold">
            <Icon icon="teenyicons:tick-circle-outline" className="w-4" />
            <span className="text-lg">18</span>
          </aside>
        </section>
      </header>
    </main>
  );
}
