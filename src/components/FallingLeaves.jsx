import React, { useEffect } from "react";

const FallingLeaves = () => {
  useEffect(() => {
    // Dynamically create leaf elements on mount
    const numberOfLeaves = 20; // Change this to increase or decrease the number of leaves
    const container = document.getElementById("leaf-container");

    for (let i = 0; i < numberOfLeaves; i++) {
      const leaf = document.createElement("div");
      leaf.className = "leaf";
      leaf.style.setProperty("--x", Math.random()); // Randomize horizontal position
      leaf.style.animationDuration = `${3 + Math.random() * 5}s`; // Randomize speed
      leaf.style.animationDelay = `${Math.random() * 5}s`; // Randomize start time
      container.appendChild(leaf);
    }
  }, []);

  return <div id="leaf-container" className="leaf-container"></div>;
};

export default FallingLeaves;
