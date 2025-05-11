import React from "react";
import Listsponsor from "../../components/ListSponsor";
import SupportOptions from "../../components/SuportOption";
import ContactBanner from "./ContactBanner";
import Information from "./Information";
import "./style.scss";

function Contact(props) {
  return (
    <div>
      <ContactBanner />
      <Information />
      <SupportOptions />
      <Listsponsor />
    </div>
  );
}

export default Contact;
