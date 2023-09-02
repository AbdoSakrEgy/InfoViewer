import React from "react";
import MaskGroup1 from "../../assets/Mask Group1.png";
import MaskGroup2 from "../../assets/Mask Group2.png";
import MaskGroup3 from "../../assets/Mask Group3.png";
import { Icon } from "@iconify/react";

export default function Stats3() {
  return (
    <>
      <main className="flex flex-col gap-3 h-full">
        {/* 1 */}
        <header className="flex justify-between rounded-xl pr-3 bg-[#FF9A3E] text-white">
          <section>
            <img src={MaskGroup1} alt="MaskGroup1" className="h-full" />
          </section>
          <section className="flex flex-col justify-center gap-3">
            <aside className="text-right text-sm">قراءات ثانية</aside>
            <aside className="flex justify-end items-center gap-1 text-2xl font-bold">
              <Icon icon="mdi:timer-start-outline" /> <span>35</span>
            </aside>
          </section>
        </header>
        {/* 2 */}
        <header className="flex rounded-xl pr-3 bg-[#7661E2] text-white">
          <section>
            <img src={MaskGroup2} alt="MaskGroup1" className="h-full" />
          </section>
          <section className="flex flex-col justify-center gap-3">
            <aside className="text-right text-sm">قراءات ثانية</aside>
            <aside className="flex justify-end items-center gap-1 text-2xl font-bold">
              <Icon icon="fluent:calendar-16-regular" /> <span>256</span>
            </aside>
          </section>
        </header>
        {/* 3 */}
        <header className="flex rounded-xl pr-3 bg-[#3DD598] text-white">
          <section>
            <img src={MaskGroup3} alt="MaskGroup1" className="h-full" />
          </section>
          <section className="flex flex-col justify-center gap-3">
            <aside className="text-right text-sm">قراءات ثانية</aside>
            <aside className="flex justify-end items-center gap-1 text-2xl font-bold">
              <Icon icon="teenyicons:tick-circle-outline" /> <span>18</span>
            </aside>
          </section>
        </header>
      </main>
    </>
  );
}