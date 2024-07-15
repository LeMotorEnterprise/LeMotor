import React, { useState, useEffect } from "react";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  //set a state variable darkMode with a default state of false
  //The function setDarkMode updates the state of darkMode

  const buttonStyle = {
    position: "fixed",
    bottom: "90px",
    right: "30px",
    zIndex: "99",
    fontSize: "18px",
    outline: "none",
    backgroundColor: "#051d40",
    color: "white",
    cursor: "pointer",
    padding: "15px",
    borderRadius: "4px",
    border: "1px solid white",
  };

  useEffect(() => { //useEffect is a hook that runs after the first render and every time the component updates
    //-------------Background color of the body----------------//

    //If darkMode is true, set the background color of the body to #202833
    document.body.style.backgroundColor = darkMode ? "#202833" : "white";
    //If darkMode is true, set the color of the body to white, else set it to #202833
    document.body.style.color = darkMode ? "white" : "#202833";

    //-------------Styles of the h1 tags-----------------------//
    const h1Tags = document.querySelectorAll("h1");
    h1Tags.forEach((h1) => {
      h1.style.color = darkMode ? "white" : "#202833";
    });

    //-------------topBanner darkmode-----------------------//
    const topBannerContainer =
      document.getElementsByClassName("topbannerContainer")[0];
    if (topBannerContainer) {
      //ensure that the DOM element has loaded
      topBannerContainer.style.backgroundColor = darkMode ? "black" : "white";
    }

    const topBanner = document.getElementsByClassName("topbanner")[0];
    if (topBanner) {
      //ensure that the DOM element has loaded
      topBanner.style.filter = darkMode ? "invert(1)" : "invert(0)";
    }

    const carmartWrapper =
      document.getElementsByClassName("carmart-wrapper")[0];
    if (carmartWrapper) {
      //ensure that the DOM element has loaded
      carmartWrapper.style.color = "white"; // This is always white as per your comment
    }

    //-------------SPLINE3D ASSET-----------------------//
    const splineContainer =
      document.getElementsByClassName("splineContainer")[0];
    if (splineContainer) {
      //ensure that the DOM element has loaded
      splineContainer.style.display = darkMode ? "none" : "initial";
    }

    //Dark mode video replacement for the spline container
    const videoContainer = document.getElementsByClassName("videoContainer")[0];
    if (videoContainer) {
      //ensure that the DOM element has loaded
      videoContainer.style.display = darkMode ? "initial" : "none";
    }

    //-------------Google Maps----------------------------//
    // Only invert the color of google maps not street view
    const grid1Maps = document.getElementsByClassName("grid1maps")[0];
    if (grid1Maps) {
      //ensure that the DOM element has loaded
      grid1Maps.style.filter = darkMode ? "invert(1)" : "invert(0)";
    }

    //-------------Footer Styles-----------------------//
    const footerStyle = document.getElementsByClassName("footerStyle")[0];
    if (footerStyle) {
      //ensure that the DOM element has loaded
      footerStyle.style.filter = darkMode ? "invert(1)" : "invert(0)";
      footerStyle.style.paddingTop = darkMode ? "7%" : "0%";
    }

    //-------------Footer Styles-----------------------//
    const ModeButton = document.getElementsByClassName("ModeButton")[0];
    if (ModeButton) {
      //ensure that the DOM element has loaded
      ModeButton.style.backgroundColor = darkMode ? "white" : "#051d40";
      ModeButton.style.color = darkMode ? "#051d40" : "white";
    }

    //-------------A tags that need styling--------------//
    const socialsContainer = document.getElementsByClassName("socials-container")[0];
    if (socialsContainer) {
        socialsContainer.style.color = darkMode ? "white" : "black";
    }
  }, [darkMode]); // set the dependency to darkMode

  return (
    <div>
      <button
        style={buttonStyle}
        className="ModeButton"
        onClick={() => {
          //add event handler
          setDarkMode(!darkMode);
        }} //setDarkMode reverses the boolean state of darkMode
      >
        {/*If currently on darkMode, show the text "Light Mode else show the text "Dark mode"*/}
        {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
      </button>
    </div>
  );
}

export default DarkMode;
