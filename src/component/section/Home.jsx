import React from "react";
import TypingAnimation from "./subsection/TypingAnimation";
import "./subsection/TypingAnimation.css";
const Home = () => {
  return (
    <div className="d-flex justify-content-center flex-column gap-5">
      <img
        height={200}
        className="rippleEffect"
        style={{ borderRadius: "10rem" }}
        src="https://media.licdn.com/dms/image/D5603AQFGnBqTZV5GZA/profile-displayphoto-shrink_800_800/0/1664452478290?e=1672876800&v=beta&t=tfFgM9Z-vB3pBvqxGnt_Ann8C0g4uIcyroyu2h8jFm0"
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
