import React from "react";
import "./App.css";
import Gantt from "./Gantt";
import dataLayout from "./data";
function App() {
  return (
    <>
      <Gantt tasks={dataLayout}></Gantt>
    </>
  );
}

export default App;
