import React from "react";
import "./product.scss";

export default function Product() {
  return (
    <div className="mainContent">
      <div className="col1">
        <div className="productImage"></div>
        <div className="despBox"></div>
      </div>
      <div className="col2">
        <div className="userInfo"></div>
        <div className="map"></div>
      </div>
    </div>
  );
}
