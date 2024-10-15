import React from "react";
import "./style.scss";
import Carousel from "../../components/Carousel";
import NavSlider from "../../components/NavSlider";
import AboutUs from "./AboutUs";
import AdoptSlider from "../../components/AdoptSlider";
import Statistics from "./Statistics";
import Sponsors from "../../components/Sponsors";
import ToSupport from "../../components/ToSupport";

function HomePage() {
  return (
    <div className="homepage">
      <Carousel />
      <AboutUs />
      <NavSlider />
      <AdoptSlider />
      <Statistics />
      <Sponsors />
      <ToSupport />
    </div>
  );
}

export default HomePage;
