import React from "react";
import { Tooltip, Whisper } from "rsuite";
import { Icon } from "@iconify/react";

export default function SettingsButton({
  placement,
  showID,
  showName,
  showEmail,
  showWorkDays,
  showFile,
  setShowID,
  setShowName,
  setShowEmail,
  setShowWorkDays,
  setShowFile,
}) {
  const myStyle = {
    color: "black",
    backgroundColor: "white",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };
  return (
    <Whisper
      trigger="click"
      placement={placement}
      controlId={`control-id-${placement}`}
      speaker={
        <Tooltip style={myStyle}>
          <main className="py-3 w-40">
            <p className="text-xs font-semibold text-right">التحكم في الجدول</p>

            <hr className="my-3" />
            <input
              id="idCheckbox"
              checked={showID}
              type="checkbox"
              onChange={(e) => setShowID(e.target.checked)}
            />
            <label
              htmlFor="idCheckbox"
              className="hover:cursor-pointer  flex justify-between"
            >
              <p>id رقم ال</p>
            </label>

            <hr className="my-3" />
            <input
              id="nameCheckbox"
              checked={showName}
              type="checkbox"
              onChange={(e) => setShowName(e.target.checked)}
            />
            <label
              htmlFor="nameCheckbox"
              className="hover:cursor-pointer  flex justify-between"
            >
              <p>الاسم بالكامل</p>
            </label>

            <hr className="my-3" />
            <input
              id="emailCheckbox"
              checked={showEmail}
              type="checkbox"
              onChange={(e) => setShowEmail(e.target.checked)}
            />
            <label
              htmlFor="emailCheckbox"
              className="hover:cursor-pointer  flex justify-between"
            >
              <p>البريد الإلكتروني</p>
            </label>

            <hr className="my-3" />
            <input
              id="workDaysCheckbox"
              checked={showWorkDays}
              type="checkbox"
              onChange={(e) => setShowWorkDays(e.target.checked)}
            />
            <label
              htmlFor="workDaysCheckbox"
              className="hover:cursor-pointer  flex justify-between"
            >
              <p>أيام العمل</p>
            </label>

            <hr className="my-3" />
            <input
              id="fileCheckbox"
              checked={showFile}
              type="checkbox"
              onChange={(e) => setShowFile(e.target.checked)}
            />
            <label
              htmlFor="fileCheckbox"
              className="hover:cursor-pointer flex justify-between"
            >
              <p>الملفات</p>
            </label>
          </main>
        </Tooltip>
      }
    >
      <button className="btn btn-xs bg-[#2385EA] text-white hover:bg-[#2385EA]">
        <Icon icon="ep:setting" />
      </button>
    </Whisper>
  );
}
