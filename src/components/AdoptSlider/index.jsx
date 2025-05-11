import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Card } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import sticker from "../../asset/Icon/pets.png";
import { callFetchPets } from "../../services/api";
import "./style.scss";

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
  const [listPet, setListPet] = useState([]);
  const navigate = useNavigate();
  const isEnglish = useSelector((state) => state.language.isEnglish);

  function shuffleArray(array, size) {
    let shuffled = array.slice();
    for (let i = 0; i < shuffled.length; i++) {
      const randomIndex = Math.floor(Math.random() * (shuffled.length - 1));
      [shuffled[i], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[i],
      ];
    }
    return shuffled.slice(0, size);
  }
  useEffect(() => {
    const fetchAndShuffle = async () => {
      const res = await callFetchPets();
      if (res && res.data) {
        const rawList = res.data;
        setListPet(rawList);
        setPaginatedList(shuffleArray(rawList.slice(), 8));
      }
    };

    fetchAndShuffle();
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
      return status === true ? "Yes" : status === false ? "No" : "Unclear";
    } else {
      return status === true ? "Có" : status === false ? "Không" : "Chưa rõ";
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
            {isEnglish ? "WELL-BEHAVED PETS THIS WEEK" : "BÉ NGOAN TRONG TUẦN"}
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
                  cover={
                    <img
                      src={
                        `${process.env.REACT_APP_BACKEND_PUBLIC_URL}` +
                        "/images/" +
                        item.image
                      }
                      alt="image"
                    />
                  }
                  hoverable
                  onClick={() => {
                    handleNavigate(item._id);
                  }}
                >
                  <div className="card-container">
                    <div className="title">
                      <h3>{item.name}</h3>
                    </div>
                    <hr />
                    <div className="information">
                      <p>
                        <strong>{isEnglish ? "Gender:" : "Giới tính:"}</strong>{" "}
                        {getGenderStatus(isEnglish, item.gender)}
                        <hr />
                      </p>
                      <p>
                        <strong>{isEnglish ? "Age:" : "Tuổi:"}</strong>{" "}
                        {getAgeStatus(isEnglish, item.age)}
                        <hr />
                      </p>
                      <p>
                        <strong>
                          {isEnglish ? "Vaccinated:" : "Tiêm phòng:"}
                        </strong>{" "}
                        {getVaccinationStatus(isEnglish, item.vaccinated)}
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
                {isEnglish ? "Adopt" : "Nhận Nuôi"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdoptSlider;
