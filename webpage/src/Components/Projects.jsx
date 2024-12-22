import React, { useState } from "react";
import "../styles/projects.css";
import craterstatsIcon from "../images/Craterstats-Icon.ico";
import savorlyLogo from "../images/savorly-logo.png";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Craterstats GUI",
      desc: `Cratestats GUI is my Senior Capstone project. This was a year long
            project from the beginning of our spring semester to the end of our
            fall semester. I worked with 4 other classmates to create a
            Graphical User Interface (GUI) a currently Command Line Interface
            (CLI) program. This project was sponsored by the USGS and was for
            their  CraterstatsIII application. In our team I was the
            Architect and helped create the program architecture and design as
            well as key components for integrating the GUI with the CLI.`,
      img: craterstatsIcon,
      alt: `Craterstats GUI Logo`,
      linksTitles: ["Github", "NAU Capstone Page"],
      links: [
        "https://github.com/LWATLINGTON02/CraterStats-Capstone",
        "https://ceias.nau.edu/capstone/projects/CS/2024/LunarPitPatrol_S24/",
      ],
    },
    {
      title: "Savorly",
      desc: `Savorly was a final project for my CS312 Web Development II class. I
            worked with fellow classmate Evan Palmisano to create a website
            using the P/E/R/N Stack (PostgresSQL, ExpressJS, React, NodeJS). We
            created a recipe sharing platfrom that allows users to find, create,
            and save cooking recipes to save for later or help share their own
            creations. The frontend was created using React and the backend was
            created using ExpressJS`,
      img: savorlyLogo,
      alt: `Savorly Logo`,
      linksTitles: ["Github", "Deployed Site (No Database attached)"],
      links: ['https://github.com/CadenTed/CS_312_Project_Group_13_Recipe_Sharing_Platform', 'https://calm-sand-0b48c911e.4.azurestaticapps.net'],
    },
    {
      title: "CarGame",
      desc: `CarGame is a game/final project hat was created by fellow classmates
            and I during our CS413 Virtual Worlds class. This class was focused
            on Unity game developement. Our game is a arcade style zombie killer
            game where the player controls a truck and tries to last 5 minutes
            in an arena killing zombies. There are also power ups that help and
            inhibit the player.
            
            After this class I worked with graduate student Siddharth
            Subramanian to create different versions of this game. These
            versions included: Multiplayer, ECS and ECS Multiplayer. ECS is
            Unity's Entity Component System with they Data Oriented Technology
            Stack (DOTS).`,
      img: ``,
      alt: `CarGame Menu`,
      linksTitles: ["Github", "Play Game", "ECS/Multiplayer Github"],
      links: [],
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <h3 className="title">Projects</h3>

      <div className="slideshow-container">
        {/* Left Arrow */}
        <button className="arrow left-arrow" onClick={prevSlide}>
          &#10094;
        </button>

        {/* Slides */}
        <div
          className="slides"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="mySlides">
              <h3>{slide.title}</h3>
              <p style={{ width: "80%", margin: "0 auto" }}>{slide.desc}</p>
              <img src={slide.img} alt={slide.alt} className="slide-image" />
              <div className="links">
                {slide.linksTitles.map((linkTitle, index) => (
                  <a
                    key={index}
                    href={slide.links[index]}
                    target="_blank"
                    rel="noreferrer"
                   >
                      <button className="btn">{linkTitle}</button>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="arrow right-arrow" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Projects;
