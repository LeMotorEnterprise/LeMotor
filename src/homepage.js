import React from "react";
import SpliceElement from "./splice";
import GridContainer from "./gridContainer";
import Listings from "./listings";
import Contactparent from "./contactParent";

function Homepage() {
  return (
    <div>
      <SpliceElement />
      <GridContainer />
      <Listings />
      <Contactparent />
    </div>
  );
}

export default Homepage;
