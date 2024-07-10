import React from "react";
import SpliceElement from "./splice";
import GridContainer from "./gridContainer";
import Listings from "./listings";
import Contactparent from "./contactParent";
import Socials from "./socials";
import AboutSection from "./about";

function Homepage() {
  return (
    <div>
      <SpliceElement />
      <AboutSection />
      <GridContainer />
      <Listings />
      <Contactparent />
      <Socials />
    </div>
  );
}

export default Homepage;
