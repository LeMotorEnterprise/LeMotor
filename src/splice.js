import React from "react";

const SplineAsset = () => {
  return (
    <div className="flexWrapper">
      <spline-viewer
        url="https://prod.spline.design/zRJmDU7f1JhL-bg8/scene.splinecode"
        hint
        loading-anim-type="spinner-big-dark"
      ></spline-viewer>
    </div>
  );
};

export default SplineAsset;