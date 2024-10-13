import React from "react";
import "./style.scss";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import logo from "../../asset/Logo/hanoi-adoption-logo.png";

function Header(props) {
  return (
    <div className="header_container">
      <div className="header_contact">
        <div className="header_contact_container">
          <div>
            <div>
              <EnvironmentOutlined />
              Hà Nội - Việt Nam
            </div>
            <a href="/email">
              <MailOutlined />
              hanoipetadoption@gmail.com
            </a>
            <a href="/contact">
              <PhoneOutlined />
              (+84)39 320 1068
            </a>
          </div>
          <div>
            <SearchOutlined twoToneColor="#eb2f96" className="searchOutlined" />
            <button>Ngôn ngữ</button>
          </div>
        </div>
      </div>
      <div className="header_nav">
        <div className="Logo">
          <a href="/">
            <img
              src={logo}
              alt=""
              style={{ height: "60px", margin: "0 10px" }}
            />
          </a>
        </div>
        <div>
          <a href="/">TRANG CHỦ</a>
        </div>
        <div>
          <a href="/nhan-nuoi">NHẬN NUÔI</a>
        </div>
        <div>
          <a href="/donation">ỦNG HỘ</a>
        </div>
        <div>
          <a href="/volunteer">TÌNH NGUYỆN VIÊN</a>
        </div>
        <div>
          <a href="/product">SẢN PHẨM</a>
        </div>
        <div>
          <a href="/contact">LIÊN HỆ</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
