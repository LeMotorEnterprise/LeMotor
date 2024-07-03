import React, { useState } from "react";
import storeImge from "./Assets/GoogleBusinessProfileImages.jpg";
import fbLogo from "./Assets/fblogo.png";

function Socials() {
  // Step 1: Initialize state
  const [showimage, setShowimage] = useState(false);

  console.log("useState");
  console.log(showimage);

  const flexContainer = {
    marginTop: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  };
  
  const flexContainer1 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const aStyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "200%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const buttonStyle = {
    marginTop: "5%",
    fontSize: "100%",
    padding: "1%",
    fontFamily: "Montserrat, sans-serif",
    backgroundColor: "#051d40",
    color: "white",
  };

  const btn = {
    marginTop: "3%",
    fontSize: "100%",
    padding: "1%",
    fontFamily: "Montserrat, sans-serif",
    backgroundColor: "#0866ff",
    color: "white",
    border: "none",
  };

  const photoStyle = {
    marginTop: "5%",
    display: showimage ? "initial" : "none",
    width: "100%",
  };

  const fbLogoStyle = {
    marginTop: "3%",
    width: "10%",
    height: "10%",
  };

  return (
    <div style={flexContainer}>
      <div style={flexContainer}>
        <a style={aStyle} href="https://www.facebook.com">
          Our facebook page
        <img src={fbLogo} style={fbLogoStyle} alt="fblogo" />
        </a>

        <button
          style={btn}
          onClick={() => {
            window.location.href =
              "https://www.facebook.com/profile.php?id=61561731779552";
          }}
        >
          Click this here to visit
        </button>
      </div>
      <button
        // Step 2: Add event handler
        style={buttonStyle}
        onClick={() => {
          setShowimage(showimage === false); //update state, set timeframe to true to make the state true
        }}
      >
        Click here to see our Store @ #01-89 Roxy Squaren
      </button>

      <div style={flexContainer1}>
        <img style={photoStyle} src={storeImge} alt="store" />
      </div>
    </div>
  );
}

export default Socials;
