import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import React, { useEffect } from "react";
import "./style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sticker from "../../asset/Icon/pets.png";
import { Card } from "antd";

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

function AdoptSlider(props) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

  const handleClickPrev = () => {};

  const handleClickNext = () => {};

  useEffect(() => {
    console.log(props);
  });

  return (
    <div className="adopt_slider">
      <div className="after_container"></div>
      <div className="container">
        <div>
          <h1>
            {props.isEnglish
              ? "WELL-BEHAVED PETS THIS WEEK"
              : "BÉ NGOAN TRONG TUẦN"}
          </h1>
          <span>
            <img src={sticker} alt="" />
          </span>
        </div>
        <div className="slider_container">
          <Slider {...settings} className="slider">
            {props.list.map((item, index) => {
              return (
                <Card cover={<img src={item.url} alt="image" />} hoverable>
                  <div className="card-container">
                    <div className="title">
                      <h3>{item.name}</h3>
                    </div>
                    <hr />
                    <div className="information">
                      <p>
                        <strong>
                          {props.isEnglish ? "Gender:" : "Giới tính:"}
                        </strong>{" "}
                        {item.gender}
                        <hr />
                      </p>
                      <p>
                        <strong>{props.isEnglish ? "Age:" : "Tuổi:"}</strong>{" "}
                        {item.age}
                        <hr />
                      </p>
                      <p>
                        <strong>
                          {props.isEnglish ? "Vaccinated:" : "Tiêm phòng:"}
                        </strong>{" "}
                        {item.vaccined}
                        <hr />
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </Slider>

          <div>
            <div className="button">
              <button>{props.isEnglish ? "Adopt" : "Nhận Nuôi"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdoptSlider;
