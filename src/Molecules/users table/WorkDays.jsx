import React from "react";

export default function WorkDays({ workDays }) {
  return (
    <main className="flex justify-between gap-1">
      <span
        className={
          workDays.find((element) => element === 7)
            ? "w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white"
            : "w-5 text-center p-1 rounded-sm text-xs bg-[#F7F7FA] text-[#BBBEC2]"
        }
      >
        ج
      </span>
      <span
        className={
          workDays.find((element) => element === 6)
            ? "w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white"
            : "w-5 text-center p-1 rounded-sm text-xs bg-[#F7F7FA] text-[#BBBEC2]"
        }
      >
        خ
      </span>
      <span
        className={
          workDays.find((element) => element === 5)
            ? "w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white"
            : "w-5 text-center p-1 rounded-sm text-xs bg-[#F7F7FA] text-[#BBBEC2]"
        }
      >
        ا
      </span>
      <span
        className={
          workDays.find((element) => element === 4)
            ? "w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white"
            : "w-5 text-center p-1 rounded-sm text-xs bg-[#F7F7FA] text-[#BBBEC2]"
        }
      >
        ث
      </span>
      <span
        className={
          workDays.find((element) => element === 3)
            ? "w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white"
            : "w-5 text-center p-1 rounded-sm text-xs bg-[#F7F7FA] text-[#BBBEC2]"
        }
      >
        ن
      </span>
      <span
        className={
          workDays.find((element) => element === 2)
            ? "w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white"
            : "w-5 text-center p-1 rounded-sm text-xs bg-[#F7F7FA] text-[#BBBEC2]"
        }
      >
        ح
      </span>
      <span
        className={
          workDays.find((element) => element === 1)
            ? "w-5 text-center p-1 rounded-sm text-xs bg-[#2385EA] text-white"
            : "w-5 text-center p-1 rounded-sm text-xs bg-[#F7F7FA] text-[#BBBEC2]"
        }
      >
        س
      </span>
    </main>
  );
}
