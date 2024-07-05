import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./navbar";
import DarkMode from "./darkmode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div>
      <DarkMode />      
      <NavBar />
    </div>
  </>
);
