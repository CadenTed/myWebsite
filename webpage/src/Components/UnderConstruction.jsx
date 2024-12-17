import React, { useState, useEffect } from "react";
import "./styles/UnderConstruction.css";

const App = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function getTimeRemaining() {
    const targetDate = new Date("2025-01-01T00:00:00");
    const now = new Date();
    const difference = targetDate - now;
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className="construction-page">
      <h1>🚧 Website Under Construction 🚧</h1>
      <p>We’re working hard to bring you a better experience!</p>
      <div className="countdown">
        <h2>Coming Soon</h2>
        <div className="time">
          <div>
            <span>{timeLeft.days}</span> Days
          </div>
          <div>
            <span>{timeLeft.hours}</span> Hours
          </div>
          <div>
            <span>{timeLeft.minutes}</span> Minutes
          </div>
          <div>
            <span>{timeLeft.seconds}</span> Seconds
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;