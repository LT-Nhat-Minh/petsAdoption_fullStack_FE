import React from "react";
import "./style1.scss";
import DogCard from "../../../asset/Background/adopt-calltoaction.png"

function Volunteer4(props) {
  return (
  
<div class="List">
    <div class="content">
        <div class="description">
            <h2>TNV Vận Chuyển</h2>
            <p>Ngoài các tình huống cứu hộ, Hanoi Pet Adoption còn cần các bạn giúp vận chuyển chó/mèo từ nhà chung tới bệnh viện, nhà foster hoặc chủ nuôi v.v... Hoặc nhận đồ quyên góp cho Nhóm và chuyển về nhà chung.</p>
            <div class="info-box">
                <ul>
                    <li>Tuổi 20+.</li>
                    <li>Có phương tiện di chuyển riêng và có tinh thần trách nhiệm.</li>
                </ul>
            </div>
        </div>
        <div class="profile-image">
            <img src="https://www.hanoipetadoption.com/admin/user-content/Volunteer/dd863f3e-1762-45a9-9730-922987085e97.jpeg" alt="Profile Image" />
        </div>
    </div>
    <div class="JoinUs">
        <div class="WantToJoin">
            <h3>Bạn Muốn Tham Gia</h3>
            <p>Tham gia tình nguyện cho Hanoi Pet Adoption, bạn đang góp phần thay đổi số phận của những bé chó mèo bị bỏ rơi hay bạo hành. Bên cạnh đó, bạn còn có cơ hội tìm hiểu thêm...</p>
            <div className="button">
              <button>THAM GIA NGAY</button>
            </div>
        </div>
        <img src={DogCard} alt="" class="DogCall" />
    </div>
</div>
  );
}

export default Volunteer4;