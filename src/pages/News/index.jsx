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
  const [filteredList, setFilteredList] = useState([]);
  const pageSize = 4;

  useEffect(() => {
    // Initialize filteredList with props.news when component mounts or props.news changes
    setFilteredList(props.news || []);
  }, [props.news]);

  useEffect(() => {
    // Apply filtering and pagination
    let filtered = props.news.filter((item) => {
      return props.category === "all" || 
             (item.category && item.category.includes(props.category));
    });
    
    setFilteredList(filtered);
    
    const startIndex = (current - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setPaginatedList(filtered.slice(startIndex, endIndex));
  }, [current, props.news, props.category]);

  const handleNavigate = (id) => {
    navigate(`/news/${id}`);
  };

  function truncateText(text, maxLength) {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${day}/${month}/${date.getFullYear()}`;
  }

  function getFirstParagraphText(blocks) {
    if (!blocks) return "";
    const paragraph = blocks.find(block => block.type === "paragraph");
    return paragraph ? paragraph.data.text : "";
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
                {paginatedList.map((item) => {
                  const formattedDate = formatDate(item.createdAt);
                  const [day, month, year] = formattedDate.split("/");
                  const description = getFirstParagraphText(item.blocks);
                  
                  return (
                    <Col span={12} key={item._id}>
                      <div
                        className="card"
                        onClick={() => {
                          handleNavigate(item._id);
                        }}
                      >
                        {item.thumbnail && (
                          <div className="thumbnail">
                            <img 
                              src={`${process.env.REACT_APP_BACKEND_URL}/images/${item.thumbnail}`} 
                              alt={item.title} 
                            />
                          </div>
                        )}
                        <div className="info">
                          <div className="date">
                            <div className="month">
                              {isEnglish ? `M ${month}` : `T ${month}`}
                            </div>
                            <div className="day">{day}</div>
                          </div>
                          <p className="title">
                            {truncateText(item.title, 40)}
                          </p>
                          <p className="des">
                            {truncateText(description, 150)}
                          </p>
                          <div className="author">
                            <span>
                              {isEnglish ? "Posted by " : "Đăng bởi "}
                            </span>
                            <span>
                              <UserOutlined /> Admin
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
                onChange={(page) => {
                  setCurrent(page);
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