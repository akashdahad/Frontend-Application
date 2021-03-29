import React from "react";
import "./navbar.scss";
import logo from "../logo.svg";

export default function Navbar() {
  return (
    <div className="header">
      <img className="logoImage" src={logo} alt="logo" />
    </div>
  );
}
