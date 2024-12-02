import React from "react";
import { useNavigate } from "react-router-dom";

function Rescue(props) {
  const navigate = useNavigate();
  return (
    <div className="adopt-rescue">
      <div className="container">
        <div className="title">
          <h1>Tất Cả Các Ca Cứu Hộ</h1>
          <p>
            Tìm hiểu về tất cả các ca cứu hộ, đang nằm viện, ở nhà fos, đã mất,
            đã được nhận nuôi...
          </p>
        </div>
        <div className="btn-container">
          <button onClick={() => navigate("/nhan-nuoi/tat-ca-cac-be")}>
            XEM TẤT CẢ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rescue;
