import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Codeeditor from "./components/Codeeditor/Codeeditor";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Codeeditor />
    </div>
  );
};

export default App;
