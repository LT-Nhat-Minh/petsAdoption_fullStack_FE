import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import React from "react";
import Slider from "react-slick";
import "../../components/RecoverSlider/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sticker from "../../asset/Icon/pets.png";

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

function RecoverSlider(props) {
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

  const handleClickPrev = () => {};

  const handleClickNext = () => {};

  return (
    <div className="dona_container">
      <div className="quatrinh">
        QUÁ TRÌNH TRƯỚC VÀ SAU<br></br>
        <img src={sticker} alt="" className="sticker" />
      </div>
      <div className="slider_dona_container">
        <Slider {...settings}>
          <div className="donaitem">
            <img
              className="donaimg"
              src="https://www.hanoipetadoption.com/admin/user-content/News/c5e1ad8d-6104-4d60-acb1-a95cae816527.jpg"
              alt=""
            />
            <h2 className="truocvasau">Trước và sau của bé Sữa</h2>
            <hr />
            <p>
              Trước và sau của bé Sữa thay đổi được tăng từ 3 kg đến 5 kgs xinh
              đẹp và đáng yêu hơn, tinh thần hay vui đùa nô nghịch cùng bạn bè.
            </p>
          </div>
          <div className="donaitem">
            <img
              className="donaimg"
              src="https://www.hanoipetadoption.com/admin/user-content/News/c5e1ad8d-6104-4d60-acb1-a95cae816527.jpg"
              alt=""
            />
            <h2 className="truocvasau">Trước và sau của bé Sữa</h2>
            <hr />
            <p>
              Trước và sau của bé Sữa thay đổi được tăng từ 3 kg đến 5 kgs xinh
              đẹp và đáng yêu hơn, tinh thần hay vui đùa nô nghịch cùng bạn bè.
            </p>
          </div>{" "}
          <div className="donaitem">
            <img
              className="donaimg"
              src="https://www.hanoipetadoption.com/admin/user-content/News/c5e1ad8d-6104-4d60-acb1-a95cae816527.jpg"
              alt=""
            />
            <h2 className="truocvasau">Trước và sau của bé Sữa</h2>
            <hr />
            <p>
              Trước và sau của bé Sữa thay đổi được tăng từ 3 kg đến 5 kgs xinh
              đẹp và đáng yêu hơn, tinh thần hay vui đùa nô nghịch cùng bạn bè.
            </p>
          </div>{" "}
          <div className="donaitem">
            <img
              className="donaimg"
              src="https://www.hanoipetadoption.com/admin/user-content/News/c5e1ad8d-6104-4d60-acb1-a95cae816527.jpg"
              alt=""
            />
            <h2 className="truocvasau">Trước và sau của bé Sữa</h2>
            <hr />
            <p>
              Trước và sau của bé Sữa thay đổi được tăng từ 3 kg đến 5 kgs xinh
              đẹp và đáng yêu hơn, tinh thần hay vui đùa nô nghịch cùng bạn bè.
            </p>
          </div>{" "}
          <div className="donaitem">
            <img
              className="donaimg"
              src="https://www.hanoipetadoption.com/admin/user-content/News/c5e1ad8d-6104-4d60-acb1-a95cae816527.jpg"
              alt=""
            />
            <h2 className="truocvasau">Trước và sau của bé Sữa</h2>
            <hr />
            <p>
              Trước và sau của bé Sữa thay đổi được tăng từ 3 kg đến 5 kgs xinh
              đẹp và đáng yêu hơn, tinh thần hay vui đùa nô nghịch cùng bạn bè.
            </p>
          </div>{" "}
          <div className="donaitem">
            <img
              className="donaimg"
              src="https://www.hanoipetadoption.com/admin/user-content/News/c5e1ad8d-6104-4d60-acb1-a95cae816527.jpg"
              alt=""
            />
            <h2 className="truocvasau">Trước và sau của bé Sữa</h2>
            <hr />
            <p>
              Trước và sau của bé Sữa thay đổi được tăng từ 3 kg đến 5 kgs xinh
              đẹp và đáng yêu hơn, tinh thần hay vui đùa nô nghịch cùng bạn bè.
            </p>
          </div>{" "}
          <div className="donaitem">
            <img
              className="donaimg"
              src="https://www.hanoipetadoption.com/admin/user-content/News/c5e1ad8d-6104-4d60-acb1-a95cae816527.jpg"
              alt=""
            />
            <h2 className="truocvasau">Trước và sau của bé Sữa</h2>
            <hr />
            <p>
              Trước và sau của bé Sữa thay đổi được tăng từ 3 kg đến 5 kgs xinh
              đẹp và đáng yêu hơn, tinh thần hay vui đùa nô nghịch cùng bạn bè.
            </p>
          </div>{" "}
          <div className="donaitem">
            <img
              className="donaimg"
              src="https://www.hanoipetadoption.com/admin/user-content/News/c5e1ad8d-6104-4d60-acb1-a95cae816527.jpg"
              alt=""
            />
            <h2 className="truocvasau">Trước và sau của bé Sữa</h2>
            <hr />
            <p>
              Trước và sau của bé Sữa thay đổi được tăng từ 3 kg đến 5 kgs xinh
              đẹp và đáng yêu hơn, tinh thần hay vui đùa nô nghịch cùng bạn bè.
            </p>
          </div>{" "}
          <div className="donaitem">
            <img
              className="donaimg"
              src="https://www.hanoipetadoption.com/admin/user-content/News/c5e1ad8d-6104-4d60-acb1-a95cae816527.jpg"
              alt=""
            />
            <h2 className="truocvasau">Trước và sau của bé Sữa</h2>
            <hr />
            <p>
              Trước và sau của bé Sữa thay đổi được tăng từ 3 kg đến 5 kgs xinh
              đẹp và đáng yêu hơn, tinh thần hay vui đùa nô nghịch cùng bạn bè.
            </p>
          </div>{" "}
          <div className="donaitem">
            <img
              className="donaimg"
              src="https://www.hanoipetadoption.com/admin/user-content/News/c5e1ad8d-6104-4d60-acb1-a95cae816527.jpg"
              alt=""
            />
            <h2 className="truocvasau">Trước và sau của bé Sữa</h2>
            <hr />
            <p>
              Trước và sau của bé Sữa thay đổi được tăng từ 3 kg đến 5 kgs xinh
              đẹp và đáng yêu hơn, tinh thần hay vui đùa nô nghịch cùng bạn bè.
            </p>
          </div>
        </Slider>
        <button className="xemthembutton">XEM THÊM</button>
      </div>
    </div>
  );
}

export default RecoverSlider;
