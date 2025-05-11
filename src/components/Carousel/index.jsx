import React, { useEffect, useRef, useState } from "react";
import img1 from "../../asset/Carousel/1.jpeg";
import img2 from "../../asset/Carousel/2.jpeg";
import img3 from "../../asset/Carousel/3.jpeg";
import img4 from "../../asset/Carousel/4.jpeg";
import img5 from "../../asset/Carousel/5.jpg";
import img6 from "../../asset/Carousel/6.jpg";
import img7 from "../../asset/Carousel/7.jpg";
import "./style.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useLanguageContext } from "../../context/language.provider";

function Carousel(props) {
  const listViet = [
    {
      title: "Những chú chó cần được nhận nuôi!",
      des: "Mong các bạn hãy cho các bé một cơ hội! Trở thành thành viên trong gia đình của mình!",
      btn: "Đọc thêm",
      img: img1,
    },
    {
      title: "NHỮNG BÉ MÈO ĐANG CHỜ ĐƯỢC NHẬN NUÔI...",
      des: "Mong các bạn hãy cho các bé một cơ hội! Trở thành thành viên trong gia đình của mình!",
      btn: "Đọc thêm",
      img: img2,
    },
    {
      title: "THÔNG BÁO ĐỔI TÀI KHOẢN PAYPAL",
      des: "Vì một số lý do nên nhóm sẽ dừng sử dụng Paypal cũ hanoipetadoption@gmail.com và chuyển sang hanoipetadoptionorg@gmail.com",
      btn: "Đọc thêm",
      img: img3,
    },
    {
      title: "Cách ủng hộ giúp đỡ Nhóm",
      des: "Cùng tìm hiểu các hình thức để ủng hộ cho hoạt động của Hanoi Pet Adoption!",
      btn: "Đọc thêm",
      img: img4,
    },
    {
      title: "Hãy nhận nuôi, Đừng xua đuổi!",
      des: "Loài vật cũng có tri giác và cảm xúc, chúng cũng biết đau, biết sợ hãi, biết yêu thương và muốn được yêu thương.",
      btn: "Đọc thêm",
      img: img5,
    },
    {
      title: "Cùng tham gia group YÊU CÚN CỎ nha!",
      des: "Các bạn ơi! cùng tham gia group YÊU CÚN CỎ với chúng mình nha !",
      btn: "Đọc thêm",
      img: img6,
    },
    {
      title: "Ghé Thị Trấn Mèo chơi nhé các bạn!",
      des: "Group của nhóm nhằm chia sẻ kinh nghiệm nuôi và cứu hộ thú cưng.",
      btn: "Đọc thêm",
      img: img7,
    },
  ];
  const listEng = [
    {
      title: "Dogs in Need of Adoption!",
      des: "Please give these pups a chance! Let them become a part of your family!",
      btn: "Read More",
      img: img1,
    },
    {
      title: "CATS WAITING TO BE ADOPTED...",
      des: "Please give these kitties a chance! Let them become a part of your family!",
      btn: "Read More",
      img: img2,
    },
    {
      title: "NOTICE: PAYPAL ACCOUNT CHANGE",
      des: "Due to certain reasons, we will no longer use the old PayPal account hanoipetadoption@gmail.com and will switch to hanoipetadoptionorg@gmail.com",
      btn: "Read More",
      img: img3,
    },
    {
      title: "Ways to Support the Group",
      des: "Discover ways to support Hanoi Pet Adoption’s activities!",
      btn: "Read More",
      img: img4,
    },
    {
      title: "Adopt, Don’t Abandon!",
      des: "Animals have senses and emotions; they feel pain, fear, love, and also want to be loved.",
      btn: "Read More",
      img: img5,
    },
    {
      title: "Join the ‘YÊU CÚN CỎ’ Group!",
      des: "Hey everyone! Join the 'YÊU CÚN CỎ' group with us!",
      btn: "Read More",
      img: img6,
    },
    {
      title: "Visit the Cat Town!",
      des: "Our group shares experiences in pet care and rescue.",
      btn: "Read More",
      img: img7,
    },
  ];

  const { isEnglish, setIsEnglish } = useLanguageContext();
  const itemsRef = useRef([]);

  const handleClickPrev = () => {
    const currentIndex = itemsRef.current.findIndex((item) =>
      item.classList.contains("active")
    );
    const prevIndex =
      currentIndex === 0 ? listViet.length - 1 : currentIndex - 1;
    updateActiveItem(prevIndex);
  };

  const handleClickNext = () => {
    const currentIndex = itemsRef.current.findIndex((item) =>
      item.classList.contains("active")
    );
    const nextIndex =
      currentIndex === listViet.length - 1 ? 0 : currentIndex + 1;
    updateActiveItem(nextIndex);
  };

  const updateActiveItem = (newIndex) => {
    itemsRef.current.forEach((item, index) => {
      if (
        index === newIndex
          ? item.classList.add("active")
          : item.classList.remove("active")
      );
    });
    itemsRef.current.forEach((item, index) => {
      if (
        index === newIndex
          ? item.classList.add("active")
          : item.classList.remove("active")
      );
    });
  };

  useEffect(() => {
    if (itemsRef.current.length > 0) {
      itemsRef.current[0].classList.add("active");
    }
    console.log("english", isEnglish);
  }, [isEnglish]);

  return (
    <div className="carousel">
      <div className="list">
        {(isEnglish ? listEng : listViet).map((item, index) => (
          <div
            className="item"
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <img src={item.img} alt="" />
            <div className="content">
              <h1 style={{ textTransform: "uppercase" }}>{item.title}</h1>
              <p>{item.des}</p>
              <div className="button_container">
                <button style={{ textTransform: "uppercase" }}>
                  {item.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <div className="prev" onClick={handleClickPrev}>
          <LeftOutlined />
        </div>
        <div className="next" onClick={handleClickNext}>
          <RightOutlined />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
