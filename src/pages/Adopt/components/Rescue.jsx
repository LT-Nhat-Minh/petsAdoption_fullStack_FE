import React from "react";
import { useNavigate } from "react-router-dom";

function Rescue(props) {
  const navigate = useNavigate();
  return (
    <div className="adopt-rescue">
      <div className="container">
        <div className="title">
          <h1>
            {props.isEnglish ? "All Rescue Cases" : "Tất Cả Các Ca Cứu Hộ"}
          </h1>
          <p>
            {props.isEnglish
              ? "Learn about all rescue cases, including those in the hospital, in foster care, passed away, or already adopted..."
              : "Tìm hiểu về tất cả các ca cứu hộ, đang nằm viện, ở nhà fos, đã mất, đã được nhận nuôi..."}
          </p>
        </div>
        <div className="btn-container">
          <button onClick={() => navigate("/nhan-nuoi/tat-ca-cac-be")}>
            {props.isEnglish ? "SEE ALL" : "XEM TẤT CẢ"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rescue;
