import React from "react";
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
          <img src={img1} alt="" />
          <h3>Me-O Việt Nam</h3>
          <span>
            <img src={sticker} alt="" />
          </span>
        </div>
        <div>
          <img src={img2} alt="" />
          <h3>SmartHeart Việt Nam</h3>
          <span>
            <img src={sticker} alt="" />
          </span>
        </div>
        <div>
          <img src={img3} alt="" />
          <h3>Better World Hanoi</h3>
          <span>
            <img src={sticker} alt="" />
          </span>
        </div>
        <div>
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
