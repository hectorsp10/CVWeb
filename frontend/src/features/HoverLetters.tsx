import "../styles/features/HoverLetters.css"
import React from "react";

interface HoverLettersText {
  text: string;
}

const HoverLetters: React.FC<HoverLettersText> = ({ text }) => {
  return (
    <h1 className="hover-text">
      {
      text.split("").map((char, i) => 
        char === " " ? 
        (
            <span key={i} style={{ display: "inline-block", width: "0.2em" }}>
            </span>
        ) :
        (        
            <span key={i} className="hover-letter">
            {char}
            </span>
        )
    )}
    </h1>
  );
};

export default HoverLetters;