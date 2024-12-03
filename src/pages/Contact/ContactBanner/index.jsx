import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function ContactBanner(props) {
  const navigate = useNavigate();
  return (
    <div class="contact-banner">
      <div className="banner">
        <div className="container">
          <h1 className="title">Liên Hệ</h1>
          <p className="breadcrumbs">
            <span className="root" onClick={() => navigate("/")}>
              {" "}
              Trang Chủ{" "}
            </span>
            {">"}
            <span className="current"> Liên Hệ </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
