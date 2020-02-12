import React from "react";
import LandingHero from "../../components/LandingHero";
import BookCarousel from "../../components/BookCarousel";
import CollectionItemContainer from "../../components/BookCollection/CollectionContainer";

import "./index.scss";

const HomePage = () => (
  <div>
    <LandingHero />
    <div className="container-h2">
      <h2>Featured Books</h2>
    </div>
    <BookCarousel />
    <div className="container-h2">
      <h2>Browse Collection</h2>
    </div>
    <CollectionItemContainer />
  </div>
);

export default HomePage;
