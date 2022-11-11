import React, { useEffect, useState } from "react";
import "./TypingAnimation.css";
const TypingAnimation = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [strIndex, setStrIndex] = useState(0);
  const [displayString, setdisplayString] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setIndex(index + 1);
      if (strIndex === data.length) {
        setIndex(0);
        setStrIndex(0);
      }
      if (index === data[strIndex]?.length) {
        setIndex(0);
        setStrIndex(strIndex + 1);
      }
    }, 200);
    if (!data[strIndex]) {
      setdisplayString(data[0].substring(0, index + 1));
    } else {
      setdisplayString(data[strIndex].substring(0, index + 1));
    }
  }, [data, index, strIndex]);

  return (
    <div>
      <div className="special-font">{displayString}</div>
    </div>
  );
};

export default TypingAnimation;
