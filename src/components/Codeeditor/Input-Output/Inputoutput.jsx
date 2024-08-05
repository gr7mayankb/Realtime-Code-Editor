import React from "react";
import "./input-output.css";

const inputoutput = () => {
  return (
    <div className="inp-out">
      <div className="input">
        <div className="inner-input">
          <h4 className="stroke-double" title="Input">
            Input
          </h4>
          <div>
            {/* <textarea name="" id=""></textarea> */}
          </div>
        </div>
        <div className="input-text"></div>
      </div>
      <div className="output">
        <div className="inner-output">
          <h4 className="stroke-double" title="Output">
            Output
          </h4>
          <div></div>
        </div>
        <div className="output-text"></div>
      </div>
    </div>
  );
};

export default inputoutput;
