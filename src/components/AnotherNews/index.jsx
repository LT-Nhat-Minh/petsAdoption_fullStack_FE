import { UserOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./style.scss";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import sticker from "../../asset/Icon/pets.png";
import { useSelector } from "react-redux";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="next" onClick={onClick}>
      <KeyboardArrowRight fontSize="large" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prev" onClick={onClick}>
      <KeyboardArrowLeft fontSize="large" />
    </div>
  );
}

function AnotherNews(props) {
  const isEnglish = useSelector((state) => state.language.isEnglish);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [randomList, setRandomList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (props.news && props.news.length > 0) {
      const shuffled = shuffleArray(props.news.slice(), 6);
      setRandomList(shuffled);
    }
  }, [props.news]);

  function shuffleArray(array, size) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (newArray.length - 1));
      [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
    }
    return newArray.slice(0, size);
  }

  function truncateText(text, size) {
    if (!text) return "";
    return text.length > size ? text.slice(0, size) + "..." : text;
  }

  function formatDate(dateString) {
    if (!dateString) return ["", "", ""];
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return [day, month, year];
  }

  return (
    <div className="another_news">
      <div className="title">
        <h1>{isEnglish ? "Related News" : "Tin Liên Quan"}</h1>
        <span>
          <img src={sticker} alt="" />
        </span>
      </div>
      <div className="container">
        {randomList.length > 0 ? (
          <Slider {...settings}>
            {randomList.map((item) => {
              const [day, month, year] = formatDate(item.createdAt || item.date);
              return (
                <div
                  className="card"
                  key={item._id}
                  onClick={() => {
                    navigate(`/news/${item._id}`);
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
                      {truncateText(item.description || getFirstParagraphText(item.blocks), 150)}
                    </p>
                    <div className="author">
                      <span>{isEnglish ? "Posted by " : "Đăng bởi "}</span>
                      <span>
                        <UserOutlined /> {item.author || "Admin"}
                      </span>
                    </div>
                    <div className="button">
                      <button>{isEnglish ? "READ MORE" : "CHI TIẾT"}</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        ) : (
          <p>{isEnglish ? "No related news" : "Không có tin liên quan"}</p>
        )}
      </div>
    </div>
  );
}

function getFirstParagraphText(blocks) {
  if (!blocks) return "";
  const paragraph = blocks.find(block => block.type === "paragraph");
  return paragraph ? paragraph.data.text : "";
}

export default AnotherNews;
