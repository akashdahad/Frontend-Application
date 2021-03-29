import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/product">
            <li> Product </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
