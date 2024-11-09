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

function Carousel() {
  const list = [
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
  const itemsRef = useRef([]);

  const handleClickPrev = () => {
    const currentIndex = itemsRef.current.findIndex((item) =>
      item.classList.contains("active")
    );
    const prevIndex = currentIndex === 0 ? list.length - 1 : currentIndex - 1;
    updateActiveItem(prevIndex);
  };

  const handleClickNext = () => {
    const currentIndex = itemsRef.current.findIndex((item) =>
      item.classList.contains("active")
    );
    const nextIndex = currentIndex === list.length - 1 ? 0 : currentIndex + 1;
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
  };

  React.useEffect(() => {
    if (itemsRef.current.length > 0) {
      itemsRef.current[0].classList.add("active");
    }
  }, []);

  return (
    <div className="carousel">
      <div className="list">
        {list.map((item, index) => (
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
