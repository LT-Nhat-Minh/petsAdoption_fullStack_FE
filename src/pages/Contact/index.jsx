import React from "react"; 
import "./style.scss";
import Banner1 from "./Banner1";
import Information from "./Information"
import SuportOption from "./SuportOption"
import ListSponsor from "./ListSponsor"

function Contact(props) {
  return <div>
    <Banner1 />
    <Information />
    <SuportOption />
    <ListSponsor />
  </div>;
}

export default Contact;
