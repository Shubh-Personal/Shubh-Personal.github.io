import { useEffect } from "react";
import "./App.css";
import Header from "./component/Header";
import Contact from "./component/section/Contact";
import Experience from "./component/section/Experience";
import Home from "./component/section/Home";
import Project from "./component/section/Project";
import SkillSection from "./component/section/SkillSection";

function App() {
  useEffect(() => {
  }, [window.myCustomObj]);

  return (
    <div className="App bg-dark">
      <Header />
      <div
        className="mySection d-flex justify-content-center gap-2"
        id="homeSection"
      >
        <Home />
      </div>
      <div className="mySection" id="experienceSection">
        <Experience />
      </div>
      <div className="mySection" id="skillsSection">
        <SkillSection />
      </div>
      <div className="mySection" id="projectsSection">
        <Project />
      </div>
      <div className="mySection" id="contactSection">
        <Contact />
      </div>
    </div>
  );
}

export default App;
