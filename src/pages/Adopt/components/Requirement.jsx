import React from "react";
import img from "../../../asset/Icon/pets.png";

function Requirement(props) {
  return (
    <div className="requirement">
      <div className="content2 fw">
        <strong>Điều Kiện Nhận Nuôi</strong>
        <br></br>
        <br></br>
        <div>
          <img src={img} className="chanchoc2"></img>
          <span>Tài chính tự chủ và ổn định.</span>
        </div>
        <div>
          <img src={img} className="chanchoc2"></img>
          <span>Chỗ ở cố định, ưu tiên tại TP HCM.</span>
        </div>
        <div>
          <img src={img} className="chanchoc2"></img>
          <span>Cam kết tiêm phòng và triệt sản .</span>
        </div>
      </div>
    </div>
  );
}

export default Requirement;
