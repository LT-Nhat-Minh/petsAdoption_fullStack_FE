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
  const [isFirstRender, setIsFirstRender] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(window.firstRenderTimeout);
    window.addEventListener("scroll", handleScrollDown);
    window.firstRenderTimeout = setTimeout(() => {
      setIsFirstRender(false);
    }, 500);
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
  };

  return (
    <div className="header_container">
      <div>
        <div
          className="header_contact"
          style={showElement === false ? { display: "none" } : {}}
        >
          <div className="header_contact_container">
            <div>
              <div>
                <EnvironmentOutlined />
                {props.isEnglish
                  ? "Ho Chi Minh City - Vietnam"
                  : "TP Hồ Chí Minh - Việt Nam"}
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
              <SearchOutlined
                twoToneColor="#eb2f96"
                className="searchOutlined"
              />
              <button
                onClick={() => {
                  props.setIsEnglish(!props.isEnglish);
                }}
                className={props.isEnglish ? "english" : "tiengviet"}
              >
                <img
                  src={props.isEnglish ? english : tiengviet}
                  alt="language"
                />
                <span style={{ width: "63px" }}>
                  {props.isEnglish ? "English" : "Tiếng Việt"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className={`header_nav ${isFirstRender ? "initial" : ""}`}>
          <div className="Logo" onClick={() => navigate("/")}>
            <p>
              <img
                src={logo}
                alt="Logo"
                style={{ height: "50px", margin: "0 10px" }}
              />
            </p>
          </div>
          <div
            className={props.activated === "/" ? "activated" : ""}
            onClick={() => navigate("/")}
          >
            <p>{props.isEnglish ? "HOME" : "TRANG CHỦ"}</p>
          </div>
          <div
            className={props.activated === "/nhan-nuoi" ? "activated" : ""}
            onClick={() => navigate("/nhan-nuoi")}
          >
            <p>{props.isEnglish ? "ADOPT" : "NHẬN NUÔI"}</p>
          </div>
          <div
            className={props.activated === "/donation" ? "activated" : ""}
            onClick={() => navigate("/donation")}
          >
            <p>{props.isEnglish ? "DONATE" : "ỦNG HỘ"}</p>
          </div>
          <div
            className={props.activated === "/volunteer" ? "activated" : ""}
            onClick={() => navigate("/volunteer")}
          >
            <p>{props.isEnglish ? "VOLUNTEER" : "TÌNH NGUYỆN VIÊN"}</p>
          </div>
          <div
            className={props.activated === "/product" ? "activated" : ""}
            onClick={() => navigate("/product")}
          >
            <p>{props.isEnglish ? "PRODUCT" : "SẢN PHẨM"}</p>
          </div>
          <div
            className={props.activated === "/contact" ? "activated" : ""}
            onClick={() => navigate("/contact")}
          >
            <p>{props.isEnglish ? "CONTACT" : "LIÊN HỆ"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
