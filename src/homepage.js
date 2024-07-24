import React from "react";
import SpliceElement from "./splice";
import GridContainer from "./gridContainer";
import Listings from "./listings";
import Contactparent from "./contactParent";
import AboutSection from "./about";
import Quote from "./quote";
import Leasing from "./Leasing";

function Homepage() {
  return (
    <div>
      <SpliceElement />
      <Quote />
      <AboutSection />
      <GridContainer />
      <Listings />
      <Leasing />
      <Contactparent />
    </div>
  );
}

export default Homepage;
