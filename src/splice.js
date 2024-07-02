import React from "react";
import SplineElement from "./splineElement";
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
        <SplineElement/>
        </div>
      </div>
    </div>
  );
}

export default SpliceElement;
