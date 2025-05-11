import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../../components/RecoverSlider/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sticker from "../../asset/Icon/pets.png";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function DonaNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="donanext" onClick={onClick}>
      <KeyboardArrowRight fontSize="large" />
    </div>
  );
}

function DonaPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="donaprev" onClick={onClick}>
      <KeyboardArrowLeft fontSize="large" />
    </div>
  );
}

function truncateText(item, size) {
  return item.length > size ? item.slice(0, size) + "..." : item;
}

function RecoverSlider(props) {
  const isEnglish = useSelector((state) => state.language.isEnglish);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <DonaNextArrow />,
    prevArrow: <DonaPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [filteredList, setFilteredList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filtered = props.news.filter((item) => item.category.includes("4"));
    setFilteredList(filtered);
  }, []);

  const handleClickPrev = () => {};

  const handleClickNext = () => {};

  return (
    <div className="dona_container">
      <div className="quatrinh">
        {isEnglish ? "BEFORE AND AFTER PROCESS" : "QUÁ TRÌNH TRƯỚC VÀ SAU"}
        <br />
        <img src={sticker} alt="" className="sticker" />
      </div>
      <div className="slider_dona_container">
        <Slider {...settings}>
          {filteredList &&
            filteredList.map((item, index) => (
              <div
                className="donaitem"
                key={index}
                onClick={() => {
                  navigate(`/news/${item.title}`);
                }}
              >
                <img className="donaimg" src={item.url} alt="" />
                <h2 className="truocvasau">
                  {isEnglish
                    ? truncateText(item.title_english, 60)
                    : truncateText(item.title, 40)}
                </h2>
                <hr />
                <p>
                  {isEnglish
                    ? truncateText(item.des_english, 200)
                    : truncateText(item.des, 200)}
                </p>
              </div>
            ))}
        </Slider>
        <button
          className="xemthembutton"
          onClick={() => {
            navigate("/news");
          }}
        >
          {isEnglish ? "SEE MORE" : "XEM THÊM"}
        </button>
      </div>
    </div>
  );
}

export default RecoverSlider;
