import React from "react";
import Navigation from "../Navigation/Navigation";
import Credits from "./Credits";

import "./index.scss";

const Footer = () => {
  return (
    <div>
      <footer>
        <Navigation />
      </footer>
      <Credits />
    </div>
  );
};

export default Footer;
