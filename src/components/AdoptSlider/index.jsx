import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import React from "react";
import "./style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sticker from "../../asset/Icon/pets.png";

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

  return (
    <div className="adopt_slider">
      <div className="after_container"></div>
      <div className="container">
        <div>
          <h1>BÉ NGOAN TRONG TUẦN</h1>
          <span>
            <img src={sticker} alt="" />
          </span>
        </div>
        <div className="slider_container">
          <Slider {...settings} className="slider">
            <div className="item">
              <img
                src="https://www.hanoipetadoption.com/admin/user-content/Animal/692dd26f-8d3e-4d12-a492-3a7f78d56154.jpg"
                alt=""
              />
              <h2>Núi</h2>
              <hr />
              <ul>
                <li>
                  <strong>Giới tính: </strong>Đực
                </li>
                <hr />
                <li>
                  <strong>Tuổi: </strong>Trẻ
                </li>
                <hr />
                <li>
                  <strong>Tiêm phòng: </strong>Có
                </li>
                <hr />
              </ul>
            </div>
            <div className="item">
              <img
                src="https://www.hanoipetadoption.com/admin/user-content/Animal/692dd26f-8d3e-4d12-a492-3a7f78d56154.jpg"
                alt=""
              />
              <h2>Núi</h2>
              <hr />
              <ul>
                <li>
                  <strong>Giới tính: </strong>Đực
                </li>
                <hr />
                <li>
                  <strong>Tuổi: </strong>Trẻ
                </li>
                <hr />
                <li>
                  <strong>Tiêm phòng: </strong>Có
                </li>
                <hr />
              </ul>
            </div>
            <div className="item">
              <img
                src="https://www.hanoipetadoption.com/admin/user-content/Animal/692dd26f-8d3e-4d12-a492-3a7f78d56154.jpg"
                alt=""
              />
              <h2>Núi</h2>
              <hr />
              <ul>
                <li>
                  <strong>Giới tính: </strong>Đực
                </li>
                <hr />
                <li>
                  <strong>Tuổi: </strong>Trẻ
                </li>
                <hr />
                <li>
                  <strong>Tiêm phòng: </strong>Có
                </li>
                <hr />
              </ul>
            </div>
            <div className="item">
              <img
                src="https://www.hanoipetadoption.com/admin/user-content/Animal/692dd26f-8d3e-4d12-a492-3a7f78d56154.jpg"
                alt=""
              />
              <h2>Núi</h2>
              <hr />
              <ul>
                <li>
                  <strong>Giới tính: </strong>Đực
                </li>
                <hr />
                <li>
                  <strong>Tuổi: </strong>Trẻ
                </li>
                <hr />
                <li>
                  <strong>Tiêm phòng: </strong>Có
                </li>
                <hr />
              </ul>
            </div>
            <div className="item">
              <img
                src="https://www.hanoipetadoption.com/admin/user-content/Animal/692dd26f-8d3e-4d12-a492-3a7f78d56154.jpg"
                alt=""
              />
              <h2>Núi</h2>
              <hr />
              <ul>
                <li>
                  <strong>Giới tính: </strong>Đực
                </li>
                <hr />
                <li>
                  <strong>Tuổi: </strong>Trẻ
                </li>
                <hr />
                <li>
                  <strong>Tiêm phòng: </strong>Có
                </li>
                <hr />
              </ul>
            </div>
            <div className="item">
              <img
                src="https://www.hanoipetadoption.com/admin/user-content/Animal/692dd26f-8d3e-4d12-a492-3a7f78d56154.jpg"
                alt=""
              />
              <h2>Núi</h2>
              <hr />
              <ul>
                <li>
                  <strong>Giới tính: </strong>Đực
                </li>
                <hr />
                <li>
                  <strong>Tuổi: </strong>Trẻ
                </li>
                <hr />
                <li>
                  <strong>Tiêm phòng: </strong>Có
                </li>
                <hr />
              </ul>
            </div>
            <div className="item">
              <img
                src="https://www.hanoipetadoption.com/admin/user-content/Animal/692dd26f-8d3e-4d12-a492-3a7f78d56154.jpg"
                alt=""
              />
              <h2>Núi</h2>
              <hr />
              <ul>
                <li>
                  <strong>Giới tính: </strong>Đực
                </li>
                <hr />
                <li>
                  <strong>Tuổi: </strong>Trẻ
                </li>
                <hr />
                <li>
                  <strong>Tiêm phòng: </strong>Có
                </li>
                <hr />
              </ul>
            </div>
            <div className="item">
              <img
                src="https://www.hanoipetadoption.com/admin/user-content/Animal/692dd26f-8d3e-4d12-a492-3a7f78d56154.jpg"
                alt=""
              />
              <h2>Núi</h2>
              <hr />
              <ul>
                <li>
                  <strong>Giới tính: </strong>Đực
                </li>
                <hr />
                <li>
                  <strong>Tuổi: </strong>Trẻ
                </li>
                <hr />
                <li>
                  <strong>Tiêm phòng: </strong>Có
                </li>
                <hr />
              </ul>
            </div>
          </Slider>

          <div>
            <div className="button">
              <button>Nhận Nuôi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdoptSlider;
