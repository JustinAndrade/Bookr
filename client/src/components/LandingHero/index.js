import React from "react";
import { Jumbotron, Col } from "reactstrap";

import heroImg from "../../assets/heroImg.png";

import "./index.scss";

const LandingHero = () => {
  return (
    <Jumbotron className="bookr-hero">
      <Col>
        <h1 className="hero-header font-secondary font-weight-bolder text-left">
          Looking for your next book?
          <br />
          Look no further.
        </h1>
        <br />
      </Col>
      <img className="hero-img" src={heroImg} alt="person reading" />
    </Jumbotron>
  );
};

export default LandingHero;
