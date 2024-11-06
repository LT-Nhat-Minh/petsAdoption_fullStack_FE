import React, { useEffect, useState } from "react";
import "./style.scss";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import logo from "../../asset/Logo/Logo.png";

function Header(props) {
  const [showElement, setShowElement] = useState(true);
  const handleScrollDown = () => {
    clearTimeout(window.scrollTimeout);
    if (window.scrollY > 10) {
      window.scrollTimeout = setTimeout(() => {
        setShowElement(false);
      }, 100);
    } else {
      setShowElement(true);
    }
    console.log("showElement", showElement);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDown);
    return () => {
      window.removeEventListener("scroll", handleScrollDown);
    };
  }, []);

  return (
    <div className="header_container">
      <div
        className="header_contact"
        style={showElement === false ? { display: "none" } : {}}
      >
        <div className="header_contact_container">
          <div>
            <div>
              <EnvironmentOutlined />
              TP Hồ Chí Minh - Việt Nam
            </div>
            <a href="/email">
              <MailOutlined />
              oncemorelife@gmail.com
            </a>
            <a href="/contact">
              <PhoneOutlined />
              (+84) 09090909009
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
