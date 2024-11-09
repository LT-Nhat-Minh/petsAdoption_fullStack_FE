import React from "react";
import DogCard from "../../../asset/Background/adopt-calltoaction.png";
import "./style.scss";

function JoinUs(props) {
  return (
    <div class="JoinUs">
      <div class="WantToJoin">
        <h3>Bạn Muốn Tham Gia</h3>
        <p>
          Tham gia tình nguyện cho Hanoi Pet Adoption, bạn đang góp phần thay
          đổi số phận của những bé chó mèo bị bỏ rơi hay bạo hành. Bên cạnh đó,
          bạn còn có cơ hội tìm hiểu thêm...
        </p>
        <div className="button">
          <button>THAM GIA NGAY</button>
        </div>
      </div>
      <img src={DogCard} alt="" class="DogCall" />
    </div>
  );
}

export default JoinUs;
