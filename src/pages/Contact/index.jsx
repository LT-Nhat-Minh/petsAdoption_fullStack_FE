import React from "react";
import "./style.scss";
import Banner1 from "./Banner1";
import Information from "./Information";
import Listsponsor from "../../components/ListSponsor";
import SupportOptions from "../../components/SuportOption";

function Contact(props) {
  return (
    <div>
      <Banner1 />
      <Information />
      <SupportOptions />
      <Listsponsor />
    </div>
  );
}

export default Contact;
