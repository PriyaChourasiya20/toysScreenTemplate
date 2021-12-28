import React from "react";
import teddy from "../../assets/teddy.jpg";
import "./styles.css";

function Add() {
  return (
    <div
      style={{
        backgroundImage: `url(${teddy})`,
        backgroundSize: "cover",
        height: "60vh",
      }}
    >
      <div>
        <h4 className="hedng">About the shop</h4>
        <h1 className="heading1">Watch our story</h1>
        <h4 className="details">
          There is no magic formula to write perfect ad copy. it is based on
          number of factors,including ad placement, <br />
          demographic, even the comsumer's mood
        </h4>
      </div>
    </div>
  );
}

export default Add;
