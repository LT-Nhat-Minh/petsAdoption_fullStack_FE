import React, { useEffect, useState } from "react";
import "./style.scss";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import logo from "../../asset/Logo/Logo.png";
import tiengviet from "../../asset/Icon/tiengviet.png";
import english from "../../asset/Icon/english.png";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const [showElement, setShowElement] = useState(true);
  const [isEnglish, setIsEnglish] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDown);
    return () => {
      window.removeEventListener("scroll", handleScrollDown);
    };
  }, []);

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
            <button
              onClick={() => {
                setIsEnglish(!isEnglish);
              }}
              className={isEnglish ? "english" : "tiengviet"}
            >
              <img src={isEnglish ? english : tiengviet} alt="language" />
              <span style={{ width: "63px" }}>
                {isEnglish ? "English" : "Tiếng Việt"}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="header_nav">
        <div className="Logo" onClick={() => navigate("/")}>
          <p>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "60px", margin: "0 10px" }}
            />
          </p>
        </div>
        <div
          className={props.activated === "/" ? "activated" : ""}
          onClick={() => {
            navigate("/");
          }}
        >
          <p>TRANG CHỦ</p>
        </div>
        <div
          className={props.activated === "/nhan-nuoi" ? "activated" : ""}
          onClick={() => {
            navigate("/nhan-nuoi");
          }}
        >
          <p>NHẬN NUÔI</p>
        </div>
        <div
          className={props.activated === "/donation" ? "activated" : ""}
          onClick={() => {
            navigate("/donation");
          }}
        >
          <p>ỦNG HỘ</p>
        </div>
        <div
          className={props.activated === "/volunteer" ? "activated" : ""}
          onClick={() => {
            navigate("/volunteer");
          }}
        >
          <p>TÌNH NGUYỆN VIÊN</p>
        </div>
        <div
          className={props.activated === "/product" ? "activated" : ""}
          onClick={() => {
            navigate("/product");
          }}
        >
          <p>SẢN PHẨM</p>
        </div>
        <div
          className={props.activated === "/contact" ? "activated" : ""}
          onClick={() => {
            navigate("/contact");
          }}
        >
          <p>LIÊN HỆ</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
