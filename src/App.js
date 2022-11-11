import { useEffect } from "react";
import "./App.css";
import Header from "./component/Header";
import Experience from "./component/section/Experience";
import Home from "./component/section/Home";

function App() {
  useEffect(() => {
    console.log(window.myCustomObj);
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
        Skills
      </div>
      <div className="mySection" id="projectsSection">
        Projects
      </div>
    </div>
  );
}

export default App;
