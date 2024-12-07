import React, { useEffect, useState } from "react";
import "./style.scss";
import { Navigate, useNavigate } from "react-router-dom";
import SideBar from "./components/SideBar";
import { Col, Pagination, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ToSupport from "../../components/ToSupport";

function News(props) {
  let navigate = useNavigate();
  const [current, setCurrent] = useState(1);
  const [paginatedList, setPaginatedList] = useState([]);
  const pageSize = 4;

  useEffect(() => {
    let startIndex = (current - 1) * pageSize;
    let endIndex = startIndex + pageSize;
    setPaginatedList(props.news.slice(startIndex, endIndex));
  }, [current]);

  const handleNavigate = (title) => {
    navigate(`/news/${title}`);
  };

  function truncateText(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  return (
    <div className="news">
      <div className="banner">
        <div className="container">
          <h1 className="title">{props.isEnglish ? "News" : "Tin Tức"}</h1>
          <p className="breadcrumbs">
            <span className="root" onClick={() => navigate("/")}>
              {props.isEnglish ? "Home" : "Trang Chủ"}
            </span>{" "}
            {">"}{" "}
            <span className="current">
              {props.isEnglish ? "News" : "Tin Tức"}
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
                          {props.isEnglish ? `M ${month}` : `T ${month}`}
                        </div>
                        <div className="day">{day}</div>
                      </div>
                      <p className="title">
                        {props.isEnglish
                          ? truncateText(item.title_english, 40)
                          : truncateText(item.title, 40)}
                      </p>
                      <p className="des">
                        {props.isEnglish
                          ? truncateText(item.des_english, 150)
                          : truncateText(item.des, 150)}
                      </p>
                      <div className="author">
                        <span>
                          {props.isEnglish ? "Posted by " : "Đăng bởi "}
                        </span>
                        <span>
                          <UserOutlined /> {item.author}
                        </span>
                      </div>
                      <div className="button">
                        <button>
                          {props.isEnglish ? "READ MORE" : "CHI TIẾT"}
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>

          <Pagination
            total={props.news.length}
            current={current}
            pageSize={pageSize}
            responsive={true}
            onChange={(Page) => {
              setCurrent(Page);
            }}
          />
        </div>

        <SideBar isEnglish={props.isEnglish} />
      </div>

      <button
        onClick={() => {
          console.log(props);
        }}
      ></button>

      <ToSupport isEnglish={props.isEnglish} />
    </div>
  );
}

export default News;
