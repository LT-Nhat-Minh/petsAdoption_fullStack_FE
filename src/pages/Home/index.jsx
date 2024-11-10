import React from "react";
import AdoptSlider from "../../components/AdoptSlider";
import Carousel from "../../components/Carousel";
import NavSlider from "../../components/NavSlider";
import Sponsors from "../../components/Sponsors";
import ToSupport from "../../components/ToSupport";
import AboutUs from "./AboutUs";
import Statistics from "./Statistics";
import "./style.scss";
import SupportOptions from "../../components/SuportOption";
import JoinUs from "../Volunteer/JoinUs";

function HomePage(props) {
  return (
    <div className="homepage">
      <Carousel isEnglish={props.isEnglish} />
      <AboutUs isEnglish={props.isEnglish} />
      <NavSlider isEnglish={props.isEnglish} />
      <AdoptSlider list={props.list} isEnglish={props.isEnglish} />
      <Statistics isEnglish={props.isEnglish} />
      <Sponsors isEnglish={props.isEnglish} />
      <ToSupport isEnglish={props.isEnglish} />
    </div>
  );
}

export default HomePage;
