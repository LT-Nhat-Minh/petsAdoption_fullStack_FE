import React from "react";
import DogCard from "../../../../asset/Background/adopt-calltoaction.png";
import "./style.scss";

function JoinUs(props) {
  return (
    <div className="JoinUs">
      <div className="WantToJoin">
        <h3>
          {props.isEnglish ? "Do You Want to Join?" : "Bạn Muốn Tham Gia"}
        </h3>
        <p>
          {props.isEnglish
            ? "By volunteering for Once More Life, you are helping to change the fate of abandoned or abused dogs and cats. Additionally, you will have the opportunity to learn more..."
            : "Tham gia tình nguyện cho Once More Life, bạn đang góp phần thay đổi số phận của những bé chó mèo bị bỏ rơi hay bạo hành. Bên cạnh đó, bạn còn có cơ hội tìm hiểu thêm..."}
        </p>
        <div className="button">
          <button>{props.isEnglish ? "JOIN NOW" : "THAM GIA NGAY"}</button>
        </div>
      </div>
      <img
        src={DogCard}
        alt={props.isEnglish ? "Dog Call" : "Lời Kêu Gọi Chó"}
        className="DogCall"
      />
    </div>
  );
}

export default JoinUs;
