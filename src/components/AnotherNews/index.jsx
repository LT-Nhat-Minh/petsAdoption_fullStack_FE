import { UserOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./style.scss";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import sticker from "../../asset/Icon/pets.png";
import { useLanguageContext } from "../../context/language.provider";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="next" onClick={onClick}>
      <KeyboardArrowRight fontSize="large" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="prev" onClick={onClick}>
      <KeyboardArrowLeft fontSize="large" />
    </div>
  );
}

function AnotherNews(props) {
  const { isEnglish, setIsEnglish } = useLanguageContext();
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
    const shuffled = shuffleArray(props.news.slice(), 6);
    setRandomList(shuffled);
  }, []);

  function shuffleArray(array, size) {
    for (let i = array.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (array.length - 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array.slice(0, size);
  }

  function truncateText(item, size) {
    return item.length > size ? item.slice(0, size) + "..." : item;
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
        <Slider {...settings}>
          {randomList.map((item, index) => {
            const [day, month, year] = item.date.split("/");
            return (
              <div
                className="card"
                onClick={() => {
                  navigate(`/news/${item.title}`);
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
                    <span>{isEnglish ? "Posted by " : "Đăng bởi "}</span>
                    <span>
                      <UserOutlined /> {item.author}
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
      </div>
    </div>
  );
}

export default AnotherNews;
