import React from "react";
import AdoptSlider from "../../components/AdoptSlider";
import Carousel from "../../components/Carousel";
import NavSlider from "../../components/NavSlider";
import Sponsors from "../../components/Sponsors";
import ToSupport from "../../components/ToSupport";
import AboutUs from "./AboutUs";
import Statistics from "./Statistics";
import "./style.scss";

function HomePage(props) {
  return (
    <div className="homepage">
      <Carousel />
      <AboutUs />
      <NavSlider />
      <AdoptSlider list={props.list} />
      <Statistics />
      <Sponsors />
      <ToSupport />
    </div>
  );
}

export default HomePage;
