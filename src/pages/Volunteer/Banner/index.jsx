import React from "react";
import "./style.scss";

function VolunteerBanner(props) {
  return (
    <div class="banner">
        <div class="overlay">
            <h1>Tình Nguyện Viên</h1>
            <p><a href="#">Trang Chủ</a> {'>'} Tình Nguyện Viên</p>
        </div>
    </div>
  );
}

export default VolunteerBanner;
