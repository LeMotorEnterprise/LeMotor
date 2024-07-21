import React from "react";
import "./Socials.css";
import storeImge from "./Assets/GoogleBusinessProfileImages.webp";
import { ElfsightWidget } from "react-elfsight-widget";
import GoogleReviews from "./reviewCarousell";

function Socials() {
  return (
    <div className="flex-container">
      <div className="widget-1">
        <GoogleReviews />
      </div>
      <div className="flex-container-1">
        <h1 className="about-us-title">About us</h1>
        <div className="about-us-content">
          <p className="about-us-text">
            <b>Le Motor Enterprise: </b> <br />
            <br />Your Trusted Partner in Car Sales, Rental, and Trade-in in
            Singapore<br />
            Le Motor Enterprise, located in the vibrant heart of Roxy Square 1,
            is a premier car company dedicated to providing exceptional
            automotive services in Singapore.<br />
            We specialize in car sales, car rental, and car trade-ins, ensuring
            our clients receive the best deals and services tailored to their
            needs.
          </p>
          <img className="photo-style" src={storeImge} loading="lazy" alt="store" />
        </div>
        <ElfsightWidget
          className="widget-1"
          widgetId="552ef7cf-eed5-4527-a527-bcf8dc895861"
        />
      </div>
    </div>
  );
}

export default Socials;