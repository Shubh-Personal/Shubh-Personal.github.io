import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ name, url, description, imgUrl }) => {
  return (
    <>
      <div
        className="project-card"
        onClick={(e) => {
          window.open(url, "_blank");
        }}
      >
        <h1
          style={{
            background: "black",
            padding: "0.5rem",
            letterSpacing: ".3rem",
          }}
        >
          {name}
        </h1>
        <img src={imgUrl} />
        <p className="project-desc">
          <h3 style={{ marginBottom: ".3rem", textAlign: "center" }}>
            Description
          </h3>
          {description}
        </p>
      </div>
    </>
  );
};

export default ProjectCard;
