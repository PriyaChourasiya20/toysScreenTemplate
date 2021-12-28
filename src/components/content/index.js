import React from "react";
import "./styled.css";
import Wooden from "./wooden.js";
import toy from "../../assets/toy.jpeg";

function index() {
  return (
    <div className="headdiv">
      <div className="uparDiv">
        <div className="card">
          <div>
            <h1 className="headingg">Stuffed Animals</h1>
            <button className="btn">Shop Now</button>
          </div>
        </div>

        <div className="card1">
          <div>
            <h1 className="headingg">Wooden Toys </h1>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </div>

      <div className="animals">
        <h1 className="head1">Stuffed Animals</h1>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <hr style={{ border: "1px solid #a1e312", width: "10%" }} />
          <hr style={{ width: "90%" }} />
        </div>

        <div className="uparDiv">
          <div className="detail">
            <img src={toy} alt="teddy" width="100" height="100"></img>
            <h1 className="title">Mega Plus Toy </h1>
            <button className="btn1">$30.00USD</button>
          </div>

          <div className="detail">
            <img src={toy} alt="teddy" width="100" height="100"></img>
            <h1 className="title"> Teddy Bear </h1>
            <button className="btn1">$ 40.00 USD</button>
          </div>

          <div className="detail">
            <img src={toy} alt="teddy" width="100" height="100"></img>
            <h1 className="title"> cute dog</h1>
            <button className="btn1">$ 40.00 USD</button>
          </div>

          <div className="detail">
            <img src={toy} alt="teddy" width="100" height="100"></img>
            <h1 className="title">Little Friend</h1>
            <button className="btn1">$ 40.00 USD</button>
          </div>
        </div>
      </div>
      <Wooden />
    </div>
  );
}

export default index;
