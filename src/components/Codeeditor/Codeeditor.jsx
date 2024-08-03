import React from "react";
import "./Codeeditor.css";
import Inputoutput from "./Input-Output/Inputoutput.jsx";

const Codeeditor = () => {
  return (
    <div className="codeeditor">
      <div className="main">
        <div className="toolbox"></div>
        <div className="code"></div>
      </div>
      <div className="user">
        <Inputoutput />
      </div>
    </div>
  );
};

export default Codeeditor;
