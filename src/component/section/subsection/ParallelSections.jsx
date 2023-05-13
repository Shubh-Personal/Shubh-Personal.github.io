import React, { useEffect } from "react";
import { useRef } from "react";
import "./ParallelSections.css";

const ParallelSections = ({ LeftEle, RightEle }) => {
  const right = useRef(null);
  const sliderChanged = (value) => {
    right.current.style.width = `${100 - value}%`;
  };

  return (
    <>
      <div className="container-project">
        <div className="card">
          <LeftEle className="leftEle ele"></LeftEle>
        </div>
        <input
          type="range"
          className="slider"
          defaultValue={70}
          onChange={(e) => {
            right.current.style.borderColor = "#0075ff";
            sliderChanged(e.target.value);
          }}
          onMouseUp={(e) => {
            right.current.style.borderColor = "white";
          }}
        />
        <div ref={right} className="sliderdiv">
          <div className="card">
            <RightEle className="rightEle ele"></RightEle>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParallelSections;
