import React from "react";
import SplineElement from "./splineElement";
import darkModeVideo from "./Assets/darkModeCanvas.mp4";
const containerWrapper = {
  marginTop: "3%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

const splineContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

const videoContainer = {
  overflow: "hidden",
  width: "100%",
  display: "none"
}


const videoStyle = {
  overflow: "hidden",
  width: "100%",
}


function SpliceElement() {
  return (
    <div>
      <div style={containerWrapper}>
        <div style={splineContainer} className="splineContainer">
          <div className="darkmodeContainer">
          </div>
          <SplineElement />
        </div>
      </div>

      <div style={videoContainer} className="videoContainer">
        <video src={darkModeVideo} style={videoStyle} muted autoPlay playsInline loop />
      </div>
    </div>
  );
}

export default SpliceElement;
