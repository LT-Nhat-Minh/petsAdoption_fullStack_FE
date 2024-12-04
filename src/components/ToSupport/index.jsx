import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function ToSupport(props) {
  const navigate = useNavigate();
  return (
    <div className="toSupport">
      <h1>
        {props.isEnglish ? "Are You Ready to Help?" : "Bạn Đã Sẵn Sàng Giúp Đỡ"}
      </h1>
      <div>
        <button
          style={{ textTransform: "uppercase" }}
          onClick={() => navigate("/donation")}
        >
          {props.isEnglish ? "Donate Now" : "Ủng Hộ Ngay"}
        </button>
      </div>
    </div>
  );
}

export default ToSupport;
