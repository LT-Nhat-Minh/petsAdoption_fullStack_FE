import React from "react";
import "./style.scss";
import BanChan from "../../../asset/Icon/petleg.png"
import icon1 from "../../../asset/Icon/TaIcon.png";
import icon2 from "../../../asset/Icon/QuanAoIcon.png";
import icon3 from "../../../asset/Icon/ThucAnIcon.png";

function SupportOptions() {
  const options = [
    { id: 1, name: "Bỉm", icon: icon1 },
    { id: 2, name: "Quần Áo", icon: icon2 },
    { id: 3, name: "Thức Ăn", icon: icon3 },
  ];

  return (
    <div className="support-options">
      <h2>CÁC PHƯƠNG THỨC ỦNG HỘ KHÁC</h2>
      <img src={BanChan} alt="" class="BanChan" />
      <div className="options-container">
        {options.map((option) => (
          <div key={option.id} className="option">
            <div className="icon-circle">
              <img src={option.icon} alt={option.name} />
            </div>
            <p>{option.name}</p>
          </div>
        ))}
      </div>
      <div className="DauChan1"></div>
    </div>
  );
}

export default SupportOptions;
