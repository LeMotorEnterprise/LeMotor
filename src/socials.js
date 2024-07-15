import React, { useState } from "react";
import storeImge from "./Assets/GoogleBusinessProfileImages.webp";
import { ElfsightWidget } from "react-elfsight-widget";
import GoogleReviews from "./reviewCarousell";

function Socials() {
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
    width: "100%",
  };

  const photoStyle = {
    marginTop: "5%",
    width: "100%",
  };

  const widget1 = {
    width: "100%",
    marginTop: "10%",
  };

  return (
    <div style={flexContainer}>
      <div style={widget1}>
        <GoogleReviews />
      </div>{" "}
      <div style={flexContainer1}>
          <h1 style={{ textAlign: "center" }}>About us</h1>
          <div style={{border: "1px solid lightgray", padding: "5%", paddingTop: "0", borderRadius: "20px"}}>
          <p style={{ textAlign: "center" }}>
            <b>Le Motor Enterprise: </b> <br></br>
            <br></br>Your Trusted Partner in Car Sales, Rental, and Trade-in in
            Singapore<br></br>
            Le Motor Enterprise, located in the vibrant heart of Roxy Square 1,
            is a premier car company dedicated to providing exceptional
            automotive services in Singapore.<br></br>
            We specialize in car sales, car rental, and car trade-ins, ensuring
            our clients receive the best deals and services tailored to their
            needs.<br></br>
            Our prime location at 50 E Coast Rd, Singapore 428769, makes us
            easily accessible for residents in Marine Parade, Siglap, and the
            surrounding areas.<br></br>
            Our extensive range of services caters to a diverse clientele, from
            those looking to purchase their dream car to individuals needing a
            reliable vehicle for short-term use.<br></br>
            At Le Motor Enterprise, we pride ourselves on our comprehensive car
            sales portfolio, showcasing a variety of makes and models to suit
            every preference and budget.<br></br>
            Whether you're seeking a luxurious sedan or a budget-friendly
            compact car, our experienced sales team, led by Alan Sim (9821 1739)
            and Richard Wong (9769 2303), is always ready to assist you in
            making an informed decision.<br></br>
            For those interested in car rental, Le Motor Enterprise offers
            flexible and affordable leasing options.<br></br>
            Our fleet is meticulously maintained to ensure every rental car is
            in top-notch condition, providing you with peace of mind on the
            road.
            <br></br>
            Whether you need a vehicle for a weekend getaway or a long-term
            lease, our car rental services are designed to meet your specific
            requirements.<br></br>
            Trade-in services at Le Motor Enterprise are hassle-free and
            transparent.<br></br>
            We offer competitive valuations for your existing vehicle, making
            the process of upgrading to a new car smooth and straightforward.
            <br></br>
            Our goal is to provide the best value for your trade-in, ensuring a
            seamless transition to your next vehicle.<br></br>
            Customer satisfaction is at the core of our business.<br></br>
            We invite you to explore our car listings on SGcarmart or visit our
            official website to discover the exceptional range of services we
            offer.<br></br>
            If you're happy with our service, we encourage you to leave a review
            and share your positive experience with others.<br></br>
            Le Motor Enterprise is more than just a car company; we are your
            trusted partner in all automotive needs.<br></br>
            Visit us today and experience the best in car sales, rental, and
            trade-in services in Singapore.
          </p>
          <img style={photoStyle} src={storeImge} loading="lazy" alt="store" />
        </div>
        <ElfsightWidget
            style={widget1}
            widgetId="977f6169-8a58-40e9-8ba0-6b4e50d534d9"
          />
      </div>
    </div>
  );
}

export default Socials;
