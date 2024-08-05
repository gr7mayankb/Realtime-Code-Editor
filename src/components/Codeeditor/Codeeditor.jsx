import React from "react";
import "./Codeeditor.css";
import Inputoutput from "./Input-Output/Inputoutput.jsx";
// import { BsShare } from "react-icons/bs";
// import { AiOutlineClear } from "react-icons/ai";

const Codeeditor = () => {
  return (
    <div className="codeeditor">
      <div className="main">
        <div className="toolbox">
          <div className="filename">
            main.lang
          </div>
          <div className="toolbox-btns">
            <button className="toolbox-btn">
              Share
            </button>
            <button className="toolbox-btn">
              Clear
            </button>
            <button className="toolbox-btn">Run</button>
          </div>
        </div>
        <div className="code"></div>
      </div>
      <div className="user">
        <Inputoutput />
      </div>
    </div>
  );
};

export default Codeeditor;
