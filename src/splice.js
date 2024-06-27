import React from "react";

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

const h1Style = {
  marginTop: "3%",
  textAlign: "center",
};

function SpliceElement() {
  return (
    <div>
      <div style={containerWrapper}>
        <div style={splineContainer} className="splineContainer">
        <spline-viewer loading-anim-type="spinner-big-dark" url="https://prod.spline.design/8M4rPC5vFy0XKwT7/scene.splinecode"></spline-viewer>
        </div>
      </div>
    </div>
  );
}

export default SpliceElement;
