import React from "react";
import "./quote.css";
import quoteImage from "./Assets/Quote.png";
function Quote() {
  return (
    <>
      {" "}
      <link rel="preload" as="image" href={quoteImage} />{" "}
      <div className="quote-container">
        {" "}
        <img src={quoteImage} className="quote-image" alt="quote" />{" "}
      </div>{" "}
    </>
  );
}
export default Quote;
