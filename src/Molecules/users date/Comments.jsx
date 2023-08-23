import React from "react";
import { Icon } from "@iconify/react";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";

export default function Comments() {
  return (
    <>
      <main className="flex flex-col gap-5 overflow-auto">
        <CommentTemp bgColor={"#F2F5F1"} textColor={"black"} img={person2} />
        <CommentTemp bgColor={"#FFF6E3"} textColor={"black"} img={person3} />
        <CommentTemp bgColor={"#7661E2"} textColor={"white"} img={person4} />
        <CommentTemp bgColor={"#F1ECFE"} textColor={"black"} img={person4} />
        <CommentTemp bgColor={"#7661E2"} textColor={"white"} img={person4} />
      </main>
    </>
  );
}

function CommentTemp({ text, date, img, bgColor, textColor }) {
  return (
    <>
      {/* <main className="flex flex-col gap-5 rounded-xl p-5 mx-5 bg-[#F2F5F1]"> */}
      <main
        className={`flex flex-col gap-5 rounded-xl p-5 `}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <p className="text-right font-semibold">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي
        </p>
        <section className="flex justify-end items-center gap-1">
          <span>م</span>
          <span>06:00</span>
          <span>-</span>
          <span>05:00</span>
          <Icon icon="teenyicons:clock-outline" className="ml-3" />
        </section>
        <section className="flex justify-between">
          <button className="btn btn-md rounded-xl bg-white hover:bg-white">
            <Icon icon="uiw:arrow-left" />
          </button>

          <img src={img} alt="person" className="w-11 h-11" />
        </section>
      </main>
    </>
  );
}
