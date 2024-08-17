import React, { useEffect } from "react";
import "./Rainfall.css";

const Rainfall = () => {
  useEffect(() => {
    const createRain = () => {
      const rainContainer = document.querySelector(".rain-container");
      for (let i = 0; i < 100; i++) {
        // Adjust number of raindrops here
        const raindrop = document.createElement("div");
        raindrop.className = "raindrop";
        raindrop.style.left = `${Math.random() * 100}vw`; // Position across the width
        raindrop.style.animationDuration = `${0.5 + Math.random() * 1.5}s`; // Randomize speed
        raindrop.style.animationDelay = `${Math.random() * 2}s`; // Randomize delay
        rainContainer.appendChild(raindrop);
      }
    };

    createRain();
  }, []);

  return <div className="rain-container"></div>;
};

export default Rainfall;
