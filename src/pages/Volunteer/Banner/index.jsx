import React from "react";
import "./style1.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function VolunteerBanner(props) {
  const navigate = useNavigate();
  const isEnglish = useSelector((state) => state.language.isEnglish);
  return (
    <div className="volunteer-banner">
      <div className="banner">
        <div className="container">
          <h1 className="title">
            {isEnglish ? "Volunteers" : "Tình Nguyện Viên"}
          </h1>
          <p className="breadcrumbs">
            <span className="root" onClick={() => navigate("/")}>
              {isEnglish ? "Home" : "Trang Chủ"}
            </span>{" "}
            {">"}{" "}
            <span className="current">
              {isEnglish ? "Volunteer" : "Tình Nguyện Viên"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default VolunteerBanner;
