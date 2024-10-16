import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "MERN Stack Developer",
          "Data Science Student",
          "Competitive Programmer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        typeSpeed:10
      }}
    />
  );
}

export default Type;

