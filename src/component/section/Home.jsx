import React from "react";
import TypingAnimation from "./subsection/TypingAnimation";
import "./subsection/TypingAnimation.css";
import { data } from "./data/myprofile";

const Home = () => {
  const profileImgUri = data
  return (
    <div className="d-flex justify-content-center flex-column gap-5">
      <img
        height={200}
        className="rippleEffect"
        style={{ borderRadius: "10rem" }}
        src={profileImgUri}
        alt="My Profile Image"
      />
      <div className="special-font">SHUBH PATEL</div>
      <TypingAnimation
        data={[
          "I Gather Requirements",
          "I Design",
          "I Code",
          "I Test",
          "I Document",
          "I Learn",
          "I Innovate",
        ]}
      />
    </div>
  );
};

export default Home;
