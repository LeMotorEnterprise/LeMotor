import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./navbar";
import DarkMode from "./darkmode";
import ContactForm from "./form";
import { ElfsightWidget } from "react-elfsight-widget";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div>
      <DarkMode />      
      <NavBar />
      <ContactForm />
      <ElfsightWidget widgetId="fb090037-404f-457b-853c-e2db2a2dbb9c" />
    </div>
  </>
);
