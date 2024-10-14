import React from "react";
import "./style.scss";
import Carousel from "../../components/Carousel";
import NavSlider from "../../components/NavSlider";
import AboutUs from "./AboutUs";
import AdoptSlider from "../../components/AdoptSlider";

function HomePage() {
  return (
    <div className="homepage">
      <Carousel />
      <AboutUs />
      <NavSlider />
      <AdoptSlider />
    </div>
  );
}

export default HomePage;
