import React from "react";
import { ElfsightWidget } from "react-elfsight-widget";

const leasing = {
  marginTop: "10%",
};

const margin = {
  marginTop: "10%",
};
function Leasing() {
  return (
    <div style={leasing}>
      <h1 style={{ textAlign: "center" }}>Cars available for leasing</h1>
      <ElfsightWidget widgetId="f2cc1167-2690-465e-b805-5334f7e6eeca" />
      <div style={margin}></div>
      <ElfsightWidget widgetId="c2f3b41c-b29c-4e79-9ac0-5e607aa25603" />
    </div>
  );
}

export default Leasing;
