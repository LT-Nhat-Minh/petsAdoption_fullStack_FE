import React from "react";
import img from "../../../asset/Icon/pets.png";

function Requirement(props) {
  return (
    <div className="requirement">
      <div className="content2 fw">
        <strong>
          {props.isEnglish ? "Adoption Requirements" : "Điều Kiện Nhận Nuôi"}
        </strong>
        <br></br>
        <br></br>
        <div>
          <img src={img} className="chanchoc2" alt="financial"></img>
          <span>
            {props.isEnglish
              ? "Stable and independent financial situation."
              : "Tài chính tự chủ và ổn định."}
          </span>
        </div>
        <div>
          <img src={img} className="chanchoc2" alt="housing"></img>
          <span>
            {props.isEnglish
              ? "Stable housing, preferably in Ho Chi Minh City."
              : "Chỗ ở cố định, ưu tiên tại TP HCM."}
          </span>
        </div>
        <div>
          <img src={img} className="chanchoc2" alt="vaccination"></img>
          <span>
            {props.isEnglish
              ? "Commitment to vaccination and sterilization."
              : "Cam kết tiêm phòng và triệt sản."}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Requirement;
