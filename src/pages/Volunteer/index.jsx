import React from "react";
import "./style1.scss";
import ToSupport from "../../components/ToSupport";
import AdoptSlider from "../../components/AdoptSlider";
import VolunteerList from "./VolunteerList";
import Banner from "./Banner";
import VolunteerIntroduce from "./Introduce";

function Volunteer(props) {
  return (
    <div class="home">
      <Banner />
      <VolunteerIntroduce />
      <VolunteerList />
      <AdoptSlider list={props.list} />
      <ToSupport />
    </div>
  );
}

export default Volunteer;
