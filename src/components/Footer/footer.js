import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

function footer() {
  return (
    <div className="head">
      <div className="footerhead">
        <h2 className="toyHeading">ToyStore</h2>

        <div className="navbarLft">
          <h1 className="content1">Home</h1>
          <h1 className="content1">Catalog</h1>
          <h1 className="content1">Delivery</h1>
          <h1 className="content1">About</h1>
          <h1 className="content1">Contacts</h1>
        </div>

        <div style={{ marginLeft: "25%", marginTop: "1%" }}>
          <FontAwesomeIcon icon={faFacebookSquare} size="1x" color="white" />
          <FontAwesomeIcon
            icon={faTwitter}
            size="1x"
            style={{ marginLeft: 20, marginRight: 20, color: "white" }}
          />
          <FontAwesomeIcon icon={faInstagram} size="1x" color="white" />
          <FontAwesomeIcon
            icon={faYoutube}
            size="1x"
            style={{ marginLeft: 20, marginRight: 20, color: "white" }}
          />
          <FontAwesomeIcon icon={faPinterest} size="1x" color="white" />
        </div>
      </div>

      <div className="border"></div>

      <div className="row">
        <h4 className="hed1">
          Create with love by
          <span style={{ textDecoration: "underline" }}> Elastic Themes</span>
        </h4>
        <h4 className="end">
          Powered By
          <span style={{ textDecoration: "underline" }}>WebFlow </span>
          <span style={{ width: "15%", height: "15%", marginLeft: "10px" }}>
            .
          </span>
        </h4>
        <h4 className="end1">
          style Guide
          <span style={{ width: "15%", height: "15%", marginLeft: "10px" }}>
            .
          </span>
        </h4>
        <h4 className="end1">Licensing</h4>
      </div>
    </div>
  );
}

export default footer;
