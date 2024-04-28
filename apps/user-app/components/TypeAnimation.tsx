import React, { useState, useEffect } from "react";

const Typewriter = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        // Reset animation when it reaches the end of text
        setCurrentIndex(0);
        setDisplayText("");
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentIndex, text, speed]);

  return (
    <span className="text-xl md:text-3xl font-bold text-blue-500 transition-all duration-300">
      {displayText}
    </span>
  );
};

export default Typewriter;
