import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import topbanner from "./Assets/topBanner.png";
import Homepage from "./homepage"; // Import the Homepage component
import Listings from "./listings"; // Import the Listings component
import Carmart from "./carmart"; // Import the Carmart component
import ParentContact from "./contactParent";

const ChatWithJasonBot = () => <div>Chat with JasonBot Page</div>;

const bodyStyle = {
  padding: "none",
  margin: "none",
  width: "100%",
};

const NavBar = () => {
  const navBarStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#051D40",
    padding: "1% 0",
    width: "100%",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  };

  const logoStyle = {
    width: "30%",
  };

  return (
    <Router basename="/LeMotor">
      <div style={bodyStyle}>
        <div
          style={{
            backgroundColor: "#fff",
            textAlign: "center",
            padding: "20px 0",
          }}
        >
          <img
            src={topbanner}
            alt="Logo"
            style={logoStyle}
            className="topbanner"
          />
        </div>
        <div style={navBarStyle}>
          <Link to="/" style={linkStyle} className="navlinks">
            Home
          </Link>
          <a href="https://chatgpt.com/g/g-RitYiGDNl-le-motor-enterprise" style={linkStyle} className="navlinks">
            Chat with our AI bot
          </a>
          <Link to="/listings" style={linkStyle} className="navlinks">
            Listings
          </Link>
          <Link to="/contact" style={linkStyle} className="navlinks">
            Contact
          </Link>
        </div>
        <Carmart /> {/* Add Carmart component here */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chat-with-jasonbot" element={<ChatWithJasonBot />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/contact" element={<ParentContact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NavBar;
