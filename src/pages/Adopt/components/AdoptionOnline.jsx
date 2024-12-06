import React from "react";

function AdoptionOnline(props) {
  return (
    <div className="adopt-online">
      <div className="container">
        <div className="title">
          <h2>
            {props.isEnglish
              ? "Don't Meet the Requirements to Bring a Pet Home?"
              : "Bạn Chưa Đủ Điều Kiện Mang Boss Về Nhà?"}
          </h2>
          <h1>
            {props.isEnglish
              ? "Join the Virtual Adoption Program!"
              : "Tham Gia Chương Trình Nhận Nuôi Ảo Nhé."}
          </h1>
        </div>
        <div className="btn-container">
          <button>
            {props.isEnglish ? "LEARN MORE NOW" : "TÌM HIỂU NGAY"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdoptionOnline;
