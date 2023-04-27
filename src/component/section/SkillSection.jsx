import React from "react";
import Skill from "./subsection/Skill";
import "./css/skillSection.css";
const SkillSection = () => {
  return (
    <>
      <h1>Skills</h1>
      <div className="skillContainer container">
        <div className="skillCol">
          <Skill rating={5} name="JAVA" />
          <Skill rating={4} name="Python" />
          <Skill rating={4} name="C++" />
          <Skill rating={5} name="HTML" />
          <Skill rating={5} name="Git/Github" />
        </div>
        <div className="skillCol">
          <Skill rating={5} name="SpringBoot" />
          <Skill rating={5} name="ReactJS" />
          <Skill rating={4} name="AngularJs" />
          <Skill rating={5} name="Javascript" />
          <Skill rating={5} name="Jenkins" />

        </div>
      </div>
    </>
  );
};

export default SkillSection;
