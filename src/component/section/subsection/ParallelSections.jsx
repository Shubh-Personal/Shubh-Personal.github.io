import React, { useEffect } from "react";
import { useRef } from "react";
import "./ParallelSections.css";

const ParallelSections = ({ LeftEle, RightEle }) => {
  const right = useRef(null);
  const sliderChanged = (value) => {
    right.current.style.width = `${100 - value}%`;
  };
  useEffect(() => {}, []);

  return (
    <>
      <div className="container">
        <div className="card">
          <LeftEle className="leftEle ele"></LeftEle>
        </div>
        <input
          type="range"
          className="slider"
          onChange={(e) => sliderChanged(e.target.value)}
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
