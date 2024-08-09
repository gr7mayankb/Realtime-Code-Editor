import React, { useState } from "react";
import "./Codeeditor.css";
import Inputoutput from "./Input-Output/Inputoutput.jsx";
// import { BsShare } from "react-icons/bs";
// import { AiOutlineClear } from "react-icons/ai";

const Codeeditor = () => {

  const [lang, setLang] = useState("");

  const languages = {
    "C++": ".cpp",
    Java: ".java",
    Javascript: '.js',
    Python: ".py",
    Typescript: ".ts"
  };

  const handleChange = (event) => {
    setLang(languages[event.target.value]);
  };

  return (
    <div className="codeeditor">

      <div className="main">

        <div className="toolbox">
          <div className="filename">
            <div className="language">
              main{lang}
            </div>
          </div>
          <div className="code-editor-nav">
            {/*  */}

            <div>
              <select id="language-select" value={lang} onChange={handleChange}>
                <option defaultValue="cpp">Choose Language</option>
                {Object.keys(languages).map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>
            </div>

            {/*  */}
            <button>Share</button>
            <button>Run</button>
            <button>Clear</button>
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
