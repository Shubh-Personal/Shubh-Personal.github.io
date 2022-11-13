import React, { useEffect, useState } from "react";

function Header() {
  return (
    <div className="d-flex header">
      {/* <h2 className="title">SHUBH PATEL</h2> */}
      <ul className="link-list d-flex justify-content-center align-items-center ">
        <NavLink>Home</NavLink>
        <NavLink>Experience</NavLink>
        <NavLink>Skills</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Contact</NavLink>
        <a
          href="http://www.linkedin.com/in/shubhpatel479"
          target={"_new"}
          className="special-link"
        >
          LinkedIn
        </a>
      </ul>
    </div>
  );
}

function NavLink({ children }) {
  const [activeElement, setactiveElement] = useState(["home", "home"]);

  const moveScrollTo = (ele) => {
    let eleId = ele.toString().toLowerCase();
    let toFindEle = document.getElementById(`${eleId}Section`);
    toFindEle.classList.add("active");
    window.scrollTo({
      top: toFindEle.offsetTop - window.visualViewport.height / 10,
      behavior: "smooth",
    });
    window.myCustomObj = eleId;
  };

  return (
    <li
      id={children}
      className="link"
      onClick={(e) => {
        moveScrollTo(children);
      }}
    >
      {children}
    </li>
  );
}

export default Header;
