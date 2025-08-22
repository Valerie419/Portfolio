import React from "react";
import "./banner.css";
import BannerImg from "../../../assets/Snap.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <h1>
          Hi, I'm
          <br />
          Oguzie Valerie
        </h1>
        <p>I am a Software engineer, dedicated to creating amazing stuffs...</p>
        <div className="buttons">
          <button className="button ">Download CV</button>
          <button>Learn More</button>
        </div>
      </div>

      <div className="banner-img">
        <img src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
