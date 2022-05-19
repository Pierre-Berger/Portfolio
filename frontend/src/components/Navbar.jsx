import React from "react";
import logo from "../assets/windows-logo-icon-2_low.png";

function Navbar() {
  return (
    <div className="home-btn">
      <div className="img-container">
        <img src={logo} alt="logo" />
      </div>
      <p>Start</p>
    </div>
  );
}

export default Navbar;
