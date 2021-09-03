import React from "react";
import "./frame.css";

import Bubble from "./Bubble";
import useInterval from "../utils";

const Frame = ({ list, is_active, pivot_bubble, done }) => {
  const [frameClass, setFrameClass] = React.useState("frame");
  const [currentBubble, setCurrentBubble] = React.useState(
    (is_active && pivot_bubble + 2) || -1
  );

  //   useInterval(() => {
  //     if (is_active) {
  //       setCurrentBubble(currentBubble + 1);
  //     } else {
  //       setCurrentBubble(pivot_bubble + 1);
  //     }
  //   }, [(is_active && 200) || null]);

  const activeEffect = () => {
    setFrameClass(["frame", (is_active && "active") || ""].join(" "));
    setCurrentBubble((is_active && pivot_bubble + 1) || -1);
  };
  React.useEffect(activeEffect, [is_active]);
  if (!is_active) return null;

  return (
    <div className={frameClass}>
      {list.map((number, index) => (
        <Bubble
          number={number}
          is_active={is_active}
          is_pivot={index === pivot_bubble}
          is_compare={index === currentBubble}
          done={done}
        />
      ))}
    </div>
  );
};
export default Frame;
