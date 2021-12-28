import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

// import FaCartArrowDown from "@fortawesome/fontawesome-common-types";

function Navbar() {
  return (
    <div className="header">
      <div className="app-header">
        <div className="contact-details">
          <h1 className="contact-number">Call Us: +123986-67777</h1>
          <h1 className="contact-number2">Email:toystore@template.com</h1>

          <div style={{ marginLeft: "25%", marginTop: 15 }}>
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

        <div className="navbar">
          <div className="navbarLeft">
            <h1 className="content" style={{ fontSize: "24px" }}>
              ToyStore
            </h1>
            <h1 className="content">Catalog</h1>
            <h1 className="content">Delivery</h1>
            <h1 className="content">About</h1>
            <h1 className="content">Contacts</h1>
          </div>

          <div className="rightDiv">
            <h1 className="right-content1">
              Cart
              {/* <FontAwesomeIcon
                icon={FaCartArrowDown}
                size="1x"
                style={{ marginLeft: 20, marginRight: 20, color: "white" }}
              /> */}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
