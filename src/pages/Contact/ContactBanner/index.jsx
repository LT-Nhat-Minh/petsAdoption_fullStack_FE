import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function ContactBanner(props) {
  const navigate = useNavigate();
  return (
    <div className="contact-banner">
      <div className="banner">
        <div className="container">
          <h1 className="title">{props.isEnglish ? "Contact" : "Liên Hệ"}</h1>
          <p className="breadcrumbs">
            <span className="root" onClick={() => navigate("/")}>
              {props.isEnglish ? "Home" : "Trang Chủ"}
            </span>{" "}
            {">"}{" "}
            <span className="current">
              {props.isEnglish ? "Contact" : "Liên Hệ"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
