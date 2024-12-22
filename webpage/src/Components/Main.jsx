import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import image from "../images/Previews-15.jpg";
import "../styles/main.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

function Main() {
  return (
    <main>
      <div className="header">
        <div className="titles">
          <h1 className="title">Caden Tedeschi</h1>
          <h4 className="subtitle">Software Engineer</h4>
        </div>
        <img
          src={image}
          alt="Caden Tedeschi"
          height="500px"
          width="auto"
          className="portrait"
        />
      </div>
      <AboutMe />
      {/* TODO - ADD SKILLS SECTION */}
      <Projects />
      <Contact />
      {/* TODO - ADD Smaller Projects */}
    </main>
  );
}

export default Main;
