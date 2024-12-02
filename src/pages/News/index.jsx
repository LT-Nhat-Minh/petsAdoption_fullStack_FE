import React from "react";
import "./style.scss";
import { Navigate, useNavigate } from "react-router-dom";

function News(props) {
  let navigate = useNavigate();
  return (
    <div className="News">
      <div
        onClick={() => {
          navigate("/bai1");
        }}
      >
        abc
      </div>
    </div>
  );
}

export default News;
