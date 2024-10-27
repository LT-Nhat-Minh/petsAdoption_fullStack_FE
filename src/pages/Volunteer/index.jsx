import React from "react";
import "./style.scss";
import ToSupport from "../../components/ToSupport";
import AdoptSlider from "../../components/AdoptSlider";
import VolunteerList from "./VolunteerList"
import Banner from "./Banner"
import Volunteer1 from "./Volunteer1"
import Volunteer2 from "./Volunteer2"
import Volunteer3 from "./Volunteer3"
import Volunteer4 from "./Volunteer4"

function Volunteer(props) {
  return <div class = "home">
      <Banner />
      <VolunteerList />
      <Volunteer1 />
      <Volunteer2 />
      <Volunteer3 />
      <Volunteer4 />
      <AdoptSlider />
      <ToSupport />
  </div>;
}

export default Volunteer;
