import React from "react";
import "./Skill.css";
const Skill = ({ rating, name }) => {
  return (
    <div className="skill-div">
      <h2>{name}</h2>
      <div className="containera">
        <div
          className={rating >= 1 ? "capsule one filled" : "capsule one"}
        ></div>
        <div
          className={rating >= 2 ? "capsule two filled" : "capsule two"}
        ></div>
        <div
          className={rating >= 3 ? "capsule three filled" : "capsule three"}
        ></div>
        <div
          className={rating >= 4 ? "capsule four filled" : "capsule four"}
        ></div>
        <div
          className={rating >= 5 ? "capsule five filled" : "capsule five"}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
