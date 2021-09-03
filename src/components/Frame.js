import React from "react";
import "./frame.css";

import Bubble from "./Bubble";
import useInterval from "../utils";

const Frame = ({ list, is_active, pivot_bubble }) => {
  const [frameClass, setFrameClass] = React.useState("frame");
  const [currentBubble, setCurrentBubble] = React.useState(pivot_bubble + 1);
  const [play, setPlay] = React.useState(false);

  useInterval(() => {
    if (is_active) {
      setCurrentBubble(currentBubble + 1);
    } else {
      setCurrentBubble(pivot_bubble + 1);
    }
  }, [(is_active && 200) || null]);

  const activeEffect = () => {
    setFrameClass(["frame", (is_active && "active") || ""].join(" "));
  };
  React.useEffect(activeEffect, [is_active]);

  return (
    <div className={frameClass}>
      {list.map((number, index) => (
        <Bubble
          number={number}
          is_active={is_active}
          is_pivot={index === pivot_bubble}
          is_compare={index === currentBubble}
        />
      ))}
    </div>
  );
};
export default Frame;