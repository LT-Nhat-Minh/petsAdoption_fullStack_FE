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
      <Banner isEnglish={props.isEnglish} />
      <VolunteerIntroduce isEnglish={props.isEnglish} />
      <VolunteerList isEnglish={props.isEnglish} />
      <AdoptSlider isEnglish={props.isEnglish} list={props.list} />
      <ToSupport isEnglish={props.isEnglish} />
    </div>
  );
}

export default Volunteer;
