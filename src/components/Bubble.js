import React from "react";
import "./bubble.css";
const Bubble = ({ number, is_pivot, is_compare, is_active }) => {
  const [bubbleClass, setBubbleClass] = React.useState(() => {
    return ["bubble", (is_pivot && "pivot") || ""].join(" ");
  });

  const compareEffect = () => {
    setBubbleClass(
      [
        "bubble",
        (is_pivot && "pivot") || "",
        (is_active && is_compare && "compare") || "",
      ].join(" ")
    );
  };
  React.useEffect(compareEffect, [is_compare, is_active, is_pivot]);

  return <div className={bubbleClass}>{number}</div>;
};
export default Bubble;
