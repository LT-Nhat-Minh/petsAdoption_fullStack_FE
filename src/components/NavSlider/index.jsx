import React from "react";
import "./style.scss";

function NavSlider(props) {
  return (
    <div className="nav_slider">
      <div className="item">
        <div className="before">
          <div className="avatar">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/03fc601a-a150-4d55-b051-15d6d3ced88e.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <h4>{props.isEnglish ? "DONATION" : "ỦNG HỘ"}</h4>
            <p>
              {props.isEnglish
                ? "Help maintain HPA's activities through monetary or material donations."
                : "Giúp duy trì hoạt động của HPA qua hình thức quyên góp tiền hoặc nhu yếu phẩm."}
            </p>
          </div>
        </div>
        <div className="after">
          <button>{props.isEnglish ? "LEARN MORE" : "TÌM HIỂU THÊM"}</button>
        </div>
      </div>
      <div className="item">
        <div className="before">
          <div className="avatar">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/eed6fd79-339e-4976-9e0b-1b353aacb99f.jpeg"
              alt=""
            />
          </div>
          <div className="content">
            <h4>{props.isEnglish ? "VOLUNTEER" : "TÌNH NGUYỆN"}</h4>
            <p>
              {props.isEnglish
                ? "Take action to change the lives of dogs, cats, and other pets."
                : "Hành động để thay đổi cuộc sống của chó, mèo và thú cưng khác."}
            </p>
          </div>
        </div>
        <div className="after">
          <button>{props.isEnglish ? "LEARN MORE" : "TÌM HIỂU THÊM"}</button>
        </div>
      </div>
      <div className="item">
        <div className="before">
          <div className="avatar">
            <img
              src="https://www.hanoipetadoption.com/admin/user-content/0f8ff594-db60-4a7c-bfc6-b0579737602e.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <h4>{props.isEnglish ? "ADOPT" : "NHẬN NUÔI"}</h4>
            <p>
              {props.isEnglish
                ? "Adopt, care for, don't abandon, and love the animals that are left behind."
                : "Hãy nhận nuôi, cưu mang, đừng xua đuổi và yêu thương loài động vật bị bỏ rơi."}
            </p>
          </div>
        </div>
        <div className="after">
          <button>{props.isEnglish ? "LEARN MORE" : "TÌM HIỂU THÊM"}</button>
        </div>
      </div>
    </div>
  );
}

export default NavSlider;
