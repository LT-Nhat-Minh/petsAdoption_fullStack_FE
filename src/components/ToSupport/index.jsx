import React from "react";
import "./style.scss";

function ToSupport(props) {
  return (
    <div className="toSupport">
      <h1>
        {props.isEnglish ? "Are You Ready to Help?" : "Bạn Đã Sẵn Sàng Giúp Đỡ"}
      </h1>
      <div>
        <button style={{ textTransform: "uppercase" }}>
          {props.isEnglish ? "Donate Now" : "Ủng Hộ Ngay"}
        </button>
      </div>
    </div>
  );
}

export default ToSupport;
