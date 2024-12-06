import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sticker from "../../asset/Icon/pets.png";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

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
  const [paginatedList, setPaginatedList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let newList = props.list.slice(0, 8);
    setPaginatedList(newList);
  }, []);

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

  const handleNavigate = (id) => {
    navigate(`/nhan-nuoi/tat-ca-cac-be/${id}`);
  };

  const handleClickPrev = () => {};

  const handleClickNext = () => {};

  const getVaccinationStatus = (isEnglish, status) => {
    if (isEnglish) {
      return status === "u" ? "No" : status === "t" ? "Yes" : "Unclear";
    } else {
      return status === "u" ? "Không" : status === "t" ? "Có" : "Chưa rõ";
    }
  };

  const getAgeStatus = (isEnglish, age) => {
    if (isEnglish) {
      return age === "Nhí" ? "Baby" : age === "Nhỡ" ? "Juvenile" : "Adult";
    } else {
      return age === "Nhí" ? "Nhí" : age === "Nhỡ" ? "Nhỡ" : "Trưởng Thành";
    }
  };

  const getGenderStatus = (isEnglish, gender) => {
    if (isEnglish) {
      return gender === "Đực" ? "Male" : "Female";
    } else {
      return gender === "Đực" ? "Đực" : "Cái";
    }
  };

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
            {paginatedList.map((item, index) => {
              return (
                <Card
                  cover={<img src={item.url} alt="image" />}
                  hoverable
                  onClick={() => {
                    handleNavigate(item.id);
                  }}
                >
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
                        {getGenderStatus(props.isEnglish, item.gender)}
                        <hr />
                      </p>
                      <p>
                        <strong>{props.isEnglish ? "Age:" : "Tuổi:"}</strong>{" "}
                        {getAgeStatus(props.isEnglish, item.age)}
                        <hr />
                      </p>
                      <p>
                        <strong>
                          {props.isEnglish ? "Vaccinated:" : "Tiêm phòng:"}
                        </strong>{" "}
                        {getVaccinationStatus(props.isEnglish, item.g)}
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
              <button
                style={{ textTransform: "uppercase" }}
                onClick={() => navigate("/nhan-nuoi/tat-ca-cac-be")}
              >
                {props.isEnglish ? "Adopt" : "Nhận Nuôi"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdoptSlider;
