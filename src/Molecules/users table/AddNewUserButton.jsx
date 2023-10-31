import React from "react";
import useScreenSize from "../../Atoms/useScreenSize";

export default function AddNewUserButton() {
  const screenSize = useScreenSize();
  
  return (
    <main>
      <button
        className={`${
          screenSize.width >= 768
            ? "w-[108px] "
            : (screenSize.width < 768) & (screenSize.width > 480)
            ? "w-full"
            : screenSize.width <= 480
            ? "w-full"
            : ""
        } rounded-lg font-semibold text-xs h-[36px] bg-[#FEEE00]`}
      >
        إضافة جديد +
      </button>
    </main>
  );
}
