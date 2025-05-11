import { UserOutlined } from "@ant-design/icons";
import { Col, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ToSupport from "../../components/ToSupport";
import SideBar from "./components/SideBar";
import "./style.scss";

function News(props) {
  let navigate = useNavigate();
  const isEnglish = useSelector((state) => state.language.isEnglish);
  const location = useLocation();
  const [current, setCurrent] = useState(1);
  const [paginatedList, setPaginatedList] = useState([]);
  let [filteredList, setFilteredList] = useState(props.news.slice());
  const pageSize = 4;

  useEffect(() => {
    let startIndex = (current - 1) * pageSize;
    let endIndex = startIndex + pageSize;
    let filtered = props.news.filter((item) => {
      return props.category === "all" || item.category.includes(props.category);
    });
    setFilteredList(filtered);
    setPaginatedList(filtered.slice(startIndex, endIndex));
  }, [current]);

  const handleNavigate = (title) => {
    navigate(`/news/${title}`);
  };

  function truncateText(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  return (
    <div className="news">
      {location.pathname === "/news" ? (
        <>
          <div className="banner">
            <div className="container">
              <h1 className="title">{isEnglish ? "News" : "Tin Tức"}</h1>
              <p className="breadcrumbs">
                <span className="root" onClick={() => navigate("/")}>
                  {isEnglish ? "Home" : "Trang Chủ"}
                </span>{" "}
                {">"}{" "}
                <span className="current">
                  {isEnglish ? "News" : "Tin Tức"}
                </span>
              </p>
            </div>
          </div>
          <div className="container">
            <div className="content">
              <Row gutter={24}>
                {paginatedList.map((item, index) => {
                  const [day, month, year] = item.date.split("/");
                  return (
                    <Col span={12} key={index}>
                      <div
                        className="card"
                        onClick={() => {
                          handleNavigate(item.title);
                        }}
                      >
                        <div className="thumbnail">
                          <img src={item.url} alt="" />
                        </div>
                        <div className="info">
                          <div className="date">
                            <div className="month">
                              {isEnglish ? `M ${month}` : `T ${month}`}
                            </div>
                            <div className="day">{day}</div>
                          </div>
                          <p className="title">
                            {isEnglish
                              ? truncateText(item.title_english, 40)
                              : truncateText(item.title, 40)}
                          </p>
                          <p className="des">
                            {isEnglish
                              ? truncateText(item.des_english, 150)
                              : truncateText(item.des, 150)}
                          </p>
                          <div className="author">
                            <span>
                              {isEnglish ? "Posted by " : "Đăng bởi "}
                            </span>
                            <span>
                              <UserOutlined /> {item.author}
                            </span>
                          </div>
                          <div className="button">
                            <button>
                              {isEnglish ? "READ MORE" : "CHI TIẾT"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
              <Pagination
                total={filteredList.length}
                current={current}
                pageSize={pageSize}
                responsive={true}
                onChange={(Page) => {
                  setCurrent(Page);
                }}
              />
            </div>
            <SideBar
              category={props.category}
              setCategory={props.setCategory}
            />
          </div>
          <ToSupport />
        </>
      ) : null}
      <Outlet />
    </div>
  );
}

export default News;
