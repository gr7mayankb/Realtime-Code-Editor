import React from "react";
import "./input-output.css";

const inputoutput = () => {
  return (
    <div className="inp-out">
      <div className="input">
        <div className="inner-input">Input</div>
        <div className="input-text"></div>
      </div>
      <div className="output">
        <div className="inner-output">Output</div>
        <div className="output-text"></div>
      </div>
    </div>
  );
};

export default inputoutput;
