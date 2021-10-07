import React from "react";
import { Typography, Button } from "antd";
import { Link } from "react-router-dom";

import "./styles/Hero.scss";

const { Title, Text } = Typography;
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="container">
        <div className="hero-content">
          <h3 className="hero-sub-title" level={3}>
            A place for all movie producers
          </h3>
          <h1 className="hero-title" level={1}>
            Upload your movies for FREE, get PAID for every VIEW on the platform
          </h1>
          <p className="hero-txt">
            No marketers needed for your movie sales. Your viewers requires no
            mobile data to stream on our platform
          </p>
          <Button className="hero-btn">
            <Link to="/">UPLOAD MOVIES</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
