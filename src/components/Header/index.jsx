import React, { useEffect, useState } from "react";
import "./style.scss";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import logo from "../../asset/Logo/Logo.png";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const [showElement, setShowElement] = useState(true);
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
            <button>Ngôn ngữ</button>
          </div>
        </div>
      </div>
      <div className="header_nav">
        <div
          className="Logo"
          onClick={() => {
            props.setActivated("home");
            navigate("/");
          }}
        >
          <p>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "60px", margin: "0 10px" }}
            />
          </p>
        </div>
        <div
          className={props.activated === "home" ? "activated" : ""}
          onClick={() => {
            props.setActivated("home");
            navigate("/");
          }}
        >
          <p>TRANG CHỦ</p>
        </div>
        <div
          className={props.activated === "adopt" ? "activated" : ""}
          onClick={() => {
            props.setActivated("adopt");
            navigate("/nhan-nuoi");
          }}
        >
          <p>NHẬN NUÔI</p>
        </div>
        <div
          className={props.activated === "donate" ? "activated" : ""}
          onClick={() => {
            props.setActivated("donate");
            navigate("/donation");
          }}
        >
          <p>ỦNG HỘ</p>
        </div>
        <div
          className={props.activated === "volunteer" ? "activated" : ""}
          onClick={() => {
            props.setActivated("volunteer");
            navigate("/volunteer");
          }}
        >
          <p>TÌNH NGUYỆN VIÊN</p>
        </div>
        <div
          className={props.activated === "product" ? "activated" : ""}
          onClick={() => {
            props.setActivated("product");
            navigate("/product");
          }}
        >
          <p>SẢN PHẨM</p>
        </div>
        <div
          className={props.activated === "contact" ? "activated" : ""}
          onClick={() => {
            props.setActivated("contact");
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
