import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Link, Routes, Navigate } from "react-router-dom";

//import local components
import topbanner from "./Assets/topBanner.webp";
import Homepage from "./homepage";
import Carmart from "./carmart";
import ParentContact from "./contactParent";
import ListingParent from "./ListingParent";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const bodyStyle = {
    padding: "none",
    margin: "none",
    width: "100%",
  };

  const navBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#051D40",
    padding: "1% 0",
    width: "100%",
    position: "relative",
    zIndex: 1001,
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px",
  };

  const logoStyle = {
    width: "30%",
  };

  const menuStyle = {
    display: isMenuOpen ? "block" : "none",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#051D40",
    textAlign: "center",
  };

  const hamburgerStyle = {
    display: isMobileView ? "block" : "none",
    fontSize: "30px",
    color: "#fff",
    cursor: "pointer",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const navLinksContainerStyle = {
    display: isMobileView ? "none" : "flex",
    justifyContent: "space-around",
    width: "100%",
  };

  const navLinksMobileStyle = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Router>
      <div style={bodyStyle}>
        <div
          style={{
            backgroundColor: "#fff",
            textAlign: "center",
            padding: "20px 0",
          }}
          className="topbannerContainer"
        >
          <img
            src={topbanner}
            alt="Logo"
            style={logoStyle}
            className="topbanner"
          />
        </div>
        <div style={navBarStyle} className="navbarStyle">
          <div style={hamburgerStyle} onClick={toggleMenu} className="hamburger">
            &#9776;
          </div>
          <div style={navLinksContainerStyle}>
            <Link to="/" style={linkStyle} className="navlinks">
              Home
            </Link>
            <a
              href="https://chatgpt.com/g/g-RitYiGDNl-le-motor-enterprise"
              style={linkStyle}
              className="navlinks"
            >
              Chat with our AI bot
            </a>
            <Link to="/ListingParent" style={linkStyle} className="navlinks">
              Listings
            </Link>
            <Link to="/contact" style={linkStyle} className="navlinks">
              Contact
            </Link>
          </div>
          {isMenuOpen && (
            <div style={{ ...menuStyle, ...navLinksMobileStyle }}>
              <Link
                to="/"
                style={linkStyle}
                className="navlinks"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <a
                href="https://chatgpt.com/g/g-RitYiGDNl-le-motor-enterprise"
                style={linkStyle}
                className="navlinks"
                onClick={toggleMenu}
              >
                Chat with our AI bot
              </a>
              <Link
                to="/ListingParent"
                style={linkStyle}
                className="navlinks"
                onClick={toggleMenu}
              >
                Listings
              </Link>
              <Link
                to="/contact"
                style={linkStyle}
                className="navlinks"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
        <Carmart />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ListingParent" element={<ListingParent />} />
          <Route path="/contact" element={<ParentContact />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NavBar;