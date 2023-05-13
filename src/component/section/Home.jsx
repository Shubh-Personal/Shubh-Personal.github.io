import React from "react";
import TypingAnimation from "./subsection/TypingAnimation";
import "./subsection/TypingAnimation.css";
import { data } from "./data/myprofile";

const Home = () => {
  const profileImgUri = data
  const resume = "./static/SHUBH_RESUME_2023.pdf"
  return (
    <div className="d-flex justify-content-center flex-column gap-5">
      <img
        height={200}
        className="rippleEffect"
        style={{ borderRadius: "10rem" }}
        src={profileImgUri}
        alt="My Profile Image"
      />
      <div className="special-font mobile-fontsz">SHUBH PATEL</div>
      <TypingAnimation
        data={[
          // "I Gather Requirements",
          "I Design",
          "I Code",
          "I Test",
          "I Document",
          "I Deploy",
          "I Learn",
          "I Innovate",
        ]}
      />
      <a className="btn btn-primary resume" href={resume} download="SHUBH_RESUME_2023.pdf"> Resume </a>

    </div>
  );
};

export default Home;
