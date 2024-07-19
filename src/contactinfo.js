import React from "react";
import "./contactinfo.css";
import reviewUs from "./Assets/reviewUs.webp";

function ContactInfo() {
  return (
    <div className="container-wrapper contact">
      <h1>Contact Information</h1>
      <div className="body-style contactBody">
        <div className="sub-content subcontent">
          <p className="p-style">Phone: 6440 5131</p>
          <p className="p-style">Email: richard@lemotor.com.sg</p>
          <p className="p-style">
            Richard Wong (Purchaser): <br />9769 2303
          </p>
          <p className="p-style">
            Alan Sim (Sales) <br />9821 1739
          </p>
        </div>

        <a href="https://g.page/r/CQJmRZAPZC1GEBM/review">
          <div className="sub-content-1 subcontent">
            <img src={reviewUs} className="review-img" alt="reviewUs" />
          </div>
        </a>
      </div>
      <h3 className="h3-style">Service Hours</h3>
      <p className="opening-time">
        Mon - Fri: 10am - 7pm <br /><br />
        Sat & Sun: 11am - 6pm
      </p>
    </div>
  );
}

export default ContactInfo;