import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";

export default function Comments() {
  const [comments, setComments] = useState([
    { bgColor: "#F2F5F1", textColor: "black", img: person2 },
    { bgColor: "#FFF6E3", textColor: "black", img: person3 },
    { bgColor: "#7661E2", textColor: "white", img: person4 },
    { bgColor: "#F1ECFE", textColor: "black", img: person4 },
    { bgColor: "#7661E4", textColor: "white", img: person4 },
  ]);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    // console.log(e.target.innerHTML);
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    // console.log(e.target.innerHTML);
  };
  const drop = (e) => {
    const copyCommentsItems = [...comments];
    const dragItemContent = copyCommentsItems[dragItem.current];
    copyCommentsItems.splice(dragItem.current, 1);
    copyCommentsItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setComments(copyCommentsItems);
  };

  return (
    <>
      <main className="flex flex-col gap-5 overflow-auto">
        {comments.map((comment, index) => (
          <CommentTemp
            key={index}
            bgColor={comment.bgColor}
            textColor={comment.textColor}
            img={comment.img}
            index={index}
            dragStart={dragStart}
            dragEnter={dragEnter}
            drop={drop}
            text={"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي"}
          />
        ))}
      </main>
    </>
  );
}
// ======================================================================
function CommentTemp({
  text,
  date,
  img,
  bgColor,
  textColor,
  index,
  dragStart,
  dragEnter,
  drop,
}) {
  return (
    <main
      className={`flex flex-col gap-5 rounded-xl p-5 `}
      style={{ backgroundColor: bgColor, color: textColor }}
      draggable
      onDragStart={(e) => dragStart(e, index)}
      onDragEnter={(e) => dragEnter(e, index)}
      onDragEnd={drop}
    >
      <p className="text-right font-semibold">{text}</p>
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
  );
}
