import React from "react";
import './splice.css';
import SplineElement from "./splineElement";
import darkModeVideo from "./Assets/darkModeCanvas.mp4";

function SpliceElement() {
  return (
    <div>
      <div className="container-wrapper">
        <div className="spline-container splineContainer">
          <div className="darkmodeContainer">
          </div>
          <SplineElement />
        </div>
      </div>

      <div className="video-container videoContainer">
        <video 
          src={darkModeVideo} 
          className="video-style" 
          muted 
          autoPlay 
          playsInline 
          loop 
        />
      </div>
    </div>
  );
}

export default SpliceElement;