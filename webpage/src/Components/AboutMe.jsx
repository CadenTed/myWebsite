import React from "react";
import "../styles/aboutme.css";

function AboutMe() {
  return (
    <div className="area">
      <h2>About Me</h2>
      <p className="bio">
        I am a <strong>Northern Arizona University</strong> Alumni with a{" "}
        <strong>Bachelor of Science in Computer Science</strong>, earning my
        degree on <strong>December 13, 2024</strong>, with a{" "}
        <strong>3.33 GPA</strong>. Originally from{" "}
        <strong>Phoenix, Arizona</strong>, I currently reside in{" "}
        <strong>Flagstaff, Arizona</strong>.<br />
        <br />
        With experience across multiple programming languages and development
        practices, I specialize in <strong>UI/UX Development</strong> using{" "}
        <strong>HTML/CSS/JavaScript</strong>, <strong>C#/C++</strong>,{" "}
        <strong>Python</strong>, and <strong>Java</strong>. These skills have
        been demonstrated through numerous projects, including my{" "}
        <strong>Senior Capstone Project</strong>. Collaborating with classmates
        and sponsored by the <strong>USGS</strong>, we developed a{" "}
        <strong>Graphical User Interface (GUI)</strong> in{" "}
        <strong>Python</strong> for their existing{" "}
        <strong>
          CLI application, <em>CraterstatsIII</em>
        </strong>
        .<br />
        <br />
        Outside of professional work, I enjoy <strong>reading 📚</strong>,{" "}
        <strong>working out 🏋️‍♂️</strong>, and{" "}
        <strong>playing video games 🎮</strong>. Additionally, I have a passion
        for <strong>game development</strong> and am currently developing a{" "}
        <strong>chess roguelike game</strong> with the goal of bringing it to
        market.
      </p>
    </div>
  );
}

export default AboutMe;
