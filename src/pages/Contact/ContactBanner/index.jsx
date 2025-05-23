import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ContactBanner(props) {
  const navigate = useNavigate();
  const isEnglish = useSelector((state) => state.language.isEnglish);
  return (
    <div className="contact-banner">
      <div className="banner">
        <div className="container">
          <h1 className="title">{isEnglish ? "Contact" : "Liên Hệ"}</h1>
          <p className="breadcrumbs">
            <span className="root" onClick={() => navigate("/")}>
              {isEnglish ? "Home" : "Trang Chủ"}
            </span>{" "}
            {">"}{" "}
            <span className="current">{isEnglish ? "Contact" : "Liên Hệ"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
