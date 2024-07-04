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
