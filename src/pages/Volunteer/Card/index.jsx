import React from "react";
import "./style1.scss";
import DogCard from "../../../asset/Background/adopt-calltoaction.png";

function VolunteerBanner(props) {
  return (
    <div class="card">
        <div class="content">
            <h2>Bạn Muốn Tham Gia</h2>
            <p>Tham gia tình nguyện cho Hanoi Pet Adoption, bạn đang góp phần thay đổi số phận của những bé chó mèo bị bỏ rơi hay bạo hành. Bên cạnh đó, bạn còn có cơ hội tìm hiểu thêm...</p>
            <button class="join-button">THAM GIA NGAY</button>
        </div>
        <img src={DogCard} alt="Dog Image" class="dog-image" />
    </div>
  );
}

export default VolunteerBanner;
