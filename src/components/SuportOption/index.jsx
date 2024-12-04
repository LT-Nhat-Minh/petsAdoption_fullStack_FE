import React from "react";
import "./style.scss";
import BanChan from "../../asset/Icon/pets.png";
import icon1 from "../../asset/Icon/TaIcon.png";
import icon2 from "../../asset/Icon/QuanAoIcon.png";
import icon3 from "../../asset/Icon/ThucAnIcon.png";

function SupportOptions(props) {
  const options = [
    { id: 1, name: "Bỉm", name_en: "Diapers", icon: icon1 },
    { id: 2, name: "Quần Áo", name_en: "Clothes", icon: icon2 },
    { id: 3, name: "Thức Ăn", name_en: "Food", icon: icon3 },
  ];

  return (
    <div className="support-options">
      <h2>
        {props.isEnglish
          ? "Other Support Options"
          : "CÁC PHƯƠNG THỨC ỦNG HỘ KHÁC"}
      </h2>
      <img src={BanChan} alt="" className="BanChan" />
      <div className="options-container">
        {options.map((option) => (
          <div key={option.id} className="option">
            <div className="icon-circle">
              <img src={option.icon} alt={option.name} />
            </div>
            <p>{props.isEnglish ? option.name_en : option.name}</p>
          </div>
        ))}
      </div>
      <button className="lienhespa white fw">
        {props.isEnglish ? "CONTACT SPA" : "LIÊN HỆ SPA"}
      </button>
    </div>
  );
}

export default SupportOptions;
