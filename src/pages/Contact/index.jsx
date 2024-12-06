import React from "react";
import Listsponsor from "../../components/ListSponsor";
import SupportOptions from "../../components/SuportOption";
import ContactBanner from "./ContactBanner";
import Information from "./Information";
import "./style.scss";

function Contact(props) {
  return (
    <div>
      <ContactBanner isEnglish={props.isEnglish} />
      <Information isEnglish={props.isEnglish} />
      <SupportOptions isEnglish={props.isEnglish} />
      <Listsponsor isEnglish={props.isEnglish} />
    </div>
  );
}

export default Contact;
