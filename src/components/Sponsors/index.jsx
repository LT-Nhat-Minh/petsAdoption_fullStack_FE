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
        <h1>NHÀ TÀI TRỢ CỐ ĐỊNH</h1>
        <span>
          <img src={sticker} alt="" />
        </span>
      </div>
      <div>
        <div>
          <p>Me-O: Nhà cung cấp thức ăn dinh dưỡng cho mèo</p>
          <img src={img1} alt="" />
          <h3>Me-O Việt Nam</h3>
          <span>
            <img src={sticker} alt="" />
          </span>
        </div>
        <div>
          <p>SmartHeart Việt Nam - Nhà cung cấp thức ăn dinh dưỡng cho chó</p>
          <img src={img2} alt="" />
          <h3>SmartHeart Việt Nam</h3>
          <span>
            <img src={sticker} alt="" />
          </span>
        </div>
        <div>
          <p>
            Shop quà lưu niệm bán đồ gây quỹ cho các nhóm từ thiện và tổ chức
            phi chính phủ.
          </p>
          <img src={img3} alt="" />
          <h3>Better World Hanoi</h3>
          <span>
            <img src={sticker} alt="" />
          </span>
        </div>
        <div>
          <p>IELTS THẦY JIM</p>
          <img src={img4} alt="" />
          <h3>Ielts Thầy Jim</h3>
          <span>
            <img src={sticker} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
