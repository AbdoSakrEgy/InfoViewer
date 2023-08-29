import React from "react";
import FileImage1 from "../../assets/FileImage1.png";

export default function FileOfRow() {
  return (
    <main className="flex justify-end gap-1">
      <section className="flex flex-col justify-end font-semibold">
        <p>png.اسم الملف</p>
        <span className="text-xs text-[#BBBEC2]">9mb</span>
      </section>
      <section className="rounded-md">
        <img src={FileImage1} alt="FileImage1" />
      </section>
    </main>
  );
}
