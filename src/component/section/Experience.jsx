import React from "react";
import { useRef } from "react";
import "./css/experience.css";

const Experience = () => {
  const firstSlider = useRef(null);
  const secondSlider = useRef(null);
  const sliderChanged = (e) => {
    let scrolled = Number(e.target.value);
    secondSlider.current.style.width = `${100 - scrolled}%`;
    // firstSlider.current.style.width = `${scrolled}%`;

    // if (scrolled > 50) {
    //   firstSlider.current.style.zIndex = 20;
    //   secondSlider.current.style.zIndex = 10;
    // } else {
    //   firstSlider.current.style.zIndex = 10;
    //   secondSlider.current.style.zIndex = 20;
    // }
  };

  return (
    <>
      <h1>Industrial Experience</h1>

      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <div ref={firstSlider} className="card">
          <div className="cardtitle">Tata Consultancy Services</div>
          <div className="cardsubtitle">Gandhinagar, India</div>
          <div className="cardsubsubtitle ">OCT-2020 to DEC-2021</div>
          <div className="card-section">
            <div className="card-section-title">Tasks</div>
            <ul className="card-section-list">
              <li>
                Worked as a Full-Stack developer and developed frontend with
                AngularJS and backed with Springboot framework and used MySQL
                and Postgres databases
              </li>
              <li>
                Determined the requirements and implemented UI prototype and
                design documents to into code and developed a web application
                with logging capabilities, which follows the coding standards
              </li>
              <li>
                Prepared final documentations to grasp the database design and
                API input and output to other developers and client
              </li>
            </ul>
          </div>
          <div className="card-section">
            <div className="card-section-title">Technologies</div>
            <ul className="card-section-list-row">
              <li>JAVA</li>
              <li>Springboot</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>AngularJS</li>
            </ul>
          </div>
          <div className="card-section">
            <div className="card-section-title">Tools</div>
            <ul className="card-section-list-row">
              <li>VScode</li>
              <li>Eclipse</li>
              <li>SQuirreL SQL Client</li>
              <li>Postman</li>
              <li></li>
            </ul>
          </div>
        </div>

        <div ref={secondSlider} className="card">
          <div className="cardtitle">Conestoga College (CARI)</div>
          <div className="cardsubtitle">Cambridge, Canada</div>
          <div className="cardsubsubtitle ">May-2022 to Current</div>
          <div className="card-section">
            <div className="card-section-title">Tasks</div>
            <ul className="card-section-list">
              <li>
                Built a web application for interactivity multi-user video room
                and live e-sign of legal documents
              </li>
              <li>
                Along with that, used WebSocket, WebRTC for peer-to-peer
                connectivity
              </li>
              <li>
                Communicated with stakeholders, gathered requirements, and
                developed documentation
              </li>
              <li>
                Researched, proposed, and implemented better solutions for
                application
              </li>
              <li>
                Performed key role in peer code review, testing, bug fixing and
                final documentation
              </li>
            </ul>
          </div>
          <div className="card-section">
            <div className="card-section-title">Technologies</div>
            <ul className="card-section-list-row">
              <li>AngularJS</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>SocketJS</li>
              <li>WebRTC</li>
              <li>PeerJS</li>
            </ul>
          </div>
          <div className="card-section">
            <div className="card-section-title">Tools</div>
            <ul className="card-section-list-row">
              <li>VScode</li>
              <li>Mongodb Atlas</li>
              <li>Thunder Client</li>
              <li>Postman</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
