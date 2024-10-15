import React from "react";
import "./style.scss";
import icon1 from "../../../asset/Icon/pet hospital.png";
import icon2 from "../../../asset/Icon/pet-house.png";
import icon3 from "../../../asset/Icon/interaction.png";
import icon4 from "../../../asset/Icon/dog-resting-on-a-pet-hotel-bed.png";

function Statistics(props) {
  return (
    <div className="statistics">
      <div>
        <div className="icon">
          <img src={icon1} alt="" />
        </div>
        <h1>2536</h1>
        <h4>Ca Cứu Hộ</h4>
      </div>
      <div>
        <div className="icon">
          <img src={icon2} alt="" />
        </div>
        <h1>1069</h1>
        <h4>Đã Có Chủ</h4>
      </div>
      <div>
        <div className="icon">
          <img src={icon3} alt="" />
        </div>
        <h1>339</h1>
        <h4>Chờ Tìm Chủ</h4>
      </div>
      <div>
        <div className="icon">
          <img src={icon4} alt="" />
        </div>
        <h1>150</h1>
        <h4>Chưa Sẵn Sàng Tìm Chủ</h4>
      </div>
    </div>
  );
}

export default Statistics;
