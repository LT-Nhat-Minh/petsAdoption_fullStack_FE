import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown } from "antd";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import english from "../../asset/Icon/english.png";
import tiengviet from "../../asset/Icon/tiengviet.png";
import logo from "../../asset/Logo/Logo.png";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { doLogoutAction } from "../../redux/account/accountSlice";
import { doChangeLanguageAction } from "../../redux/language/languageSlice";

function Header(props) {
  const [showElement, setShowElement] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const navigate = useNavigate();

  const disPatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const isEnglish = useSelector((state) => state.language.isEnglish);
  const user = useSelector((state) => state.account.user);

  const handleLogout = () => {
    disPatch(doLogoutAction());
  };

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

  const items = [
    ...(isAuthenticated
      ? [
          ...(user.role === "admin"
            ? [
                {
                  label: "Admin",
                  key: "0",
                  onClick: () => {
                    navigate("/admin");
                  },
                },
              ]
            : []),
          {
            label: "Profile",
            key: "1",
            onClick: () => {
              navigate("/profile");
            },
          },
          {
            label: "Logout",
            key: "2",
            onClick: () => {
              handleLogout();
              navigate("/");
            },
          },
        ]
      : []),
  ];

  const menuProps = {
    items,
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
              <div className="address">
                <EnvironmentOutlined />
                {isEnglish
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
                  disPatch(doChangeLanguageAction());
                }}
                className={isEnglish ? "english" : "tiengviet"}
              >
                <img src={isEnglish ? english : tiengviet} alt="language" />
                <span style={{ width: "63px" }}>
                  {isEnglish ? "English" : "Tiếng Việt"}
                </span>
              </button>
              <div className="account_dropdown_container">
                <Dropdown.Button
                  menu={menuProps}
                  placement="bottom"
                  icon={<UserOutlined />}
                  onClick={(isAuthenticated) => {
                    if (isAuthenticated) {
                      navigate("/profile");
                    } else {
                      navigate("/login");
                    }
                  }}
                >
                  {isAuthenticated
                    ? user.name
                      ? user.name
                      : user.email
                    : "Đăng nhập"}
                </Dropdown.Button>
              </div>
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
            <p>{isEnglish ? "HOME" : "TRANG CHỦ"}</p>
          </div>
          <div
            className={
              props.activated.startsWith("/nhan-nuoi") ? "activated" : ""
            }
            onClick={() => navigate("/nhan-nuoi")}
          >
            <p>{isEnglish ? "ADOPT" : "NHẬN NUÔI"}</p>
          </div>
          <div
            className={
              props.activated.startsWith("/donation") ? "activated" : ""
            }
            onClick={() => navigate("/donation")}
          >
            <p>{isEnglish ? "DONATE" : "ỦNG HỘ"}</p>
          </div>
          <div
            className={
              props.activated.startsWith("/volunteer") ? "activated" : ""
            }
            onClick={() => navigate("/volunteer")}
          >
            <p>{isEnglish ? "VOLUNTEER" : "TÌNH NGUYỆN VIÊN"}</p>
          </div>
          <div
            className={props.activated.startsWith("/news") ? "activated" : ""}
            onClick={() => navigate("/news")}
          >
            <p>{isEnglish ? "NEWS" : "TIN TỨC"}</p>
          </div>
          <div
            className={
              props.activated.startsWith("/product") ? "activated" : ""
            }
            onClick={() => navigate("/product")}
          >
            <p>{isEnglish ? "PRODUCT" : "SẢN PHẨM"}</p>
          </div>
          <div
            className={
              props.activated.startsWith("/contact") ? "activated" : ""
            }
            onClick={() => navigate("/contact")}
          >
            <p>{isEnglish ? "CONTACT" : "LIÊN HỆ"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
