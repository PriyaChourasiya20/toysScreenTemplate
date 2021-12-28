import React from "react";
import "./styles.css";
import pic from "../../assets/pic.jpg";
import toy from "../../assets/toy.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faYoutube,
  FaTelegram,
} from "@fortawesome/free-brands-svg-icons";

function NewsLetter() {
  return (
    <div>
      <div className="content">
        <h4 className="heading">Made for webflow</h4>
        <h1 className="para">
          Simple and colourful Ecommerce
          <br /> Template for Your Business
        </h1>
      </div>

      <div className="hdr">
        <div className="detl">
          <h1 className="border">Available for FREE!</h1>

          <p className="longpara">
            A successful marketing plan relies heavily on the pulling-power of{" "}
            <br />
            advertising copy. Writing result-oriented ad copy is difficult,as it
            must
            <br />
            appeal to, entice, and convince consumers to take action. There is
            no <br /> magic formula to write perfect ad copy
          </p>
          <button className="bttn">GET IT NOW!</button>
        </div>

        <div className="img">
          <img src={pic} width="70%" height="100%" className="pic" />
        </div>
      </div>

      <div className="nwsltr">
        <div className="inner-cntnt">
          {/* <FontAwesomeIcon icon={cd} size="1x" color="green" /> */}

          <h1 className="had1">
            Subscribe to our NewsLetter
            <br />& get
            <span style={{ color: "greenyellow" }}> 10% Discount!</span>
          </h1>

          <input
            className="inputField"
            type="text"
            FaTelegram
            placeholder="Enter your email address"
          />

          <button className="bttn1">Subscribe</button>
        </div>
      </div>

      <div className="lastContent">
        <div className="content">
          <h4 className="header">@ElasticThemes</h4>
          <h1 className="hed11"> We're on Instagram!</h1>
        </div>

        <div className="toys">
          <div className="detail1">
            <img src={toy} alt="toy" width="100%" height="100%"></img>
          </div>

          <div className="detail1">
            <img src={toy} alt="toy" width="100%" height="100%"></img>
          </div>

          <div className="detail1">
            <img src={toy} alt="toy" width="100%" height="100%"></img>
          </div>

          <div className="detail1">
            <img src={toy} alt="toy" width="100%" height="100%"></img>
          </div>

          <div className="detail1">
            <img src={toy} alt="toy" width="100%" height="100%"></img>
          </div>
        </div>

        <button className="button"> see More Photos </button>
      </div>
    </div>
  );
}

export default NewsLetter;
