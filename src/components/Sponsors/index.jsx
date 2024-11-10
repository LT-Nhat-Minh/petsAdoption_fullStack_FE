import React, { useState } from "react";
import "./style.scss";
import img1 from "../../asset/Sponsors/me-o.png";
import img2 from "../../asset/Sponsors/smartHeart.jpg";
import img3 from "../../asset/Sponsors/betterWorld.jpg";
import img4 from "../../asset/Sponsors/Thầy jim.jpg";
import sticker from "../../asset/Icon/pets.png";

function Sponsors(props) {
  return (
    <div className="sponsors">
      <div>
        <h2>{props.isEnglish ? "OUR SPONSORS" : "NHÀ TÀI TRỢ CỐ ĐỊNH"}</h2>
        <span>
          <img src={sticker} alt="" className="BanChan" />
        </span>
      </div>
      <div>
        <div>
          <p>
            {props.isEnglish
              ? "Me-O: Nutritional food provider for cats"
              : "Me-O: Nhà cung cấp thức ăn dinh dưỡng cho mèo"}
          </p>
          <img src={img1} alt="" />
          <h3>{props.isEnglish ? "Me-O VietNam" : "Me-O Việt Nam"}</h3>
          <span>
            <img src={sticker} alt="" />
          </span>
        </div>
        <div>
          <p>
            {props.isEnglish
              ? "SmartHeart Vietnam - Nutritional food provider for dogs"
              : "SmartHeart Việt Nam - Nhà cung cấp thức ăn dinh dưỡng cho chó"}
          </p>
          <img src={img2} alt="" />
          <h3>
            {props.isEnglish ? "SmartHeart VietNam" : "SmartHeart Việt Nam"}
          </h3>
          <span>
            <img src={sticker} alt="" />
          </span>
        </div>
        <div>
          <p>
            {props.isEnglish
              ? "Better World Shop sells souvenirs that fundraise for charity groups and NGOs."
              : "Shop quà lưu niệm bán đồ gây quỹ cho các nhóm từ thiện và tổ chức phi chính phủ."}
          </p>
          <img src={img3} alt="" />
          <h3>Better World Hanoi</h3>
          <span>
            <img src={sticker} alt="" />
          </span>
        </div>
        <div>
          <p>{props.isEnglish ? "IELTS Jim" : "IELTS Thầy Jim"}</p>
          <img src={img4} alt="" />
          <h3>{props.isEnglish ? "IELTS Jim" : "IELTS Thầy Jim"}</h3>
          <span>
            <img src={sticker} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
