import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import MeoVaCoc from "../../asset/Background/MeoVaCoc.jpg"
import NhieuMeo from "../../asset/Background/AnhNhieuMeo.jpeg"
import CapDoiVaPet from "../../asset/Background/CapDoiVaPet.jpg"

function NavSlider(props) {
  const navigate = useNavigate();
  return (
    <div className="nav_slider">
      <div className="item">
        <div className="before">
          <div className="avatar">
            <img
              src={MeoVaCoc}
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
          <button onClick={() => navigate("/donation")}>
            {props.isEnglish ? "LEARN MORE" : "TÌM HIỂU THÊM"}
          </button>
        </div>
      </div>
      <div className="item">
        <div className="before">
          <div className="avatar">
            <img
              src={NhieuMeo}
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
          <button onClick={() => navigate("/volunteer")}>
            {props.isEnglish ? "LEARN MORE" : "TÌM HIỂU THÊM"}
          </button>
        </div>
      </div>
      <div className="item">
        <div className="before">
          <div className="avatar">
            <img
              src={CapDoiVaPet}
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
          <button onClick={() => navigate("/nhan-nuoi")}>
            {props.isEnglish ? "LEARN MORE" : "TÌM HIỂU THÊM"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavSlider;
