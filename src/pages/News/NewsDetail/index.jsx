import React, { useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBar from "../components/SideBar";

import AnotherNews from "../../../components/AnotherNews";
import ToSupport from "../../../components/ToSupport";
import NewsDetailContent from "../components/NewsDetailConent";

function NewsDetail(props) {
  const navigate = useNavigate();
  const isEnglish = useSelector((state) => state.language.isEnglish);

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse(); // This triggers the parsing of all Facebook elements like comments
    }
  }, []);

  return (
    <div className="news_detail">
      <div className="banner">
        <div className="container">
          <h1 className="title">{isEnglish ? "News" : "Tin Tức"}</h1>
          <p className="breadcrumbs">
            <span className="root" onClick={() => navigate("/")}>
              {isEnglish ? "Home" : "Trang Chủ"}
            </span>{" "}
            {">"}{" "}
            <span className="root" onClick={() => navigate("/news")}>
              {isEnglish ? "News" : "Tin Tức"}
            </span>{" "}
            {">"}{" "}
            <span className="current">
              {isEnglish
                ? "Rescuing a Flea-Infected Puppy Abandoned in Phu Tho"
                : "Cứu hộ bé cún ghẻ bị bỏ rơi ở Phú Thọ"}
            </span>
          </p>
        </div>
      </div>
      <div class="container">
        <NewsDetailContent isEnglish={props.isEnglish} />
        <SideBar category={props.category} setCategory={props.setCategory} />
      </div>
      <AnotherNews news={props.news} />
      <ToSupport />
    </div>
  );
}

export default NewsDetail;
