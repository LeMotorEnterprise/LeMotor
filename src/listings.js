import React from "react";
import "./Listings.css";

function Listings() {
  return (
    <div className="listings-container">
      <h1 className="listings-title">Current Listings</h1>
      <div className="canva-embed">
        <iframe
          loading="lazy"
          className="canva-iframe"
          src="https://www.canva.com/design/DAGJKiHF-SY/lTwJ6bGp3YLvXUVVLZD_pg/view?embed"
          title="Car Listings"
          allowFullScreen
          allow="fullscreen"
        ></iframe>
      </div>
      <a
        href="https://www.canva.com/design/DAGJKiHF-SY/lTwJ6bGp3YLvXUVVLZD_pg/view?utm_content=DAGJKiHF-SY&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
    </div>
  );
}

export default Listings;